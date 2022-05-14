import { Routes, Route, Navigate } from "react-router-dom";
import ForgetPassword from "./features/admin/authentification/ForgetPassword";
import ResetPassword from "./features/admin/authentification/ResetPassword";
import Login from "./features/admin/authentification/Login";
import HomePage from "./features/client/features/MainPage";
import BasicLayout from "./features/admin/features/Layout/BasicLayout";
import React from "react";
import Layout from "./features/admin/components/Layout";
import RequireAuth from "./features/admin/authentification/RequireAuth";
import PersistLogin from "./features/admin/authentification/PersistLogin";
import "./App.css";
import "antd/dist/antd.less";
import DashboardPizzas from "./features/admin/features/Pizzas/DashboardPizzas";
import DashboardContact from "./features/admin/features/Contact/DashboardContact";
import DashboardActu from "./features/admin/features/Actus/DashboardActu";
import DashboardProfile from "./features/admin/features/Profil/DashboardProfile";
import ErrorPage from "./features/admin/features/ErrorPage";

const App = () => {
  return (
    <Routes>
      {/* Website */}
      <Route path="/" element={<HomePage />} />

      <Route path="/admin" element={<Layout />}>
        {/* Public routes*/}
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/resetpassword" element={<ForgetPassword />} />
        <Route path="/admin/resetpassword/:id" element={<ResetPassword />} />

        {/* Protected Routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route element={<BasicLayout />}>
              <Route path="dashboard/actualites" element={<DashboardActu />} />
              <Route path="dashboard/pizzas" element={<DashboardPizzas />} />
              <Route path="dashboard/contact" element={<DashboardContact />} />
              <Route path="dashboard/profile" element={<DashboardProfile />} />
            </Route>
            <Route
              path="*"
              element={<Navigate to="/admin/dashboard/pizzas" />}
            />
          </Route>
        </Route>

        {/* Catch All */}
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/error" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
