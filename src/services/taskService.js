import axios from 'axios';
import { dbUrl } from '../config/firebase';

axios.defaults.baseURL = `${dbUrl}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const getAllTasks = async () => {
    try {
        const result = await axios.get('.json');

        if (!result.data) {
            return [];
        }

        // Firebase returns nested objects, this will convert the data to array
        return Object.entries(result.data)
            .reduce((acc, [id, { name, description }]) => {
                return [...acc, { id, name, description }];
            }, [])
            .reverse(); // reverse so newly added items (by shift()) are shown first
    } catch (e) {
        console.log(e);
    }
};

export const createTask = async (data) => {
    try {
        const res = await axios.post('.json', data);
        return res.data.name;
    } catch (e) {
        console.log(e);
    }
};

export const deleteTask = async (id) => {
    try {
        return axios.delete(`/${id}.json`);
    } catch (e) {
        console.log(e);
    }
};
