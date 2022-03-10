import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../services/AuthContext";
import { logout } from "../../../services/Authentification";

const Dashboard = () => {
  const { authState, setAuthState } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogOutClick = () => {
    setAuthState(false);
    logout().then(() => navigate("/admin"));
  };

  return (
    <div>
      <h1 style={{ color: "black" }}> Bienvenue sur le dashboard Pizza Kika</h1>
      <h1
        style={{ color: "black" }}
      >{`Utilisateur : ${authState.user.firstname} ${authState.user.lastname} `}</h1>
      <h1
        style={{ color: "black" }}
      >{`Adresse email : ${authState.user.email}`}</h1>
      <button onClick={() => onLogOutClick()}>LOGOUT</button>{" "}
    </div>
  );
};

export default Dashboard;
