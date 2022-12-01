import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import globalStyles from './GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeModeProvider from './context/ThemeModeContext';

ReactDOM.render(
    <>
        <ThemeModeProvider>
            {globalStyles}
            <CssBaseline />
            <App />
        </ThemeModeProvider>
    </>,
    document.getElementById('root')
);
