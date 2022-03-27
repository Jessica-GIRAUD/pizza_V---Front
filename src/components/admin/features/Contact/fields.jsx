import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

export const basicFields = [
  {
    name: "id",
    hidden: true,
  },
  {
    label: "Nom",
    name: "name",
    rules: [
      {
        required: true,
        message: "Merci de renseigner le nom d'un contact.",
      },
    ],
  },
  {
    label: "Adresse",
    name: "address",
    rules: [
      {
        required: true,
        message: "Merci de renseigner une adresse.",
      },
    ],
  },
  {
    name: "post_code",
    label: "Code Postal",
    rules: [
      {
        required: true,
        message: "Merci de renseigner un code postal.",
      },
    ],
  },
  {
    label: "Ville",
    name: "city",
    rules: [
      {
        required: true,
        message: "Merci de renseigner une ville.",
      },
    ],
  },
  {
    label: "Téléphone",
    name: "phone",
    rules: [
      {
        required: true,
        message: "Merci de renseigner un téléphone.",
      },
    ],
  },
  {
    label: "Jours et horaires d'ouverture",
    name: "open",
    rules: [
      {
        required: true,
        message: "Merci de renseigner les horaires d'ouverture.",
      },
    ],
    input: <TextArea rows={3} />,
  },
  {
    label: "Jour(s) de fermeture",
    name: "close",
    rules: [
      {
        required: true,
        message: "Merci de renseigner les jours de fermetures.",
      },
    ],
    input: <TextArea rows={3} />,
  },
];
