import { usePromiseTracker } from 'react-promise-tracker';

import { useTasks } from '../../context/TaskContext';

import { Box, Stack, styled, Typography } from '@mui/material';
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
                <Stack spacing={2} m={4} mt={10} sx={{ minWidth: '55%' }}>
                    {tasks.length > 0 ? (
                        tasks.map((task, index) => (
                            // concat the index to task because
                            // nested delete button uses it
                            <Task task={{ ...task, index }} key={index}></Task>
                        ))
                    ) : (
                        <Typography align={'center'} variant={'h4'}>
                            You've completed all your tasks! Why don't you add
                            some more?
                        </Typography>
                    )}
                </Stack>
            )}
        </StyledTasksList>
    );
};

export default TasksList;
