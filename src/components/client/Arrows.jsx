import React from "react";
import { HashLink } from "react-router-hash-link";

const Arrows = () => {
  return (
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
  );
};

export default Arrows;
