import React from "react";
import HeaderNavbar from "./HeaderNavbar";

const HomePage = () => {
  return (
    <div>
      <HeaderNavbar />
      <div className="slogan">
        <h1>Prenez un moment pour </h1>
        <p> Commandez vite vos pizzas cuites au feu de bois</p>
        <a href="tel:+33609974787">06 09 97 47 87</a>
      </div>
    </div>
  );
};

export default HomePage;
