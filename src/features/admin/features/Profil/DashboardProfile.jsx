import React, { useEffect } from "react";
import { Button, Form, message } from "antd";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useFields } from "./fields";
import { getOne, updateOne } from "../../../../services/Routes";
import useGenerateFormItem from "../../hooks/generateInput";
import "../../styles/Dashboard.css";
import useAuth from "../../hooks/useAuth";

const DashboardProfile = () => {
  const { auth, fetchResources } = useAuth();
  const {
    user: { id: userId },
  } = auth;
  const [form] = Form.useForm();

  const axiosPrivate = useAxiosPrivate();
  const generateFields = useGenerateFormItem();
  const { fields } = useFields();

  const handleSubmit = async (values) => {
    const { id } = values;
    updateOne(id, values, axiosPrivate, "profile").then((res) => {
      if (res.status === 200) {
        form.resetFields();
        form.setFieldsValue(res?.data[0]);
        fetchResources("profil");
        message.success("Modification réalisée avec succès.");
      } else {
        message.error(res?.data?.message);
      }
    });
  };

  const getResource = async () => {
    try {
      const { data } = await getOne(userId, axiosPrivate, "profile");
      form.resetFields();
      form.setFieldsValue(data[0]);
    } catch (e) {
      if (e.response) message(e.response.status);
    }
  };

  useEffect(() => {
    getResource();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <h1 className="title">Modifier le profil </h1>
      <Form
        form={form}
        name="profile"
        style={{ width: "60%", margin: "auto" }}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        //  validateMessages={validateMessages}
      >
        {fields.map((field) => generateFields(field))}
        <Form.Item wrapperCol={{ span: 22, offset: 0 }}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              style={{ margin: "0 10px" }}
              type="primary"
              htmlType="submit"
            >
              Modifier
            </Button>

            <Button type="secondary" onClick={() => getResource()}>
              Annuler
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DashboardProfile;
