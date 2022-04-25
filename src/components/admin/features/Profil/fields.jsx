import { Input } from "antd";

export const useFields = () => {
  const fields = [
    {
      name: "id",
      hidden: true,
    },
    {
      label: "Nom",
      name: "lastname",
      rules: [
        {
          required: true,
          message: "Merci de renseigner votre nom.",
        },
      ],
    },
    {
      label: "Prénom",
      name: "firstname",
      rules: [
        {
          required: true,
          message: "Merci de renseigner votre prénom.",
        },
      ],
    },
    {
      label: "Adresse e-mail",
      name: "email",
      rules: [
        {
          required: true,
          message: "Merci de saisir des ingrédients.",
        },
      ],
    },

    {
      label: "Mot de passe actuel",
      name: "password",
      input: <Input.Password placeholder="***********" />,
    },

    {
      label: "Nouveau mot de passe",
      name: "newPassword",
      dependencies: ["password"],
      input: <Input.Password />,
      rules: [
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue("password")) {
              return Promise.resolve();
            }
            return Promise.reject(
              new Error("Le mot de passe actuel doit être renseigné.")
            );
          },
        }),
      ],
    },
    {
      label: "Confirmation mot de passe",
      name: "confirmedPassword",
      dependencies: ["newPassword"],
      input: <Input.Password />,
      rules: [
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue("newPassword") === value) {
              return Promise.resolve();
            }
            return Promise.reject(
              new Error("Les nouveaux mots de passe doivent être identiques.")
            );
          },
        }),
      ],
    },
  ];

  return { fields };
};
