import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import "./styles/pizzas.css";

const Originale = ({ allPizzas }) => {
  const filteredOriginalPizza =
    allPizzas || [].filter(({ base_name }) => base_name === "originale");
  return (
    <div className="originale" id="originale">
      <h1>Les Originales</h1>
      <div className="originale-container">
        {filteredOriginalPizza ||
          [].map(({ description, key, name, price }) => {
            return (
              <div key={key} className="pizza-container">
                <div className="pizza-container-1">
                  <h2>{name}</h2>
                  <p>{description}</p>
                </div>
                <div className="pizza-container-2">
                  <h4>{price.toFixed(2)} €</h4>
                </div>
              </div>
            );
          })}
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Originale;
