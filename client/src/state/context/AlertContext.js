import React, { createContext, useReducer } from "react";
import alertReducer from "../reducers/alertReducer";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, { msg: [], style: null });

  const showAlert = (msg, style = "", time = 4000) => {
    dispatch({ type: "ADD_ALERT", payload: { msg, style } });
    setTimeout(() => {
      dispatch({ type: "REMOVE_ALERT" });
    }, time);
  };

  return (
    <AlertContext.Provider value={{ state, showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
