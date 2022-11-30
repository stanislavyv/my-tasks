import axios from 'axios';
import { dbUrl } from '../config/firebase';

axios.defaults.baseURL = `${dbUrl}.json`;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const getAllTasks = async () => {
    try {
        const result = await axios.get();

        // Firebase returns nested objects, this will convert the data to array
        return Object.entries(result.data).reduce(
            (acc, [key, { name, description }]) => {
                return [...acc, { key, name, description }];
            },
            []
        );
    } catch (e) {
        console.log(e);
    }
};

export const createTask = async (data) => {
    try {
        return await axios.post('', data);
    } catch (e) {
        console.log(e);
    }
};

export const deleteTask = (id) => {};
