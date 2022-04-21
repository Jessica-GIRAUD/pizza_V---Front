import React from "react";
import useAuth from "../admin/hooks/useAuth";
import Arrows from "./Arrows";
import "./styles/slogan.css";

const Accueil = ({ disappear }) => {
  const { contact, format, actus } = useAuth();

  const { phone } = contact;

  return (
    <div id="accueil" className="background">
      {actus.length && (
        <div className="position bandeau">
          <div className="actu">
            {actus?.map(({ description, name }, index) => (
              <div className="actu_titre" key={index}>
                <span style={{ color: "#ff6233", paddingRight: "20px" }}>
                  {name?.toUpperCase()}
                </span>
                {description}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className={disappear ? "slogan disappeared" : "slogan"}>
        <h1>Prenez un moment pour </h1>
        <h4>Commandez vite vos pizzas cuites au feu de bois</h4>
        <a href={`tel:+33${phone}`}>{format(phone)}</a>
      </div>

      <Arrows />
    </div>
  );
};

export default Accueil;