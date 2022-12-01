import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import theme from './Theme';
import { ThemeProvider } from '@mui/material';

import globalStyles from './GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.render(
    <>
        <ThemeProvider theme={theme}>
            {globalStyles}
            <CssBaseline />
            <App />
        </ThemeProvider>
    </>,
    document.getElementById('root')
);
