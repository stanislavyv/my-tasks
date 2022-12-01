import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const options = {
    autoClose: 6000,
    hideProgressBar: true,
    pauseOnHover: false,
};

export const notifySuccess = (msg) => {
    toast.success(msg, options);
};

export const notifyDelete = (msg) => {
    toast.info(msg, options);
};
