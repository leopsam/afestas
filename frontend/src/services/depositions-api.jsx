import axios from 'axios';


const getDeposition = async () => {
    const url = +process.env.REACT_APP_BACK_END_URL + "/api/deposition/all" 

    try {
        const res = await axios.get(url);
        return res.data;
    } catch (err) {
        throw new Error(err.response.data);
    }
};

export default getDeposition;