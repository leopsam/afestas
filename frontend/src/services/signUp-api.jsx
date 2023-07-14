import axios from "axios";

const signUpApi = async (email, password, name, cpf, birthday, phone, street, city, complement, state, number, cep, avatar) => {
  const body = { email, password, name, cpf, birthday, phone, street, city, complement, state, number, cep, avatar };
  const url = "http://54.211.125.162/api/user/signup";
  
  try {
        const res = await axios.post(url, body);
        return res.data;
    } catch (err) {
        throw new Error(err.response);
    }
};

export default signUpApi;
