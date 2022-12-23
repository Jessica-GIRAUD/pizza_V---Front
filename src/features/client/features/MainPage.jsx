import React from "react";
import HeaderNavbar from "./HeaderNavbar";
import Pizzas from "./Pizzas";
import Accueil from "./Accueil";

import ScrollArrow from "../../component/ScrollArrow.tsx";
import Contact from "./Contact";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      <HeaderNavbar />
      <Accueil />
      <Pizzas />
      <Contact />
      <Footer />
      <ScrollArrow />
    </div>
  );
};

export default HomePage;
