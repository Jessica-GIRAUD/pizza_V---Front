import { Divider, Popconfirm, Tooltip } from "antd";
import {
  FormOutlined,
  DeleteOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

const columns = (setOpenModal, openModal, setPurpose, onDeleteActu) => {
  return [
    {
      title: "Ordre",
      dataIndex: "priority",
      key: "priority",
      sorter: (a, b) => a.priority - b.priority,
      defaultSortOrder: "ascend",
    },
    {
      title: "Nom",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },

    {
      title: "Description",
      dataIndex: "description",
      key: "description",
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

          <Divider type="vertical" />
          <Popconfirm
            title="Êtes-vous sûr de vouloir supprimer cette actualité ?"
            okText="Supprimer"
            okButtonProps={{ type: "danger" }}
            onConfirm={() => onDeleteActu(key)}
            icon={<QuestionCircleOutlined />}
          >
            <Tooltip title="Supprimer">
              <DeleteOutlined
                style={{ color: "red", fontSize: 14 }}
                type="delete"
              />
            </Tooltip>
          </Popconfirm>
        </div>
      ),
    },
  ];
};

export default columns;
