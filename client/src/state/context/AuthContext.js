import React, { useMemo, useCallback, createContext, useReducer, useContext } from "react";
import authReducer from "../reducers/authReducer";
import axios from "axios";
import { AlertContext } from "./AlertContext";
import setToken from "../../utilis/setToken";
import { theme } from "../../styles/Theme";

const initState = {
  token: localStorage.getItem("token"),
  isAuth: false,
  loading: true,
  user: null,
  isInit: false,
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initState);
  const { showAlert } = useContext(AlertContext);

  const authState = useMemo(() => {
    return state;
  }, [state]);

  if (localStorage.token) {
    setToken(localStorage.token);
  }

  const registration = async ({ name, email, password }) => {
    try {
      const res = await axios.post(
        "/api/v1/auth/register",
        JSON.stringify({ name, email, password }),
        { headers: { "Content-Type": "application/json" } }
      );
      dispatch({ type: "REGISTRATION_SUCCESS", payload: res.data });
      dispatch(getAuth());
    } catch (error) {
      dispatch({ type: "REGISTRATION_FAIL" });
      showAlert(
        "Problems with registration, please check your connect and try again!",
        theme.colors.error
      );
    }
  };

  const getAuth = useCallback(async () => {
    try {
      const res = await axios.get("/api/v1/auth/me");
      dispatch({ type: "USER_LOADED", payload: res.data.user });
    } catch (error) {
      dispatch({ type: "AUTH_ERROR" });
    }
  }, []);

  const login = useCallback(
    async ({ email, password }) => {
      try {
        const res = await axios.post(
          "/api/v1/auth/login",
          JSON.stringify({
            email,
            password,
          }),
          { headers: { "Content-Type": "application/json" } }
        );
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        dispatch(getAuth());
      } catch (error) {
        dispatch({ type: "LOGIN_FAIL" });
        showAlert(error.response.data.error, theme.colors.error);
      }
    },
    [getAuth, showAlert]
  );

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const delAccount = async () => {
    try {
      const res = await axios.delete("/api/v1/auth/delete");
      dispatch({ type: "DELETE_ACCOUNT" });
      showAlert(res.data.msg, theme.colors.error);
    } catch (error) {
      throw error.response.data.error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        login,
        getAuth,
        logout,
        registration,
        delAccount,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
