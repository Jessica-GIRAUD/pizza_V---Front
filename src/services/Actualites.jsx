const url = "http://localhost:5001";

export const getAllActus = async (axiosPrivate) => {
  try {
    const response = await axiosPrivate.get(`${url}/actus`);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    return err.response;
  }
};

export const getActu = async (id, axiosPrivate) => {
  try {
    const response = await axiosPrivate.get(`${url}/actus/${id}`);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    return err.response;
  }
};

export const createNewActu = async (data, axiosPrivate) => {
  try {
    const response = await axiosPrivate.post(`${url}/actus/create`, data);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    console.log(err);
  }
};

export const updateActu = async (id, data, axiosPrivate) => {
  try {
    const response = await axiosPrivate.put(`${url}/actus/update/${id}`, data);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteActu = async (id, axiosPrivate) => {
  try {
    const response = await axiosPrivate.delete(`${url}/actus/delete/${id}`);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    console.log(err);
  }
};
