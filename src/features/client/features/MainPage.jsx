import React from "react";
import HeaderNavbar from "./HeaderNavbar";
import Pizzas from "./Pizzas";
import Accueil from "./Accueil";
import Originale from "./Originale";
import Tomato from "./Tomate";
import ScrollArrow from "../../component/ScrollArrow";

const HomePage = () => {
  return (
    <div>
      <HeaderNavbar />
      <Accueil />
      <Pizzas />
      <Tomato />
      <Originale />

      <ScrollArrow />
    </div>
  );
};

export default HomePage;
