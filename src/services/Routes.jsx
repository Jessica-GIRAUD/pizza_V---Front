import axios from "axios";

const url = "http://localhost:5001";

export const getAllPizzas = async () => {
  try {
    const response = await axios.get(`${url}/pizzas`);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    return err.response;
  }
};

export const getAll = async (axiosPrivate, topic) => {
  try {
    const response = await axiosPrivate.get(`${url}/${topic}`);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    return err.response;
  }
};

export const getOne = async (id, axiosPrivate, topic) => {
  console.log("topic", topic);
  console.log("id", id);
  try {
    const response = await axiosPrivate.get(`${url}/${topic}/${id}`);
    console.log("response", response);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    return err.response;
  }
};

export const createOne = async (data, axiosPrivate, topic) => {
  try {
    const response = await axiosPrivate.post(`${url}/${topic}/create`, data);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    console.log(err);
  }
};

export const updateOne = async (id, data, axiosPrivate, topic) => {
  console.log("data", data);
  try {
    const response = await axiosPrivate.put(
      `${url}/${topic}/update/${id}`,
      data
    );
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteOne = async (id, axiosPrivate, topic) => {
  try {
    const response = await axiosPrivate.delete(`${url}/${topic}/delete/${id}`);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    console.log(err);
  }
};
