import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Table, Button, AutoComplete, message } from "antd";
import columns from "./columns";
import "../../styles/Dashboard.css";
import { PlusOutlined } from "@ant-design/icons";
import CustomModal from "../Components/Modal";
import { deleteOne } from "../../../../services/Routes";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { basicFields } from "./fields";

const DashboardPizzas = () => {
  const { resources, setResources } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const [openModal, setOpenModal] = useState(false);
  const [purpose, setPurpose] = useState({ purpose: "", id: null });
  const [dataTable, setDataTable] = useState(resources);

  useEffect(() => {
    setDataTable(resources);
  }, [resources]);

  const onSearch = (value) => {
    if (value) {
      setDataTable(dataTable.filter((el) => el.name === value));
    }
  };

  const onClear = () => {
    setDataTable([...resources]);
  };

  const onDeletePizza = (key) => {
    deleteOne(key, axiosPrivate).then((res) => {
      if (res.status === 200) {
        setResources(
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

  const options = resources.map((r) => {
    return {
      value: r.name,
    };
  });

  return (
    <div>
      <h1 className="title">Les Pizzas</h1>
      <div className="box">
        <AutoComplete
          allowClear
          onClear={onClear}
          style={{ width: 300, marginBottom: "20px" }}
          options={options}
          placeholder="Recherchez votre pizza"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
          onSelect={onSearch}
        />
        <Button
          type="primary"
          onClick={() => {
            setOpenModal(!openModal);
            setPurpose({ purpose: "create", id: null });
          }}
        >
          <PlusOutlined />
          Nouvelle pizza
        </Button>

        {openModal && (
          <CustomModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            purpose={purpose}
            title={
              purpose.purpose === "edit"
                ? "Modifier une pizza"
                : "Créer une nouvelle pizza"
            }
            fields={basicFields}
            setResources={setResources}
            topic="pizzas"
          />
        )}
      </div>

      <Table
        dataSource={dataTable}
        columns={[
          ...columns(setOpenModal, openModal, setPurpose, onDeletePizza),
        ]}
      />
    </div>
  );
};

export default DashboardPizzas;
