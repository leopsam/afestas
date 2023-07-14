import axios from 'axios';


const getGallery = async () => {
    const url = "http://54.211.125.162/api/galery/all" 

    try {
        const res = await axios.get(url);
        return res.data;
    } catch (err) {
        throw new Error(err.response.data);
    }
};

export default getGallery;