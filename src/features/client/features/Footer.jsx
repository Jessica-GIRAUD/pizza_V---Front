import React from "react";
import "../styles/footer.css";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to={{ pathname: "/", hash: "#accueil" }}>Accueil</Link>
          </li>

          <li className="list-inline-item">
            <Link
              to="/#pizzas"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              Nos Pizzas
            </Link>
          </li>
          <li className="list-inline-item">
            <Link
              to="/#contact"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              Contact
            </Link>
          </li>
        </ul>
        <p className="copyright">
          {" "}
          © 2022 -{" "}
          <a
            href="https://www.linkedin.com/in/jessica-giraud/"
            target="_blank"
            rel="noreferrer"
          >
            Jessica GIRAUD{" "}
          </a>
          with - All rights reserved.{" "}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
