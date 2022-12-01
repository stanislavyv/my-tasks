import { AppBar, Box, Toolbar } from '@mui/material';

import ThemeSwitch from '../theme-switch';
import MainHeading from './main-heading';

const AppHeaderBar = () => {
    return (
        <Box position="relative">
            <AppBar position="fixed">
                <Toolbar variant="dense">
                    <ThemeSwitch />
                    <MainHeading />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default AppHeaderBar;
