import React, { useEffect, useState } from "react";
import "./styles/slogan.css";

const Slogan = () => {
  // state for scrolling navbar
  const [navbar, setNavbar] = useState();

  // navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div className={navbar ? "slogan disappeared" : "slogan"}>
      <h1>Prenez un moment pour </h1>
      <p> Commandez vite vos pizzas cuites au feu de bois</p>
      <a href="tel:+33609974787">06 09 97 47 87</a>
    </div>
  );
};

export default Slogan;
