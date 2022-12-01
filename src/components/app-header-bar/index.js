import { AppBar, Box, Toolbar } from '@mui/material';

import MainHeading from './main-heading';

const AppHeaderBar = () => {
    return (
        <Box position="relative">
            <AppBar position="fixed">
                <Toolbar variant="dense">
                    <MainHeading />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default AppHeaderBar;
