import React from "react";
import HeaderNavbar from "./HeaderNavbar";
import Pizzas from "./Pizzas";
import Accueil from "./Accueil";
import Originale from "./Originale";
import Tomato from "./Tomate";
import ScrollArrow from "./ScrollArrow";
import useAuth from "../../admin/hooks/useAuth";

const HomePage = () => {
  const { resources } = useAuth();

  return (
    <div>
      <HeaderNavbar />
      <Accueil />
      <Pizzas allPizzas={resources} />
      <Tomato allPizzas={resources} />
      <Originale allPizzas={resources} />

      <ScrollArrow />
    </div>
  );
};

export default HomePage;
