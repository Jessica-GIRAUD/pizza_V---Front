import React, { useState } from "react";
import { Table } from "antd";
import "../../styles/Dashboard.css";
import columns from "./columns";
import { useFields } from "./fields";
import CustomModal from "../../components/CustomModal";
import useAuth from "../../hooks/useAuth";

const DashboardContact = () => {
  const { contact } = useAuth();
  const dataTable = [{ ...contact }].map(({ id, ...d }) => ({ ...d, key: id }));

  const { basicFields, advancedFields } = useFields();

  const [openModal, setOpenModal] = useState(false);
  const [purpose, setPurpose] = useState({ purpose: "", id: null });

  return (
    <div>
      <h1 className="title">Contact</h1>

      {openModal && (
        <CustomModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          purpose={purpose}
          title={
            purpose.purpose === "edit"
              ? "Modifier un contact"
              : "Créer une nouvelle actualité"
          }
          fields={basicFields}
          topic="contact"
          extraFields={advancedFields}
        />
      )}

      <Table
        dataSource={dataTable}
        columns={[...columns(setOpenModal, openModal, setPurpose)]}
        pagination={false}
      />
    </div>
  );
};

export default DashboardContact;
