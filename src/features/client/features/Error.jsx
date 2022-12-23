import React from "react";
import { TbCloudOff } from "react-icons/tb";

const Error = ({ errorType }) => {
  return (
    <div className="error--no-data">
      <TbCloudOff fontSize={60} color="#ffffffe1" />{" "}
      {errorType !== "contact"
        ? "Aucune pizza trouvée"
        : "Aucun contact trouvé"}
    </div>
  );
};

export default Error;
