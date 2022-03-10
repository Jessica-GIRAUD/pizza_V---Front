import axios from "axios";
const url = "http://localhost:5001";

axios.defaults.withCredentials = true;

export const createAccount = async (data) => {
  try {
    const response = await axios.post(`${url}/admin/register`, data);
    if (response.status === 201) {
      return response;
    }
  } catch (err) {
    return err.response;
  }
};

export const loggin = async (data) => {
  try {
    const response = await axios.post(`${url}/admin/login`, data);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    return err.response;
  }
};

export const isLogged = async () => {
  try {
    const response = await axios.get(`${url}/admin/profile`);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    return err.response;
  }
};

export const logout = async () => {
  try {
    const response = await axios.get(`${url}/admin/logout`);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    return err.response;
  }
};
