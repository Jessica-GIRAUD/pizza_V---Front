import axios from "axios";
const url = "http://localhost:5001";

export const createAccount = async (data) => {
  try {
    const response = await axios.post(`${url}/admin/register`, data);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    return err.response;
  }
};
