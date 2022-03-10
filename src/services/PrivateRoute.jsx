import React, { useContext, useEffect } from "react";

import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { isLogged } from "./Authentification";

export const PrivateRoute = () => {
  const { authState, setAuthState } = useContext(AuthContext);

  const isLoggedIn = () => {
    isLogged().then((res) => {
      setAuthState(res.data);
    });
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  console.log("authState", authState);
  return authState?.loggedIn ? <Outlet /> : <Navigate to="/admin" />;
};

export const PrivateRouteLogin = ({ children }) => {
  console.log("children", children);
  const { authState } = useContext(AuthContext);

  return !authState?.loggedIn ? <Outlet /> : <Navigate to="/admin/dashboard" />;
};
