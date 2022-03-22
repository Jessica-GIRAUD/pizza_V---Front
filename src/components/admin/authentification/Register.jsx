import React, { useState } from "react";
import "../styles//Register.css";
import { useNavigate } from "react-router-dom";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const Register = () => {
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();

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
    axiosPrivate.post(`/auth/register`, formValues).then((res) => {
      if (res.status === 201) {
        navigate("/admin/dashboard/pizzas");
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
      <div className="registration-form animation a1">
        <div className="register-header">
          <h2 className="animation a1">Bienvenue chez Pizza Kika</h2>
          <h4 className="animation a2">Créez-vous un compte</h4>
        </div>

        <form className="form">
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Nom"
            className="input animation a3"
            onChange={(event) => handleChange(event)}
          />
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Prénom"
            className="input animation a3"
            onChange={(event) => handleChange(event)}
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            className={`input animation a4 ${
              errorMessage.input === "email" ? "error" : ""
            }`}
            onChange={(event) => handleChange(event)}
          />

          <div className="pass-wrapper animation a5">
            <input
              className={`input ${
                errorMessage.input === "password" ? "error" : ""
              }`}
              type={passwordShown ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Mot de passe"
              onChange={(event) => handleChange(event)}
            />
            {passwordShown ? (
              <div
                onClick={() => toggleShowPassword("password")}
                style={{ height: "100%" }}
              >
                <EyeOutlined
                  className="eye"
                  style={{ color: "#fff", fontSize: "15px" }}
                />
              </div>
            ) : (
              <div onClick={() => toggleShowPassword("password")}>
                <EyeInvisibleOutlined
                  className="eye"
                  style={{ color: "#fff", fontSize: "15px" }}
                />
              </div>
            )}
          </div>

          <div className="pass-wrapper animation a5">
            <input
              className={`input ${
                errorMessage.input === "password" ? "error" : ""
              }`}
              type={confirmedPasswordShown ? "text" : "password"}
              id="confirmedPassword"
              name="confirmedPassword"
              placeholder="Confirmation du mot de passe"
              onChange={(event) => handleChange(event)}
            />
            {confirmedPasswordShown ? (
              <div
                onClick={() => toggleShowPassword("confirmedPassword")}
                style={{ height: "100%" }}
              >
                <EyeOutlined
                  className="eye"
                  style={{ color: "#fff", fontSize: "15px" }}
                />
              </div>
            ) : (
              <div onClick={() => toggleShowPassword("confirmedPassword")}>
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
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;