import { Divider, Popconfirm, Tooltip } from 'antd';
import {
  FormOutlined,
  DeleteOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';

const columns = (setOpenModal, openModal, setPurpose, onDeletePizza) => {
  return [
    {
      title: 'Nom',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Base',
      dataIndex: 'base_name',
      key: 'base_name',
      sorter: (a, b) => a.base_name.localeCompare(b.base_name),
      defaultSortOrder: 'ascend',

      filters: [
        {
          text: 'Tomate',
          value: 'tomate',
        },
        {
          text: 'Crème',
          value: 'crème',
        },
        {
          text: 'Originale',
          value: 'originale',
        },
      ],
      onFilter: (value, record) => record.base_name.includes(value),
    },
    {
      title: 'Ingrédients',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Prix',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `${price.toFixed(2)} €`,
      sorter: (a, b) => a.price - b.price,
    },
    {
      key: 'action',
      // eslint-disable-next-line react/prop-types
      render: ({ key }) => (
        <div
          style={{
            float: 'right',

            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <div
            onClick={() => {
              setPurpose({ purpose: 'edit', id: key });
              setOpenModal(!openModal);
            }}
          >
            <Tooltip title='Modifier'>
              <FormOutlined
                style={{ fontSize: 14, padding: 10, cursor: 'pointer' }}
              />
            </Tooltip>
          </div>

          <Divider type='vertical' />
          <Popconfirm
            title='Êtes-vous sûr de vouloir supprimer cette pizza ?'
            okText='Supprimer'
            placement='left'
            okButtonProps={{ type: 'danger' }}
            onConfirm={() => onDeletePizza(key)}
            icon={<QuestionCircleOutlined />}
          >
            <Tooltip placement='bottom'>
              <DeleteOutlined
                style={{
                  color: 'red',
                  fontSize: 14,
                  padding: 10,
                  cursor: 'pointer',
                }}
                type='delete'
              />
            </Tooltip>
          </Popconfirm>
        </div>
      ),
    },
  ];
};

export default columns;
