import React, { useEffect, useState } from "react";
import HeaderNavbar from "./HeaderNavbar";
import Pizzas from "./Pizzas";
import Slogan from "./Slogan";
import Originale from "./Originale";
import Tomato from "./Tomate";
import { getAllPizzas } from "../../services/Pizzas";
import ScrollArrow from "./ScrollArrow";
import Footer from "./Footer";
const HomePage = () => {
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

  const [allPizzas, setAllPizzas] = useState();

  const fetchPizza = () => {
    getAllPizzas().then((res) => {
      setAllPizzas(res.data);
    });
  };

  useEffect(() => {
    fetchPizza();
  }, []);

  return (
    <div className="background">
      <HeaderNavbar />

      <Slogan disappear={disappear} />
      <Pizzas allPizzas={allPizzas} />
      <Tomato allPizzas={allPizzas} />
      <Originale allPizzas={allPizzas} />

      <ScrollArrow />
    </div>
  );
};

export default HomePage;
