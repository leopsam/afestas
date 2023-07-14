import axios from "axios";

const signUpApi = async (email, password, name, cpf, birthday, phone, street, city, complement, state, number, cep, avatar) => {
  const body = { email, password, name, cpf, birthday, phone, street, city, complement, state, number, cep, avatar };
  const url = "http://localhost:4000/user/signup";
  
  try {
        const res = await axios.post(url, body);
        return res.data;
    } catch (err) {
        throw new Error(err.response);
    }
};

export default signUpApi;
