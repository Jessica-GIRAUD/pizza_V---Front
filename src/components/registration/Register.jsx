import React, { useState } from "react";
import "./Register.css";
import { createAccount } from "../../services/authentification";
import eye from "../images/yeux.png";
import invisible from "../images/invisible.png";

const Register = () => {
  const [formValues, setFormValues] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    hasError: false,
    input: null,
    message: null,
  });

  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmedPasswordShown, setConfirmedPasswordShown] = useState(false);

  const handleChange = (event) => {
    const {
      target: { value, name },
    } = event;

    setErrorMessage({
      hasError: false,
      input: null,
      message: null,
    });

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    createAccount(formValues).then((res) => {
      if (res.status === 200) {
        console.log("tout est ok redirection vers blbalblabla");
      } else {
        setErrorMessage({
          hasError: true,
          input: res.data.input,
          message: res.data.message,
        });
      }
    });
    event.preventDefault();
  };

  const toggleShowPassword = (origin) => {
    if (origin === "password") {
      setPasswordShown(!passwordShown);
    } else {
      setConfirmedPasswordShown(!confirmedPasswordShown);
    }
  };

  return (
    <div className="registration">
      <div className="left">
        <div className="header">
          <h2 className="animation a1">Bienvenue chez Pizza Vera</h2>
          <h4 className="animation a2">Créez-vous un compte</h4>
        </div>

        <form className="form">
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Nom"
            className="animation a3"
            onChange={(event) => handleChange(event)}
          />
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Prénom"
            className="animation a3"
            onChange={(event) => handleChange(event)}
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            className={`animation a4 ${
              errorMessage.input === "email" ? "error" : ""
            }`}
            onChange={(event) => handleChange(event)}
          />

          <div className="pass-wrapper animation a5">
            <input
              className={`${errorMessage.input === "password" ? "error" : ""}`}
              type={passwordShown ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Mot de passe"
              onChange={(event) => handleChange(event)}
            />
            <img
              src={passwordShown ? invisible : eye}
              alt={passwordShown ? "invisible" : "eye"}
              onClick={() => toggleShowPassword("password")}
            />
          </div>

          <div className="pass-wrapper animation a5">
            <input
              className={`${errorMessage.input === "password" ? "error" : ""}`}
              type={confirmedPasswordShown ? "text" : "password"}
              id="confirmedPassword"
              name="confirmedPassword"
              placeholder="Confirmation du mot de passe"
              onChange={(event) => handleChange(event)}
            />
            <img
              src={confirmedPasswordShown ? invisible : eye}
              alt={confirmedPasswordShown ? "invisible" : "eye"}
              onClick={() => toggleShowPassword("confirmedPassword")}
            />
          </div>

          {errorMessage.message ? (
            <span className="error-message">{errorMessage.message}</span>
          ) : null}

          <button
            onClick={(e) => handleSubmit(e)}
            className="animation a6"
            type="submit"
          >
            S'inscrire
          </button>
        </form>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Register;
