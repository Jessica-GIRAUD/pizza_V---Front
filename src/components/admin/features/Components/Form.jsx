import { Form, Input, Select, InputNumber, message } from "antd";
import { useEffect } from "react";
import {
  createNewPizza,
  getPizza,
  updatePizza,
} from "../../../../services/Pizzas";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import "../../styles/Form.css";
import FormButton from "./FormButton";

const { Option } = Select;
const { TextArea } = Input;

const CustomForm = ({ okText, openModal, setOpenModal, purpose }) => {
  const axiosPrivate = useAxiosPrivate();
  const { setResources } = useAuth();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const { idpizza } = values;
    if (purpose.purpose === "create") {
      createNewPizza(values, axiosPrivate).then((res) => {
        if (res.status === 200) {
          setOpenModal(!openModal);
          setResources(
            res.data
              .map(({ idpizza, ...d }) => ({ ...d, key: idpizza }))
              .sort((a, b) => a.name.localeCompare(b.name))
          );
          message.success("Votre pizza a bien été ajoutée.");
        } else {
          message.error(
            "Un problème est survenu lors de la création de la pizza."
          );
        }
      });
    } else {
      updatePizza(idpizza, values, axiosPrivate).then((res) => {
        if (res.status === 200) {
          setOpenModal(!openModal);
          setResources(
            res.data
              .map(({ idpizza, ...d }) => ({ ...d, key: idpizza }))
              .sort((a, b) => a.name.localeCompare(b.name))
          );
          message.success("Votre pizza a bien été modifiée.");
        } else {
          message.error(
            "Un problème est survenu lors de la modification de la pizza."
          );
        }
      });
    }
  };

  const getResource = async () => {
    try {
      const { data } = await getPizza(purpose.id, axiosPrivate);
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
  }, [purpose]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item name="idpizza" hidden></Form.Item>
      <Form.Item
        label="Nom"
        name="name"
        rules={[
          {
            required: true,
            message: "Merci de renseigner le nom d'une pizza.",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Base"
        name="base_name"
        rules={[
          {
            required: true,
            message: "Merci de sélectionner une base.",
          },
        ]}
      >
        <Select
          showSearch
          allowClear
          placeholder="Saisissez une base..."
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          filterSort={(optionA, optionB) =>
            optionA.children
              .toLowerCase()
              .localeCompare(optionB.children.toLowerCase())
          }
        >
          <Option value="crème">Crème</Option>
          <Option value="originale">Originale</Option>
          <Option value="tomate">Tomate</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Ingrédients"
        name="description"
        rules={[
          {
            required: true,
            message: "Merci de saisir des ingrédients.",
          },
        ]}
      >
        <TextArea rows={3} />
      </Form.Item>
      <Form.Item
        label="Prix"
        name="price"
        rules={[
          {
            required: true,
            message: "Merci de renseigner un tarif.",
          },
        ]}
      >
        <InputNumber
          addonAfter="€"
          min={0}
          max={50}
          step={0.5}
          style={{ width: "100%" }}
        />
      </Form.Item>
      <FormButton
        openModal={openModal}
        setOpenModal={setOpenModal}
        okText={okText}
      />
    </Form>
  );
};
export default CustomForm;
