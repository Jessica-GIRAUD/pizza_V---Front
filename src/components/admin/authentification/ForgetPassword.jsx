import React, { useState } from "react";
import "../styles//Register.css";
import { useNavigate } from "react-router-dom";
import { reset } from "../../../services/Authentification";
import { message } from "antd";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
  });
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

    setFormValues({ email: value });
  };

  const handleSubmit = (event) => {
    reset(formValues).then((res) => {
      if (res.status === 200) {
        navigate("/admin");
        message.success(
          "Votre demande de réinitialisation a bien été effectuée. Veuillez consulter vos e-mails."
        );
      }
      if (res.status === 500) {
        navigate("/error");
      } else {
        setErrorMessage({
          hasError: true,
          message:
            res.data.message ||
            "Votre demande de réinitialisation a échouée, contactez votre administrateur.",
          input: res.data.input,
        });
      }
    });
    event.preventDefault();
  };

  return (
    <div className="registration">
      <div className="registration-form">
        <div className="register-header">
          <h2>Bienvenue chez Pizza Kika</h2>
          <h4>Vous avez oublié votre mot de passe ?</h4>
        </div>

        <form className="form">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            className={`input  ${
              errorMessage.hasError && errorMessage.input !== "password"
                ? "error"
                : ""
            }`}
            onChange={(event) => handleChange(event)}
          />

          {errorMessage.message ? (
            <span className="error-message">{errorMessage.message}</span>
          ) : null}

          <button onClick={(e) => handleSubmit(e)} type="submit">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
