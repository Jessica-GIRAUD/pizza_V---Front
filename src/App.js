import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/admin/authentification/Register";
import Login from "./components/admin/authentification/Login";
import HomePage from "./components/client/MainPage";
import BasicLayout from "./components/admin/features/BasicLayout";
import React from "react";
import Layout from "./components/admin/features/Layout";
import RequireAuth from "./components/admin/authentification/RequireAuth";
import PersistLogin from "./components/admin/authentification/PersistLogin";
import "./App.css";
import "antd/dist/antd.less";
import DashboardPizzas from "./components/admin/features/DashboardPizzas";
import DashboardContact from "./components/admin/features/DashboardContact";

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
            <Route element={<BasicLayout />}>
              <Route path="dashboard/pizzas" element={<DashboardPizzas />} />
              <Route
                path="dashboard/actualites"
                element={<DashboardContact />}
              />
              <Route path="dashboard/contact" element={<DashboardContact />} />
            </Route>
            <Route path="register" element={<Register />} />
          </Route>
        </Route>

        {/* Catch All */}
        <Route path="*" element={<Navigate to="/admin/dashboard/pizzas" />} />
      </Route>
    </Routes>
  );
};

export default App;
