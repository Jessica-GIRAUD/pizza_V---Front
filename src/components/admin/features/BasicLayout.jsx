import React from "react";

import "../styles/Dashboard.css";

import { Layout } from "antd";

import SideBar from "./layout/SideBar";
import HeaderBar from "./layout/Header";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const BasicLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar />

      <Layout className="site-layout">
        <HeaderBar />
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: "20px",
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
