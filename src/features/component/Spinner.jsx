import React from "react";
import "./styles/spinner.css";

const Spinner = ({ spinner }) => {
  return (
    <div className={`loader ${spinner ? "spinner" : ""}`}>
      <div className="inner one" />
      <div className="inner two" />
      <div className="inner three" />
    </div>
  );
};

export default Spinner;
