import React from "react";
import { Form, Input } from "antd";
import Logo from "./Logo";

export const useFields = () => {
  const basicFields = [
    {
      name: "id",
      hidden: true,
    },
    {
      label: "Logo",
      name: "logo",
      rules: [
        {
          required: true,
          message: "Merci de renseigner le nom d'un contact.",
        },
      ],
      input: <Logo />,
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
  ];

  const advancedFields = (
    <Form.List name="horaires">
      {(fields) => {
        return (
          <Form.Item label={<span className="formItem-horaire">Horaires</span>}>
            {fields.map((field, index) => (
              <div
                key={field.key}
                style={{
                  display: "flex",
                  width: "100%",
                }}
              >
                <Form.Item name={[index, "jour"]}>
                  <Input
                    disabled
                    style={{
                      color: "#000000d9",
                      width: "120px",
                      border: "1px solid #d9d9d9",
                      borderRight: "transparent",
                      cursor: "initial",
                    }}
                  />
                </Form.Item>
                <Form.Item
                  style={{ color: "#000000d9", width: "100%" }}
                  name={[index, "horaire"]}
                  rules={[
                    {
                      required: true,
                      message: "Merci de renseigner des horaires d'ouverture.",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
            ))}
          </Form.Item>
        );
      }}
    </Form.List>
  );

  return { basicFields, advancedFields };
};
