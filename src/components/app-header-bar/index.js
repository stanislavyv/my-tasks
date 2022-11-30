import { AppBar, Box, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import MainHeading from './main-heading';

const AppHeaderBar = () => {
    return (
        <Box position="relative">
            <AppBar position="fixed">
                <Toolbar variant="dense" sx={{ my: 1 / 2 }}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon fontSize="large" />
                    </IconButton>
                    <MainHeading />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default AppHeaderBar;
