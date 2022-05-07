import React from "react";
import "../styles/pizzas.css";

const Creme = ({ allPizzas }) => {
  const filteredCreamyPizza = allPizzas?.filter(
    ({ base_name }) => base_name === "crème"
  );

  return (
    <div className="creme" id="creme">
      <h1>Base crème</h1>

      <div className="cream-container">
        {filteredCreamyPizza?.map((pizza, key) => {
          const { description, name, price } = pizza;
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
    </div>
  );
};

export default Creme;
