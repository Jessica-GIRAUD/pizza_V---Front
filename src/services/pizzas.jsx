import axios from "axios";
const url = "http://localhost:5001";

export const getAllPizzas = () => {
  axios
    .get(`${url}/pizzas`)
    .then((result) => {
      if (result.status === 200) {
        return result;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createNewPizza = (data) => {
  axios
    .post(`${url}/pizzas/create`, data)
    .then((result) => {
      if (result.status === 200) {
        return result;
      }
    })
    .catch((err) => {
      console.log(err);
    });
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
