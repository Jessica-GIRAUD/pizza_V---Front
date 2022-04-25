import axios from "axios";

const url = "https://pizza-kika.herokuapp.com";

export const getAllPublic = async (topic) => {
  try {
    const response = await axios.get(`${url}/${topic}`);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    console.log(err);
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
    console.log(err);
    return err.response;
  }
};

export const getOne = async (id, axiosPrivate, topic) => {
  try {
    const response = await axiosPrivate.get(`${url}/${topic}/${id}`);
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
    const response = await axiosPrivate.post(`${url}/${topic}/create`, data);
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
      `${url}/${topic}/update/${id}`,
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
    const response = await axiosPrivate.delete(`${url}/${topic}/delete/${id}`);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    console.log(err);
    return err.response;
  }
};
