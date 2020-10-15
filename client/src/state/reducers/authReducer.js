import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  REGISTRATION_FAIL,
  REGISTRATION_SUCCESS,
  INIT_SUCCESS,
  INIT_FAIL,
  DELETE_ACCOUNT,
} from "../types";
export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTRATION_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuth: true,
        loading: false,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: action.payload,
      };
    case AUTH_ERROR:
    case REGISTRATION_FAIL:
    case LOGOUT:
    case LOGIN_FAIL:
    case DELETE_ACCOUNT:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        loading: false,
        token: null,
        user: null,
      };
    case INIT_SUCCESS:
      return { ...state, isInit: true, loading: false };
    case INIT_FAIL:
      return { ...state, isInit: false, loading: false };
    default:
      return state;
  }
};
