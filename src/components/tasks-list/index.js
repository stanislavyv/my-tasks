import { usePromiseTracker } from 'react-promise-tracker';

import { useTasks } from '../../context/TaskContext';

import { Box, Stack, styled } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import Task from '../task';

const StyledTasksList = styled(Box)({
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
});

const TasksList = () => {
    const { tasks } = useTasks();
    const { promiseInProgress } = usePromiseTracker({ area: 'main-area' });

    return (
        <StyledTasksList>
            {promiseInProgress ? (
                <CircularProgress
                    size={60}
                    disableShrink={true}
                    sx={{ alignSelf: 'center' }}
                />
            ) : (
                <Stack spacing={2} m={4} mt={10}>
                    {tasks?.map((task, index) => (
                        // concat the index to task because
                        // nested delete button uses it
                        <Task task={{ ...task, index }} key={index}></Task>
                    ))}
                </Stack>
            )}
        </StyledTasksList>
    );
};

export default TasksList;
