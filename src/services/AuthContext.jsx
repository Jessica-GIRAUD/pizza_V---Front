import React, { useState, createContext, useEffect } from "react";
import { isLogged } from "./authentification";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [authState, setAuthState] = useState(null);

  const isLoggedIn = () => {
    isLogged().then((res) => {
      setAuthState(res.data);
    });
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
