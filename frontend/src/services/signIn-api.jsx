import axios from "axios";

const signInApi = async (email, password) => {
  const body = { email, password };
  const url = "http://54.211.125.162/api/auth/signin";
  
  try {
        const res = await axios.post(url, body);
        return res.data;
    } catch (err) {
        throw new Error(err.response);
    }
};

export default signInApi;
