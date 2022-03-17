import React from "react";
import useAuth from "../hooks/useAuth";

const DashboardPizzas = () => {
  const { auth } = useAuth();

  return (
    <div>
      <h1 style={{ color: "black" }}>Bienvenue sur le dashboard Pizza Kika</h1>
      <h1
        style={{ color: "black" }}
      >{`Utilisateur : ${auth.user.firstname} ${auth.user.lastname} `}</h1>
      <h1 style={{ color: "black" }}>{`Adresse email : ${auth.user.email}`}</h1>
    </div>
  );
};

export default DashboardPizzas;
