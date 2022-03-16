import React, { useState } from "react";
import { login } from "../../../services/Authentification";
import "../styles//Register.css";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const Login = () => {
  const { setAuth } = useAuth();
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
            className={`input animation a4 ${
              errorMessage.input === "email" ? "error" : ""
            } `}
            onChange={(event) => handleChange(event)}
          />

          <div className="pass-wrapper animation a5">
            <input
              className={`input ${
                errorMessage.input === "password" ? "error " : "animation a5"
              }`}
              type={passwordShown ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Mot de passe"
              onChange={(event) => handleChange(event)}
            />
            {passwordShown ? (
              <div
                onClick={() => setPasswordShown(!passwordShown)}
                style={{ height: "100%" }}
              >
                <EyeOutlined
                  className="eye"
                  style={{ color: "#fff", fontSize: "15px" }}
                />
              </div>
            ) : (
              <div onClick={() => setPasswordShown(!passwordShown)}>
                <EyeInvisibleOutlined
                  className="eye"
                  style={{ color: "#fff", fontSize: "15px" }}
                />
              </div>
            )}
          </div>

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
