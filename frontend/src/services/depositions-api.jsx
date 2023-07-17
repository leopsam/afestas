import axios from 'axios';


const getDeposition = async () => {
    const url = import.meta.env.VITE_REACTAPP_BACKEND_URL + "/deposition/all" 

    try {
        const res = await axios.get(url);
        return res.data;
    } catch (err) {
        throw new Error(err.response.data);
    }
};

export default getDeposition;