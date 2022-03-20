import React from "react";
import { Outlet } from "react-router-dom";
import { Layout, ConfigProvider } from "antd";

import SideBar from "./SideBar";
import HeaderBar from "./Header";
import frFR from "antd/lib/locale/fr_FR";
import "../../styles/BasicLayout.css";

const { Content } = Layout;

const BasicLayout = () => {
  return (
    <ConfigProvider locale={frFR}>
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
    </ConfigProvider>
  );
};

export default BasicLayout;
