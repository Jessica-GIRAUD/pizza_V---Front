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

export const createNewPizza = async (data) => {
  try {
    const response = await axios.post(`${url}/pizzas/create`, data);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    console.log(err);
  }
};

export const updatePizza = (id, data) => {
  axios
    .put(`${url}/pizzas/update/${id}`, data)
    .then((result) => {
      if (result.status === 200) {
        return result;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deletePizza = (id) => {
  axios
    .delete(`${url}/pizzas/delete/${id}`)
    .then((result) => {
      if (result.status === 200) {
        return result;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
