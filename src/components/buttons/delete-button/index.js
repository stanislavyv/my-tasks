import styled from '@mui/material/styles/styled';

import { useTasks } from '../../../context/TaskContext';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledIconButton = styled(IconButton)({
    transition: '0.4s',
    '&:hover': { color: '#9b2335' },
});

const DeleteButton = ({ id }) => {
    const { deleteTask } = useTasks();

    const onDeleteClick = (e) => {
        // so Accordion doesn't expand on delete
        e.stopPropagation();
        deleteTask(id);
    };

    return (
        <StyledIconButton
            sx={{
                p: 0,
            }}
            onClick={onDeleteClick}
        >
            <DeleteIcon />
        </StyledIconButton>
    );
};

export default DeleteButton;
