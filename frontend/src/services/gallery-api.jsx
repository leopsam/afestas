import axios from 'axios';


const getGallery = async () => {
    const url = " http://api:4000/api/galery/all" 

    try {
        const res = await axios.get(url);
        return res.data;
    } catch (err) {
        throw new Error(err.response.data);
    }
};

export default getGallery;