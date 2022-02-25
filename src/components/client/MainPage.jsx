import React from "react";
import HeaderNavbar from "./HeaderNavbar";
import Pizzas from "./Pizzas";
import Slogan from "./Slogan";

const HomePage = () => {
  return (
    <div className="background">
      <HeaderNavbar />
      <Slogan />
      <Pizzas />
    </div>
  );
};

export default HomePage;
