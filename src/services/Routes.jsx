import axios from "axios";

const BASE_URL = "https://pizza-kika.herokuapp.com";
// const BASE_URL = "http://localhost:5001";

export const getAllPublic = async (topic) => {
  try {
    const response = await axios.get(`${BASE_URL}/${topic}`);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getAll = async (axiosPrivate, topic) => {
  try {
    const response = await axiosPrivate.get(`${BASE_URL}/${topic}`);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const getOne = async (id, axiosPrivate, topic) => {
  try {
    const response = await axiosPrivate.get(`${BASE_URL}/${topic}/${id}`);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const createOne = async (data, axiosPrivate, topic) => {
  try {
    const response = await axiosPrivate.post(
      `${BASE_URL}/${topic}/create`,
      data
    );
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const updateOne = async (id, data, axiosPrivate, topic) => {
  try {
    const response = await axiosPrivate.put(
      `${BASE_URL}/${topic}/update/${id}`,
      data
    );
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const deleteOne = async (id, axiosPrivate, topic) => {
  try {
    const response = await axiosPrivate.delete(
      `${BASE_URL}/${topic}/delete/${id}`
    );
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    console.log(err);
    return err.response;
  }
};
