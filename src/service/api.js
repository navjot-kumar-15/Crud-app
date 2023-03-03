import axios from "axios";

const URL = "http://localhost:8001";

// Adding the new user
export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add `, data);
  } catch (error) {
    console.log("Error while fetching ", error);
  }
};
// Getting all the details of all the users
export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log("Error while fetching ", error);
  }
};

// Getting the user details by their id
export const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log("Error while fetching ", error);
  }
};

// edit the user
export const editUser = async (user, id) => {
  try {
    return await axios.put(`${URL}/${id}`, user);
  } catch (error) {
    console.log("Error while fetching ", error);
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log("Error while fetching ", error);
  }
};
