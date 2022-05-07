import React from "react";
import { InputNumber, Select, Input } from "antd";

const { Option } = Select;
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
        message: "Merci de renseigner le nom d'une pizza.",
      },
    ],
  },
  {
    label: "Base",
    name: "base_name",
    rules: [
      {
        required: true,
        message: "Merci de sélectionner une base.",
      },
    ],
    input: (
      <Select
        showSearch
        allowClear
        placeholder="Saisissez une base..."
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        filterSort={(optionA, optionB) =>
          optionA.children
            .toLowerCase()
            .localeCompare(optionB.children.toLowerCase())
        }
      >
        <Option value="crème">Crème</Option>
        <Option value="originale">Originale</Option>
        <Option value="tomate">Tomate</Option>
      </Select>
    ),
  },
  {
    name: "description",
    label: "Ingrédients",
    rules: [
      {
        required: true,
        message: "Merci de saisir des ingrédients.",
      },
    ],
    input: <TextArea rows={3} />,
  },
  {
    label: "Prix",
    name: "price",
    rules: [
      {
        required: true,
        message: "Merci de renseigner un tarif.",
      },
    ],
    input: (
      <InputNumber
        addonAfter="€"
        min={0}
        max={50}
        step={0.5}
        style={{ width: "100%" }}
      />
    ),
  },
];
