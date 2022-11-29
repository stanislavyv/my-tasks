import { styled, Typography, useMediaQuery } from '@mui/material';

const StyledTypography = styled(Typography)({});

const MainHeading = () => {
    const isXs = useMediaQuery('(max-width: 600px)');

    return (
        <Typography
            flexGrow={1}
            align="center"
            variant={isXs ? 'h5' : 'h4'}
            component="h1"
        >
            My Tasks
        </Typography>
    );
};

export default MainHeading;
