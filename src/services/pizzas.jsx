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

export const getPizza = async (id, axiosPrivate) => {
  try {
    const response = await axiosPrivate.get(`${url}/pizzas/${id}`);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    return err.response;
  }
};

export const createNewPizza = async (data, axiosPrivate) => {
  try {
    const response = await axiosPrivate.post(`${url}/pizzas/create`, data);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    console.log(err);
  }
};

export const updatePizza = async (id, data, axiosPrivate) => {
  try {
    const response = await axiosPrivate.put(`${url}/pizzas/update/${id}`, data);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    console.log(err);
  }
};

export const deletePizza = async (id, axiosPrivate) => {
  try {
    const response = await axiosPrivate.delete(`${url}/pizzas/delete/${id}`);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    console.log(err);
  }
};
