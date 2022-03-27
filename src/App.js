import { Routes, Route, Navigate } from "react-router-dom";
import ResetPassword from "./components/admin/authentification/ResetPassword";
import Login from "./components/admin/authentification/Login";
import HomePage from "./components/client/MainPage";
import BasicLayout from "./components/admin/features/Layout/BasicLayout";
import React from "react";
import Layout from "./components/admin/features/Components/Layout";
import RequireAuth from "./components/admin/authentification/RequireAuth";
import PersistLogin from "./components/admin/authentification/PersistLogin";
import "./App.css";
import "antd/dist/antd.less";
import DashboardPizzas from "./components/admin/features/Pizzas/DashboardPizzas";
import DashboardContact from "./components/admin/features/Contact/DashboardContact";
import DashboardActu from "./components/admin/features/Actus/DashboardActu";
import DashboardProfile from "./components/admin/features/Profil/DashboardProfile";

const App = () => {
  return (
    <Routes>
      {/* Website */}
      <Route path="/" element={<HomePage />} />

      <Route path="/admin" element={<Layout />}>
        {/* Public routes*/}
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/register" element={<ResetPassword />} />

        {/* Protected Routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route element={<BasicLayout />}>
              <Route path="dashboard/actualites" element={<DashboardActu />} />
              <Route path="dashboard/pizzas" element={<DashboardPizzas />} />
              <Route path="dashboard/contact" element={<DashboardContact />} />
              <Route path="dashboard/profile" element={<DashboardProfile />} />
            </Route>
          </Route>
        </Route>

        {/* Catch All */}
        <Route path="*" element={<Navigate to="/admin/dashboard/pizzas" />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
