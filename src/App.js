import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/admin/registration/Register";
import Login from "./components/admin/registration/Login";
import HomePage from "./components/client/MainPage";
import Dashboard from "./components/admin/features/Dashboard";
import { AuthProvider } from "./services/AuthContext";
import { PrivateRoute, PrivateRouteLogin } from "./services/PrivateRoute";
import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route element={<PrivateRouteLogin />}>
            <Route path="/admin" element={<Login />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/register" element={<Register />} />
          </Route>

          <Route path="*" element={<Navigate to="/admin" />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
