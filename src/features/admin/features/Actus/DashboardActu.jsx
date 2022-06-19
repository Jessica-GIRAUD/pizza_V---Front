import React, { useState } from "react";
import { Table, Button, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "../../styles/Dashboard.css";
import CustomModal from "../../components/CustomModal";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import columns from "./columns";
import { basicFields } from "./fields";
import { deleteOne } from "../../../../services/Routes";
import useAuth from "../../hooks/useAuth";

const DashboardActu = () => {
  const { actus, fetchResources } = useAuth();

  const axiosPrivate = useAxiosPrivate();
  const [openModal, setOpenModal] = useState(false);
  const [purpose, setPurpose] = useState({ purpose: "", id: null });

  const onDeleteActu = (key) => {
    deleteOne(key, axiosPrivate, "actus").then((res) => {
      if (res.status === 200) {
        fetchResources("actus");
        message.success("Suppression réalisée avec succès.");
      } else {
        message.error("Un problème est survenu lors de la suppression.");
      }
    });
  };

  return (
    <div>
      <h1 className="title">Les Actualités</h1>

      <div className="box-actu">
        <Button
          type="primary"
          onClick={() => {
            setOpenModal(!openModal);
            setPurpose({ purpose: "create", id: null });
          }}
          style={{ marginBottom: "20px" }}
        >
          <PlusOutlined />
          Nouvelle actualité
        </Button>

        {openModal && (
          <CustomModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            purpose={purpose}
            title={
              purpose.purpose === "edit"
                ? "Modifier une actualité"
                : "Créer une nouvelle actualité"
            }
            fields={basicFields}
            topic="actus"
          />
        )}
      </div>

      <Table
        dataSource={actus}
        columns={[
          ...columns(setOpenModal, openModal, setPurpose, onDeleteActu),
        ]}
      />
    </div>
  );
};

export default DashboardActu;
