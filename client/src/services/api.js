import axios from 'axios';

const API_URL = 'https://fs-backend-lm54.onrender.com';

export const uploadFile = async (data) => {
  try {
    let response = await axios.post(`${API_URL}/upload`, data);
    return response.data;
  } catch (error) {
    console.error(`Error while calling API`, error.message);
    throw error; // Throw the error to handle it in the calling function
  }
};
