import React, { useEffect, useState } from "react";
import { Table, Button, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "../../styles/Dashboard.css";
import CustomModal from "../Components/Modal";
import { deleteActu, getAllActus } from "../../../../services/Actualites";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import columns from "./columns";
import { basicFields } from "./fields";

const DashboardActu = () => {
  const [dataTable, setDataTable] = useState();

  const axiosPrivate = useAxiosPrivate();
  const [openModal, setOpenModal] = useState(false);
  const [purpose, setPurpose] = useState({ purpose: "", id: null });
  console.log("purpose", purpose);

  const fetchActus = () => {
    getAllActus(axiosPrivate).then((res) => {
      setDataTable(res.data.map(({ id, ...d }) => ({ ...d, key: id })));
    });
  };

  useEffect(() => {
    fetchActus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDeleteActu = (key) => {
    deleteActu(key, axiosPrivate, "actus").then((res) => {
      if (res.status === 200) {
        setDataTable(
          res.data
            .map(({ id, ...d }) => ({ ...d, key: id }))
            .sort((a, b) => a.name.localeCompare(b.name))
        );
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
            setResources={setDataTable}
            topic="actus"
          />
        )}
      </div>

      <Table
        dataSource={dataTable}
        columns={[
          ...columns(setOpenModal, openModal, setPurpose, onDeleteActu),
        ]}
      />
    </div>
  );
};

export default DashboardActu;
