import React from "react";
import Tel from "../images/appel-telephonique.png";
import "./styles/contact.css";
import useAuth from "../admin/hooks/useAuth";

const Contact = () => {
  const { contact, format } = useAuth();

  const { address, post_code, city, phone, open, close } = contact;

  return (
    <div className="container-contact" id="contact">
      <h1>Contact</h1>
      <div className="horaire-adresse">
        <div className="horaire">
          <h4>Horaires d'ouverture</h4>
          <p>
            {open?.split("\\n") ||
              [].map((item, idx) => {
                return (
                  <React.Fragment key={idx}>
                    {item}
                    <br />
                  </React.Fragment>
                );
              })}
            <br />
            {close}
          </p>
        </div>

        <div className="adresse">
          <h4>Adresse</h4>
          <a
            href={`http://maps.google.com/?daddr=${address
              ?.split(" ")
              ?.join("+")}+${post_code}+${city}+FRANCE`}
            target="_blank"
            rel="noreferrer"
          >
            <p>
              {address ? address : ""} <br />
              {`${post_code ? post_code : ""} ${city ? city : ""}`}
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
            src={Tel}
            alt="telephone"
            style={{
              width: "25px",
              height: "25px",

              alignItems: "center  ",
            }}
          />
          <a href={`tel:+33${phone}`}>
            <p>{format(phone)}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
