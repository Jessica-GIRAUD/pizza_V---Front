import React, { useEffect, useState } from "react";
import HeaderNavbar from "./HeaderNavbar";
import Pizzas from "./Pizzas";
import Slogan from "./Slogan";
import Originale from "./Originale";
import Tomato from "./Tomate";
import ScrollArrow from "./ScrollArrow";
import useAuth from "../admin/hooks/useAuth";

const HomePage = () => {
  const { resources } = useAuth();
  // state for scrolling navbar
  const [disappear, setDisappear] = useState();

  // navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setDisappear(true);
    } else {
      setDisappear(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div>
      <HeaderNavbar />

      <Slogan disappear={disappear} />
      <Pizzas allPizzas={resources} />
      <Tomato allPizzas={resources} />
      <Originale allPizzas={resources} />

      <ScrollArrow />
    </div>
  );
};

export default HomePage;
