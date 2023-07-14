import axios from 'axios';


const getDeposition = async () => {
    const url = "http://localhost:4000/deposition/all" 

    try {
        const res = await axios.get(url);
        return res.data;
    } catch (err) {
        throw new Error(err.response.data);
    }
};

export default getDeposition;