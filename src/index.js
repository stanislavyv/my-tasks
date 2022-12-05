import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyles from './GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeModeProvider from './context/ThemeModeContext';

ReactDOM.render(
    <>
        <ThemeModeProvider>
            <CssBaseline />
            <GlobalStyles />
            <App />
        </ThemeModeProvider>
    </>,
    document.getElementById('root')
);
