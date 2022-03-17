import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../services/authentification";
import useAuth from "../../hooks/useAuth";
import { LogoutOutlined } from "@ant-design/icons";
import { Layout } from "antd";

const { Header } = Layout;

const HeaderBar = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const onLogOutClick = () => {
    setAuth({});
    logout().then(() => navigate("/admin"));
  };
  return (
    <Header className="site-layout-background header">
      <div onClick={() => onLogOutClick()} className="disconnect">
        <LogoutOutlined style={{ marginRight: "10px" }} /> Se déconnecter{" "}
      </div>
    </Header>
  );
};

export default HeaderBar;
