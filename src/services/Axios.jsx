import axios from "axios";

const BASE_URL = "https://pizza-kika.herokuapp.com";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "https://pizza-kika.netlify.app",
  },
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "https://pizza-kika.netlify.app",
  },
  withCredentials: true,
});
