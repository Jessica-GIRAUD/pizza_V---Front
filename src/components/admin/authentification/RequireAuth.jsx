import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.loggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/admin" state={{ from: location }} replace />
  );
};

export default RequireAuth;
