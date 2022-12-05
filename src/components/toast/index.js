import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useThemeMode } from '../../context/ThemeModeContext';

const Toast = () => {
    const { mode } = useThemeMode();

    return (
        <ToastContainer
            limit={1}
            position="top-right"
            closeOnClick={false}
            theme={mode}
        />
    );
};

export default Toast;
