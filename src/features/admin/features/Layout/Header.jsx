import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../services/Auth";
import useAuth from "../../hooks/useAuth";
import { LogoutOutlined } from "@ant-design/icons";
import { Layout } from "antd";

const { Header } = Layout;

const HeaderBar = () => {
  const { setAuth, auth, profil } = useAuth();

  const navigate = useNavigate();

  const onLogOutClick = () => {
    setAuth({});
    localStorage.clear();
    logout().then(() => navigate("/"));
  };
  return (
    <Header className="site-layout-background header">
      <span>{`Bienvenue, ${profil.firstname || auth.user.firstname} ${
        profil.lastname || auth.user.lastname
      }`}</span>
      <div onClick={() => onLogOutClick()} className="disconnect">
        <LogoutOutlined style={{ marginRight: "10px" }} />
        <span className="disconnect-txt">Se déconnecter</span>
      </div>
    </Header>
  );
};

export default HeaderBar;
