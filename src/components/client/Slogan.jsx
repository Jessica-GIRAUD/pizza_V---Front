import React from "react";
import { HashLink } from "react-router-hash-link";
import "./styles/slogan.css";

const Slogan = ({ disappear }) => {
  return (
    <div id="accueil">
      <div className={disappear ? "slogan disappeared" : "slogan"}>
        <h1>Prenez un moment pour </h1>
        <h4>Commandez vite vos pizzas cuites au feu de bois</h4>
        <a href="tel:+33609974787">06 09 97 47 87</a>
      </div>

      <div className="container-arrows">
        <HashLink
          className="arrows"
          to="/#creme"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        >
          <p className="type cream-arrow">Nos Pizzas Crèmes</p>

          <svg>
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
            <path className="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
        </HashLink>
        <HashLink
          className="arrows2"
          to="/#tomate"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        >
          <p className="type tomato-arrow">Nos Pizzas Tomates</p>
          <svg>
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
            <path className="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
        </HashLink>
        <HashLink
          className="arrows3"
          to="/#originale"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        >
          <p className="type original-arrow">Nos Pizzas Originales</p>
          <svg>
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
            <path className="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
        </HashLink>
      </div>
    </div>
  );
};

export default Slogan;
