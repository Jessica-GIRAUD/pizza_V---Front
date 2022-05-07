import React from "react";
import { Form, Input } from "antd";

const useGenerateFormItem = () => {
  return ({
    label,
    name,
    input,
    rules,
    hidden = false,
    noStyle,
    dependencies,
  }) => (
    <Form.Item
      key={name}
      name={name}
      label={label}
      rules={rules}
      hidden={hidden}
      noStyle={noStyle}
      dependencies={dependencies}
    >
      {input || <Input />}
    </Form.Item>
  );
};

export default useGenerateFormItem;
