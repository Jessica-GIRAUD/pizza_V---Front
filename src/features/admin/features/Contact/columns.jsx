import { Tooltip } from "antd";
import { FormOutlined } from "@ant-design/icons";
import React from "react";

const columns = (setOpenModal, openModal, setPurpose) => {
  return [
    {
      title: "Nom",
      dataIndex: "name",
      key: "name",
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
      title: "Ouverture / Fermeture",
      dataIndex: ["close", "open"],
      key: "close",
      render: (text, row) => (
        <>
          <div>
            {row["open"]?.split("\\n").map((item, idx) => {
              return (
                <React.Fragment key={idx}>
                  {item}
                  <br />
                </React.Fragment>
              );
            })}
          </div>
          <br />
          <div> {row["close"]}</div>
        </>
      ),
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
              setOpenModal(!openModal);
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
