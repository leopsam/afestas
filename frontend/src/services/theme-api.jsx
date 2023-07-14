import axios from 'axios';


const getTheme = async () => {
    const url = "http://localhost:4000/theme/all" 

    try {
        const res = await axios.get(url);
        return res.data;
    } catch (err) {
        throw new Error(err.response.data);
    }
};

export default getTheme;