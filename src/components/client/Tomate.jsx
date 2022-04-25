import React from "react";
import "./styles/pizzas.css";

const Tomato = ({ allPizzas }) => {
  const filteredTomatoPizza = allPizzas?.filter(
    ({ base_name }) => base_name === "tomate"
  );

  return (
    <div className="tomato" id="tomate">
      <h1>Base tomate</h1>

      <div className="tomato-container">
        {filteredTomatoPizza?.map((pizza, key) => {
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

export default Tomato;
