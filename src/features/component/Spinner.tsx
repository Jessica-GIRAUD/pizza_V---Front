import React from "react";
import "./styles/spinner.css";

interface SpinnerPropsInterface {
  spinner?: string;
}

const Spinner =  ({ spinner }: SpinnerPropsInterface): JSX.Element => {
  return (
    <div className={`loader ${spinner ? "spinner" : ""}`}>
      <div className="inner one" />
      <div className="inner two" />
      <div className="inner three" />
    </div>
  );
};

export default Spinner;
