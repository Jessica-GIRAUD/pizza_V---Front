import React from "react";

const TemplateEmail = () => {
  return (
    <html lang="fr">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Bienvenue sur le site de la Pizzeria Chez Kika"
        />
        <title>Pizza Kika</title>
      </head>
      <body>
        <div>
          <div
            style={{
              backgroundColor: "#f6f6f6",
              width: "100%",
              height: "100vh",
              paddingTop: "30px",
            }}
          >
            <div
              style={{
                backgroundColor: "#ffffff",
                width: "90%",
                margin: "auto",
                padding: "30px",
              }}
            >
              <p
                style={{
                  color: "black",
                }}
              >
                Bonjour,
              </p>
              <p>
                Vous avez oublié votre mot de passe pour accéder à votre espace
                administrateur Pizza Kika.
              </p>
              <p>
                Pour définir un nouveau mot de passe, il vous suffit de cliquer
                sur le lien ci-dessous :
              </p>

              <a
                href="https://pizza-kika.netlify.app/admin/resetpassword/${token}"
                style={{
                  display: "flex",
                  width: "fit-content",
                  margin: "30px auto",
                  fontSize: "inherit",
                  padding: "15px",
                  marginBottom: "20px",
                  borderRadius: "5px",
                  backgroundColor: "rgba(0, 0, 0, 0.486)",
                  fontWeight: "bold",
                }}
              >
                Je choisis un nouveau mot de passe
              </a>

              <p>
                Ce lien expirera dans 15 minutes, utilisez-le dès que possible.
                Passé ce délai, il faudra faire une nouvelle demande de mot de
                passe.
              </p>
              <p>À tout de suite ! </p>
              <p>Votre adminitratrice </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default TemplateEmail;
