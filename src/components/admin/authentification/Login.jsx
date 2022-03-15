import React, { useState } from "react";
import { login } from "../../../services/Authentification";
import eye from "../../images/yeux.png";
import invisible from "../../images/invisible.png";
import "../styles//Register.css";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const Login = () => {
  const { setAuth, auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/admin/dashboard";

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

  useEffect(() => {
    if (auth) return navigate("/admin/dashboard");
  }, []);

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
    login(formValues).then((res) => {
      if (res.status === 200) {
        setAuth(res?.data);
        navigate(from, { replace: true });
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

  return (
    <div className="login">
      <div className="login-form animation a1">
        <div className="login-header">
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
          <input
            className={`${
              errorMessage.input === "password" ? "error" : "animation a5"
            }`}
            type={passwordShown ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Mot de passe"
            onChange={(event) => handleChange(event)}
          />
          <img
            className="eye"
            src={passwordShown ? eye : invisible}
            alt={passwordShown ? "eye" : "invisible"}
            onClick={() => setPasswordShown(!passwordShown)}
          />

          {errorMessage.message ? (
            <span className="error-message">{errorMessage.message}</span>
          ) : null}

          <button
            onClick={(e) => handleSubmit(e)}
            className="animation a6"
            type="submit"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
