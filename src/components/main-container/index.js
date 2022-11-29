import { styled, Box } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
    height: '100vh',
    width: '100%',
}));

const MainContainer = ({ children }) => {
    return <StyledBox>{children}</StyledBox>;
};

export default MainContainer;
