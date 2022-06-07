import React, { useEffect, useRef } from "react";
import tomato from "../../images/tomato2.png";
import useAuth from "../../admin/hooks/useAuth";
import Spinner from "../../component/Spinner";
import "../styles/pizzas.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import strings from "../utils/title.json";
import Error from "./Error";

gsap.registerPlugin(ScrollTrigger);
const Tomato = () => {
  const { isLoading, resources } = useAuth();

  const titleRefTomato = useRef();
  const pizzaContainerRef = useRef([]);
  pizzaContainerRef.current = [];

  const addToRefs = (item) => {
    if (item) {
      pizzaContainerRef.current.push(item);
    }
  };

  // animation cards
  useEffect(() => {
    if (!isLoading && resources?.length > 0) {
      gsap.set(pizzaContainerRef.current, { y: 0, opacity: 0 });
      ScrollTrigger.batch(pizzaContainerRef.current, {
        interval: 0.1, // time window (in seconds) for batching to occur.
        batchMax: 3, // maximum batch size (targets). Can be function-based for dynamic values
        onEnter: (batch) =>
          gsap.to(batch, { autoAlpha: 1, stagger: 0.2, overwrite: true }),
        onLeave: (batch) => gsap.set(batch, { autoAlpha: 1, overwrite: true }),
        onEnterBack: (batch) =>
          gsap.to(batch, { autoAlpha: 1, stagger: 0.2, overwrite: true }),
        onLeaveBack: (batch) =>
          gsap.set(batch, { autoAlpha: 0, overwrite: true }), // you can also define most normal ScrollTrigger values like start, end, etc.
        start: "20px bottom",
        end: "top top",
      });
    }
  }, [isLoading, pizzaContainerRef, resources]);

  // animation title
  useEffect(() => {
    if (!isLoading && resources?.length > 0) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: titleRefTomato.current,
            start: "20px bottom",
            end: "top top",
            scrub: 1,
            // markers: true,
          },
        })
        .fromTo(
          titleRefTomato.current,
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

  const filteredTomatoPizza = resources?.filter(
    ({ base_name }) => base_name === "tomate"
  );

  return (
    <div className="tomato" id="tomate">
      <h1 ref={titleRefTomato}>
        {strings.tomatoTitle.split("").map((letter, index) => {
          return (
            <span key={index} className="letter">
              {letter}
            </span>
          );
        })}
      </h1>
      {resources?.length > 0 ? (
        <img src={tomato} alt="tomate" className="tomatoImg" />
      ) : null}
      {isLoading ? (
        <Spinner spinner={true} />
      ) : resources?.length > 0 ? (
        <div className="tomato-container">
          {filteredTomatoPizza?.map((pizza, key) => {
            const { description, name, price } = pizza;
            return (
              <div key={key} className="pizza-container" ref={addToRefs}>
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
      ) : (
        <Error />
      )}
    </div>
  );
};

export default Tomato;
