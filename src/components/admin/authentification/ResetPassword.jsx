import React, { useState } from "react";
import "../styles//Register.css";
import { useNavigate } from "react-router-dom";
import { register } from "../../../services/Authentification";
import { message } from "antd";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState(null);

  const [errorMessage, setErrorMessage] = useState({
    hasError: false,
    message: null,
    input: null,
  });

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setErrorMessage({
      hasError: false,
      message: null,
      input: null,
    });

    setEmail(value);
  };

  const handleSubmit = (event) => {
    register(email).then((res) => {
      if (res.status === 200) {
        navigate("/admin");
        message.success(
          "Votre demande de réinitialisation a bien été demandée. Veuillez consulter vos e-mails."
        );
      }
      if (res.status === 500) {
        navigate("/error");
      } else {
        setErrorMessage({
          hasError: true,
          message: res.data.message,
          input: res.data.input,
        });
      }
    });
    event.preventDefault();
  };

  return (
    <div className="registration">
      <div className="registration-form animation a1">
        <div className="register-header">
          <h2 className="animation a1">Bienvenue chez Pizza Kika</h2>
          <h4 className="animation a2">Réinitialisez votre mot de passe</h4>
        </div>

        <form className="form">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            className={`input animation a3 ${
              errorMessage.hasError && errorMessage.input !== "password"
                ? "error"
                : ""
            }`}
            onChange={(event) => handleChange(event)}
          />

          {errorMessage.message ? (
            <span className="error-message">{errorMessage.message}</span>
          ) : null}

          <button
            onClick={(e) => handleSubmit(e)}
            className="animation a6"
            type="submit"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
