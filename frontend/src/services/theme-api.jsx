import axios from 'axios';


const getTheme = async () => {
    const url = "http://54.211.125.162/api/theme/all" 

    try {
        const res = await axios.get(url);
        return res.data;
    } catch (err) {
        throw new Error(err.response.data);
    }
};

export default getTheme;