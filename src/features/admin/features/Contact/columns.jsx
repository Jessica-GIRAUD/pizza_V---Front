import { Tooltip } from "antd";
import { FormOutlined } from "@ant-design/icons";
import React from "react";

const columns = (setOpenModal, openModal, setPurpose) => {
  return [
    {
      title: "Logo",
      dataIndex: "logo",
      key: "logo",
      render: (image) => (
        <img
          src={image}
          alt="logo"
          style={{ width: "120px" }}
          className="modal-img"
        />
      ),
    },
    {
      title: "Adresse",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Code Postal",
      dataIndex: "post_code",
      key: "post_code",
    },
    {
      title: "Ville",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Téléphone",
      dataIndex: "phone",
      key: "phone",
    },

    {
      title: "Horaires",
      dataIndex: "horaires",
      key: "horaires",
      render: (text, row) => {
        return row?.horaires?.map((horaire, index) => {
          return (
            <div
              key={horaire.jour + index}
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  color: "#000000d9",
                }}
              >
                {horaire.jour}
              </p>
              <p style={{ color: "#000000d9" }}>{horaire.horaire}</p>
            </div>
          );
        });
      },
    },
    {
      key: "action",
      // eslint-disable-next-line react/prop-types
      render: ({ key }) => (
        <div
          style={{
            float: "right",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            onClick={() => {
              setPurpose({ purpose: "edit", id: key });
              setOpenModal(true);
            }}
          >
            <Tooltip title="Modifier">
              <FormOutlined style={{ fontSize: 14 }} />
            </Tooltip>
          </div>
        </div>
      ),
    },
  ];
};

export default columns;
