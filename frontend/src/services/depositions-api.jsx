import axios from 'axios';


const getDeposition = async () => {
    const url = "http://54.211.125.162/api/deposition/all" 

    try {
        const res = await axios.get(url);
        return res.data;
    } catch (err) {
        throw new Error(err.response.data);
    }
};

export default getDeposition;