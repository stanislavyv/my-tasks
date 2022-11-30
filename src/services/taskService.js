import axios from 'axios';
import { dbUrl } from '../config/firebase';

axios.defaults.baseURL = dbUrl;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const getAll = async () => {
    try {
        const result = await axios.get(dataBaseURL).data;
        return result;
    } catch (e) {
        console.log(e);
    }
};

export const create = async (data) => {
    try {
        return await axios.post('', data);
    } catch (e) {
        console.log(e);
    }
};

export const deleteOne = (id) => {};
