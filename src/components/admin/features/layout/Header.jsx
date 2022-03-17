import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../services/Authentification";
import useAuth from "../../hooks/useAuth";
import { LogoutOutlined } from "@ant-design/icons";
import { Layout, Button } from "antd";

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
      <Button type="primary">Button</Button>
    </Header>
  );
};

export default HeaderBar;
