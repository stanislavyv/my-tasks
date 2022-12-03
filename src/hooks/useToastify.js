import { useMemo } from 'react';

import ClearIcon from '@mui/icons-material/Clear';
import Undo from '../components/undo';

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export default () => {
    const notifySuccess = (msg) => {
        toast.success(msg, {
            autoClose: 2500,
            hideProgressBar: true,
            pauseOnHover: false,
        });
    };

    const notifyDelete = (msg, onUndoHandler) => {
        toast(<Undo msg={msg} onUndo={onUndoHandler} />, {
            icon: ClearIcon,
            autoClose: 6000,
            hideProgressBar: false,
            // pauseOnHover: true,
            pauseOnHover: false,
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
