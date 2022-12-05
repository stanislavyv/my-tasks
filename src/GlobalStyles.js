import { useTheme } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';

export default () => {
    const theme = useTheme();

    return (
        <GlobalStyles
            styles={{
                ':root': {
                    '--toastify-color-progress-light': `${theme.palette.lighter.main}`,
                    '--toastify-color-progress-dark': `${theme.palette.lighter.main}`,
                    '--toastify-color-dark': `${theme.palette.toastBackground.main}`,
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
};
