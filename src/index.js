import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import globalStyles from './GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.render(
    <>
        {globalStyles}
        <CssBaseline />
        <App />
    </>,
    document.getElementById('root')
);
