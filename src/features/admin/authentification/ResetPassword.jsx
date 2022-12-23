import React, { useState } from "react";
import "../styles//Register.css";
import { useNavigate, useParams } from "react-router-dom";
import { changePassword } from "../../../services/Auth";
import { message } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const ResetPassword = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  const [formValues, setFormValues] = useState({
    password: "",
    confirmedPassword: "",
    token: id,
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmedPasswordShown, setConfirmedPasswordShown] = useState(false);

  const [errorMessage, setErrorMessage] = useState({
    hasError: false,
    message: null,
    input: null,
  });

  const handleChange = (event) => {
    const {
      target: { value, name },
    } = event;

    setErrorMessage({
      hasError: false,
      message: null,
      input: null,
    });

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    changePassword(formValues).then((res) => {
      if (res.status === 200) {
        navigate("/admin");
        message.success(
          "Votre mot de passe a été réinitialisé avec succès. Veuillez vous identifier.",
          10
        );
      }
      if (res.status === 500) {
        navigate("/error");
      } else {
        setErrorMessage({
          hasError: true,
          message:
            res.data.message ||
            "Votre réinitialisation de mot de passe a échouée, contactez votre administrateur.",
          input: res.data.input,
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
    <div className="reset-password">
      <div className="reset-password-form">
        <div className="reset-password-header">
          <h2>Bienvenue chez Pizza Kika</h2>
          <h4>Réinitialisez votre mot de passe</h4>
        </div>

        <form className="form">
          <div className="pass-wrapper">
            <input
              className={`input ${
                errorMessage.hasError && errorMessage.input === "password"
                  ? "error"
                  : ""
              }`}
              type={passwordShown ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Nouveau mot de passe"
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

          <div className="pass-wrapper">
            <input
              className={`input ${
                errorMessage.hasError && errorMessage.input === "password"
                  ? "error"
                  : ""
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
          {errorMessage.input === "expired" && (
            <a
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "10px",
              }}
              className="forgetPassword"
              href="/admin/resetpassword"
            >
              Besoin d'une 2e chance ?
            </a>
          )}

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

export default ResetPassword;
