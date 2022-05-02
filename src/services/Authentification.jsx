import axios from "./Axios";

export const register = async (data) => {
  try {
    const response = await axios.post(`/auth/forgot-password`, data);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    return err.response;
  }
};

export const login = async (data) => {
  try {
    const response = await axios.post(`/auth/login`, data);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    return err.response;
  }
};

export const logout = async () => {
  try {
    const response = await axios.get(`/auth/logout`);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    return err.response;
  }
};
