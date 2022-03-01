import React from "react";
import Arrows from "./Arrows";
import "./styles/slogan.css";

const Slogan = ({ disappear }) => {
  return (
    <div id="accueil">
      <div className={disappear ? "slogan disappeared" : "slogan"}>
        <h1>Prenez un moment pour </h1>
        <h4>Commandez vite vos pizzas cuites au feu de bois</h4>
        <a href="tel:+33609974787">06 09 97 47 87</a>
      </div>

      <Arrows />
    </div>
  );
};

export default Slogan;
