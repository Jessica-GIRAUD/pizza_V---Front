import React, { useEffect, useRef } from "react";
import "../styles/pizzas.css";
import useAuth from "../../admin/hooks/useAuth";
import Spinner from "../../component/Spinner";
import { IoPizzaOutline } from "react-icons/io5";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Originale = () => {
  const { isLoading, resources } = useAuth();

  const titleRefOriginal = useRef();
  const pizzaContainerRef = useRef([]);
  pizzaContainerRef.current = [];

  const addToRefs = (item) => {
    if (item && !isLoading) {
      pizzaContainerRef.current.push(item);
    }
  };

  // animation cards
  useEffect(() => {
    if (!isLoading) {
      gsap.set(pizzaContainerRef.current, { y: 0 });
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
  }, [isLoading, pizzaContainerRef]);

  // animation title
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: titleRefOriginal.current,
          start: "20px bottom",
          end: "top top",
          scrub: 1,
          // markers: true,
        },
      })
      .fromTo(
        titleRefOriginal.current,
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
  }, []);

  const filteredOriginalPizza = resources?.filter(
    ({ base_name }) => base_name === "originale"
  );
  return (
    <div className="originale" id="originale">
      <h1 ref={titleRefOriginal}>
        <span className="letter">O</span>
        <span className="letter">r</span>
        <span className="letter">i</span>
        <span className="letter">g</span>
        <span className="letter">i</span>
        <span className="letter">n</span>
        <span className="letter">a</span>
        <span className="letter">l</span>
        <span className="letter">e</span>
        <span className="letter">s</span>
      </h1>
      {isLoading ? (
        <Spinner spinner={true} />
      ) : (
        <div className="originale-container">
          {filteredOriginalPizza?.map((pizza, key) => {
            const { description, name, price } = pizza;
            return (
              <div key={key} className="pizza-container" ref={addToRefs}>
                <div className="pizza-container-1">
                  <h2>
                    <IoPizzaOutline
                      style={{
                        transform: "rotate(-90deg)",
                        color: "#4f674b",
                        fontSize: "20px",
                      }}
                    />{" "}
                    {name}
                  </h2>
                  <p>{description}</p>
                </div>
                <div className="pizza-container-2">
                  <h4>{price.toFixed(2)} €</h4>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Originale;
