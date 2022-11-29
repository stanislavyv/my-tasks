import Fab from '@mui/material/Fab';
import styled from '@mui/material/styles/styled';

import AddIcon from '@mui/icons-material/Add';

const StyledFab = styled(Fab)({
    position: 'fixed',
    bottom: '2%',
    left: '2%',
    backgroundColor: '#1976d2d1',

    '&:hover': {
        backgroundColor: '#005cb7d1',
    },
});

const AddButton = ({ onClick }) => {
    return (
        <StyledFab onClick={onClick} color="primary" aria-label="add">
            <AddIcon />
        </StyledFab>
    );
};

export default AddButton;
