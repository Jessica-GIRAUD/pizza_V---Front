import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../services/Authentification";
import useAuth from "../../hooks/useAuth";
import { LogoutOutlined } from "@ant-design/icons";
import { Layout } from "antd";

const { Header } = Layout;

const HeaderBar = () => {
  const { setAuth, auth } = useAuth();

  const navigate = useNavigate();

  const onLogOutClick = () => {
    setAuth({});
    logout().then(() => navigate("/admin"));
  };
  return (
    <Header className="site-layout-background header">
      <span style={{ marginRight: "30px" }}>
        {`Bienvenue, ${auth?.user.firstname} ${auth?.user.lastname}`}
      </span>
      <div onClick={() => onLogOutClick()} className="disconnect">
        <LogoutOutlined style={{ marginRight: "10px" }} /> Se déconnecter
      </div>
    </Header>
  );
};

export default HeaderBar;
