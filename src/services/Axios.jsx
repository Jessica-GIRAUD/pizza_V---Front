import axios from "axios";

const BASE_URL = "https://pizza-kika.herokuapp.com";
// const BASE_URL = "http://localhost:5001";

export default axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
