import axios from 'axios';

const getTheme = async () => {
    const API_URL = import.meta.env.VITE_REACTAPP_BACKEND_URL;
    
    try {
        const res = await axios.get(`${API_URL}theme/all`);
        return res.data;
    } catch (err) {
        throw new Error(err.response.data);
    }
};

export default getTheme;