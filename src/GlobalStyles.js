import { keyframes } from '@emotion/react';
import GlobalStyles from '@mui/material/GlobalStyles';

const toast = keyframes({
    '0%': {
        transform: 'scaleX(1)',
    },
    '100%': {
        transform: 'scaleX(0)',
    },
});

const globalStyles = (
    <GlobalStyles
        styles={{
            '.Toastify__progress-bar': {
                animation: `${toast} linear 1`,
            },

            html: {
                fontFamily: 'Roboto',
            },

            body: {
                margin: 0,
                padding: 0,
            },
        }}
    />
);

export default globalStyles;
