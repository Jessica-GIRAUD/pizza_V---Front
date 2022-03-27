import React, { useEffect, useState } from "react";
import { Table } from "antd";
import "../../styles/Dashboard.css";
import CustomModal from "../Components/Modal";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import columns from "./columns";
import { basicFields } from "./fields";
import { getAll } from "../../../../services/Routes";

const DashboardContact = () => {
  const [dataTable, setDataTable] = useState();

  const axiosPrivate = useAxiosPrivate();
  const [openModal, setOpenModal] = useState(false);
  const [purpose, setPurpose] = useState({ purpose: "", id: null });

  const fetchContact = () => {
    getAll(axiosPrivate, "contact").then((res) => {
      setDataTable(res.data.map(({ id, ...d }) => ({ ...d, key: id })));
    });
  };

  useEffect(() => {
    fetchContact();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          setResources={setDataTable}
          topic="contact"
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
