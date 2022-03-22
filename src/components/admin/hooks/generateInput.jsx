import React from "react";
import { Form, Input } from "antd";

const useGenerateFormItem = () => {
  return ({ label, name, input, rules, hidden = false }) => (
    <Form.Item
      key={name}
      name={name}
      label={label}
      rules={rules}
      hidden={hidden}
    >
      {input || <Input />}
    </Form.Item>
  );
};

export default useGenerateFormItem;
