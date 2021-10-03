import React, { useState } from "react";
import { createContext } from "react";
const Context = createContext();
export const UserContext = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const userLog = {
    loggedIn: loggedIn,
    loading: loading,
    toggleLog: () => {
      setLoggedIn(!loggedIn);
      setLoading(false);
    },
    toggleLoading: () =>
      new Promise((resolve) => {
        console.log("in the promise", loading);
        setLoading(true);
        setTimeout(resolve, 1000);
      }),
  };
  return <Context.Provider value={userLog}>{children}</Context.Provider>;
};

export default Context;
