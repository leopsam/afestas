import axios from "axios";

const signInApi = async (email, password) => {
  const body = { email, password };
  const API_URL = import.meta.env.VITE_REACTAPP_BACKEND_URL;
  
  try {
    const res = await axios.post(`${API_URL}auth/signin`, body);
        return res.data;
    } catch (err) {
        throw new Error(err.response);
    }
};

export default signInApi;
