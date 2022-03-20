import React from "react";
import { Form, Button } from "antd";

const FormButton = ({ openModal, setOpenModal, okText }) => {
  return (
    <Form.Item wrapperCol={{ span: 22, offset: 0 }}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ margin: "0 10px" }} type="primary" htmlType="submit">
          {okText}
        </Button>

        <Button type="secondary" onClick={() => setOpenModal(!openModal)}>
          Annuler
        </Button>
      </div>
    </Form.Item>
  );
};

export default FormButton;
