import { Form, message } from "antd";
import { useEffect } from "react";
import { createOne, getOne, updateOne } from "../../../services/Routes";
import useGenerateFormItem from "../hooks/generateInput";
import useAuth from "../hooks/useAuth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import "../styles/Form.css";
import { fileToBase64 } from "../utils/utils";
import FormButton from "./FormButton";

const CustomForm = ({
  topic,
  okText,
  openModal,
  setOpenModal,
  purpose,
  fields,
  extraFields,
}) => {
  const { fileList, fetchResources } = useAuth();

  const axiosPrivate = useAxiosPrivate();
  const [form] = Form.useForm();
  const generateFields = useGenerateFormItem();

  const createResource = (values) => {
    createOne(values, axiosPrivate, topic).then((res) => {
      if (res.status === 200) {
        setOpenModal(!openModal);
        fetchResources(topic);
        message.success("Création réalisée avec succès");
      } else {
        message.error("Un problème est survenu lors de la création.");
      }
    });
  };

  const updateResource = async (values) => {
    if (fileList.length > 0 && !Object.keys(fileList[0]).includes("url")) {
      values.logo = await fileToBase64(fileList[0]);
    }
    const { id } = values;

    updateOne(id, values, axiosPrivate, topic).then((res) => {
      if (res?.status === 200) {
        fetchResources(topic);
        setOpenModal(!openModal);
        message.success("Modification réalisée avec succès.");
      } else {
        message.error("Un problème est survenu lors de la modification.");
      }
    });
  };

  const handleSubmit = async (values) => {
    if (purpose.purpose === "edit") await updateResource(values);
    if (purpose.purpose === "create") await createResource(values);
  };

  const getResource = async () => {
    try {
      const { data } = await getOne(purpose.id, axiosPrivate, topic);
      form.setFieldsValue(data[0]);
    } catch (e) {
      if (e.response) message(e.response.status);
    }
  };

  useEffect(() => {
    if (purpose.purpose === "edit") {
      getResource();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [purpose.id, purpose.purpose]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name={topic}
      labelCol={{
        span: 7,
      }}
      wrapperCol={{
        span: 15,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {fields.map((field) => generateFields(field))}
      {extraFields}
      <FormButton
        openModal={openModal}
        setOpenModal={setOpenModal}
        okText={okText}
      />
    </Form>
  );
};
export default CustomForm;
