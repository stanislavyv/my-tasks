import { styled, Typography, useMediaQuery } from '@mui/material';

const MainHeading = () => {
    const isXs = useMediaQuery('(max-width: 600px)');

    return (
        <Typography
            flexGrow={1}
            variant={isXs ? 'h5' : 'h4'}
            component="h1"
            ml={1}
        >
            My Tasks
        </Typography>
    );
};

export default MainHeading;
