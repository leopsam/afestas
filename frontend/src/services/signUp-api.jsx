import axios from "axios";

const signUpApi = async (email, password, name, cpf, birthday, phone, street, city, complement, state, number, cep, avatar) => {
  const body = { email, password, name, cpf, birthday, phone, street, city, complement, state, number, cep, avatar };
  const API_URL = import.meta.env.VITE_REACTAPP_BACKEND_URL;
  
  try {
        const res = await axios.post(`${API_URL}user/signup`, body);
        return res.data;
    } catch (err) {
        throw new Error(err.response);
    }
};

export default signUpApi;
