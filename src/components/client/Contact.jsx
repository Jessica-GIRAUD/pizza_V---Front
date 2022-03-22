import React from "react";
import phone from "../images/appel-telephonique.png";
import "./styles/contact.css";

const Contact = () => {
  return (
    <div className="container-contact">
      <h1>Contact</h1>
      <div className="horaire-adresse">
        <div className="horaire">
          <h4>Horaires d'ouverture</h4>
          <p>
            Du mardi au samedi de 11h30 à 13h30 et de 17h30 à 21h30 <br />
            Le dimanche de 17h30 à 21h30 <br /> <br />
            Fermé le lundi
          </p>
        </div>

        <div className="adresse">
          <h4>Adresse</h4>
          <a
            href="https://ul.waze.com/ul?place=ChIJtRvCRN5SqRIRfmL-ZdigGl4&ll=43.66648280%2C1.19464110&navigate=yes&utm_campaign=waze_website&utm_source=waze_website&utm_medium=lm_share_location"
            target="_blank"
            rel="noreferrer"
          >
            <p>
              52 Avenue de la République <br />
              31530 LEVIGNAC
            </p>
          </a>
        </div>
      </div>

      <div className="tel-container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={phone}
            alt="telephone"
            style={{
              width: "25px",
              height: "25px",

              alignItems: "center  ",
            }}
          />
          <a href="tel:+33534520388">
            <p>05 34 52 03 88</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;