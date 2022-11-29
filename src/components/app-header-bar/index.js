import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import MainHeading from './main-heading';

const AppHeaderBar = () => {
    return (
        <AppBar position="static">
            <Toolbar variant="dense" sx={{ my: 1 / 2 }}>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon fontSize="large" />
                </IconButton>
                <MainHeading />
            </Toolbar>
        </AppBar>
    );
};

export default AppHeaderBar;
