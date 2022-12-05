import Fab from '@mui/material/Fab';
import styled from '@mui/material/styles/styled';

import AddIcon from '@mui/icons-material/Add';

const StyledFab = styled(Fab)(({ theme }) => ({
    position: 'fixed',
    bottom: '2%',
    left: '2%',

    '&:hover': {
        backgroundColor: theme.palette.lighter.main,
    },
}));

const AddButton = ({ onClick }) => {
    return (
        <StyledFab onClick={onClick} color="primary" aria-label="add">
            <AddIcon />
        </StyledFab>
    );
};

export default AddButton;
