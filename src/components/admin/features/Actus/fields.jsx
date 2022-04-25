import React from "react";
import { Input, InputNumber } from "antd";

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
        message: "Merci de renseigner le nom d'une actualité.",
      },
    ],
  },

  {
    name: "description",
    label: "Description",
    rules: [
      {
        required: true,
        message: "Merci de saisir une description.",
      },
    ],
    input: <TextArea rows={3} />,
  },
  {
    label: "Ordre",
    name: "priority",
    rules: [
      {
        required: true,
        message:
          "Merci de renseigner un chiffre (1 étant le plus prioritaire).",
      },
    ],
    input: <InputNumber min={0} max={50} style={{ width: "100%" }} />,
  },
];
