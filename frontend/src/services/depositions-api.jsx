import axios from "axios";

const getDeposition = async () => {
  const API_URL = import.meta.env.VITE_REACTAPP_BACKEND_URL;
  //const url = import.meta.env.VITE_REACTAPP_BACKEND_URL + "/deposition/all"

  try {
    const res = await axios.get(`${API_URL}/deposition/all`);
    return res.data;
  } catch (err) {
    throw new Error(err.response.data);
  }
};

export default getDeposition;
