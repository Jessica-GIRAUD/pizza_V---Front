import React from "react";
import "../styles/ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="loading">
      <h1 className="title500">500</h1>
      <h2 className="titleError">
        Oups ! Le serveur a commis une erreur <b>:(</b>
      </h2>
      <div className="gears">
        <div className="gear one">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="gear two">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="gear three">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
