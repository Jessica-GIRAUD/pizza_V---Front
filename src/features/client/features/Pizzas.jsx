import React from "react";
import Creme from "./Creme";

import "../styles/pizzas.css";
import Tomato from "./Tomate";
import Originale from "./Originale";

const Pizzas = () => {
  return (
    <div className="pizzas-page" id="pizzas">
      <h1>Découvrez nos Pizzas</h1>
      <p>
        Nos pizzas sont réalisées avec une pate 100% fait maison. <br /> Tous
        nos produits sont issus de producteurs français et pour la plupart,
        locaux.
      </p>
      <Creme />
      <Tomato />
      <Originale />
    </div>
  );
};

export default Pizzas;
