import React from "react";
import Tel from "../images/appel-telephonique.png";
import "./styles/contact.css";
import useAuth from "../admin/hooks/useAuth";

const Contact = () => {
  const { contact, format } = useAuth();

  return (
    <div className="container-contact" id="contact">
      <h1>Contact</h1>
      <div className="horaire-adresse">
        <div className="horaire">
          <h4>Horaires d'ouverture</h4>
          <p>
            {contact?.open?.split("\\n")?.map((item, idx) => {
              return (
                <React.Fragment key={idx}>
                  {item}
                  <br />
                </React.Fragment>
              );
            })}
            <br />
            {contact?.close}
          </p>
        </div>

        <div className="adresse">
          <h4>Adresse</h4>
          <a
            href={`http://maps.google.com/?daddr=${contact?.address
              ?.split(" ")
              ?.join("+")}+${contact?.post_code}+${contact?.city}+FRANCE`}
            target="_blank"
            rel="noreferrer"
          >
            <p>
              {contact?.address ? contact?.address : ""} <br />
              {`${contact?.post_code ? contact?.post_code : ""} ${
                contact?.city ? contact?.city : ""
              }`}
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
          <a href={`tel:+33${contact?.phone}`}>
            <p>{format(contact?.phone)}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
