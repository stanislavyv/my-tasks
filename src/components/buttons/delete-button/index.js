import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from '@mui/material/styles/styled';

const StyledIconButton = styled(IconButton)({
    transition: '0.4s',
    '&:hover': { color: '#9b2335' },
});

const DeleteButton = ({ key }) => {
    return (
        <StyledIconButton
            sx={{
                p: 0,
            }}
        >
            <DeleteIcon />
        </StyledIconButton>
    );
};

export default DeleteButton;
