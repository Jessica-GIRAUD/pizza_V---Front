import React from "react";
import "./styles/spinner.css";

const Spinner = ({ spinner }) => {
  return (
    <div class={`loader ${spinner ? "spinner" : ""}`}>
      <div class="inner one" />
      <div class="inner two" />
      <div class="inner three" />
    </div>
  );
};

export default Spinner;
