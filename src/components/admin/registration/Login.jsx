import React, { useState } from "react";
import { loginIn } from "../../../services/Authentification";
import eye from "../../images/yeux.png";
import invisible from "../../images/invisible.png";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const [errorMessage, setErrorMessage] = useState({
    hasError: false,
    input: null,
    message: null,
  });

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
    loginIn(formValues).then((res) => {
      console.log("res", res);
      if (res.status === 200) {
        console.log("tout est ok redirection vers blbalblabla");
        navigate("/admin/dashboard");
      } else {
        setErrorMessage({
          hasError: true,
          input: res.data.input,
          message: res.data.message,
        });
      }
    });
    console.log("logged in");
    event.preventDefault();
  };

  return (
    <div className="login">
      <div className="login-left">
        <div className="header">
          <h2 className="animation a1">Bienvenue chez Pizza Kika</h2>
          <h4 className="animation a2">Identifiez-vous</h4>
        </div>

        <form className="form">
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
              onClick={() => setPasswordShown(!passwordShown)}
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

export default Login;
