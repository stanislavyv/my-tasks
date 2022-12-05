import { useMemo } from 'react';

import Undo from '../components/undo';

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export default () => {
    const notifySuccess = (msg) => {
        toast.dismiss();
        toast.success(msg, {
            autoClose: 2500,
            hideProgressBar: true,
            pauseOnHover: false,
        });
    };

    const notifyDelete = (msg, onUndoHandler, onCloseHandler) => {
        toast.dismiss();
        toast(<Undo msg={msg} onUndo={onUndoHandler} />, {
            autoClose: 6000,
            hideProgressBar: false,
            pauseOnHover: true,
            onClose: onCloseHandler,
        });
    };

    const value = useMemo(
        () => ({
            notifySuccess,
            notifyDelete,
        }),
        []
    );

    return value;
};
