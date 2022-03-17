import React from "react";
import useAuth from "../hooks/useAuth";

import "../styles/Dashboard.css";

import { Layout } from "antd";

import SideBar from "./layout/SideBar";
import HeaderBar from "./layout/Header";

const { Content } = Layout;

const Dashboard = () => {
  const { auth } = useAuth();

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
          <h1 style={{ color: "black" }}>
            Bienvenue sur le dashboard Pizza Kika
          </h1>
          <h1
            style={{ color: "black" }}
          >{`Utilisateur : ${auth.user.firstname} ${auth.user.lastname} `}</h1>
          <h1
            style={{ color: "black" }}
          >{`Adresse email : ${auth.user.email}`}</h1>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
