import React, { useEffect, useRef } from "react";
import "../styles/contact.css";
import useAuth from "../../admin/hooks/useAuth";
import Spinner from "../../component/Spinner";
import { FiPhoneCall } from "react-icons/fi";
import strings from "../utils/title.json";
import gsap from "gsap";
import Error from "./Error";

const Contact = () => {
  const { contact, format, isLoading, resources } = useAuth();
  const titleRefContact = useRef();

  // animation title
  useEffect(() => {
    if (!isLoading && resources.length > 0) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: titleRefContact.current,
            start: "20px bottom",
            end: "top 30%",
            scrub: 1,
            // markers: true,
          },
        })
        .fromTo(
          titleRefContact.current,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
          }
        )
        .to(".letter", { margin: "0 0.8vw 0 0.8vw", delay: 1, duration: 1.5 })
        .to(".letter", { margin: "0" });
    }
  }, [isLoading, resources]);

  return (
    <div className="container-contact" id="contact">
      <h1 ref={titleRefContact}>
        {strings.contactTitle.split("").map((letter, index) => {
          return (
            <span key={index} className="letter">
              {letter}
            </span>
          );
        })}
      </h1>

      {isLoading ? (
        <Spinner spinner={true} />
      ) : resources?.length > 0 ? (
        <div className="container-horaire-adresse">
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
                padding: "15px",
              }}
            >
              <FiPhoneCall color="#ffffffe1" fontSize={20} />
              <a href={`tel:+33${contact?.phone}`}>
                <p>{format(contact?.phone)}</p>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <Error errorType="contact" />
      )}
    </div>
  );
};

export default Contact;
