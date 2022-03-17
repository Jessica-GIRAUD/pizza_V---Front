import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/admin/authentification/Register";
import Login from "./components/admin/authentification/Login";
import HomePage from "./components/client/MainPage";
import Dashboard from "./components/admin/features/Dashboard";
import React from "react";
import Layout from "./components/admin/features/Layout";
import RequireAuth from "./components/admin/authentification/RequireAuth";
import PersistLogin from "./components/admin/authentification/PersistLogin";
import "./App.css";
import "antd/dist/antd.less";

const App = () => {
  return (
    <Routes>
      {/* Website */}
      <Route path="/" element={<HomePage />} />

      <Route path="/admin" element={<Layout />}>
        {/* Public routes*/}
        <Route path="/admin" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>

        {/* Catch All */}
        <Route path="*" element={<Navigate to="/admin" />} />
      </Route>
    </Routes>
  );
};

export default App;
