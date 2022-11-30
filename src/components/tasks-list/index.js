import { Stack, Item } from '@mui/system';
import Task from '../task';

const TasksList = () => {
    return (
        <Stack spacing={2} m={4} mt={10}>
            <Task>Item Task</Task>
            <Task>Item Task</Task>
            <Task>Item Task</Task>
            <Task>Item Task</Task>
            <Task>Item Task</Task>
            <Task>Item Task</Task>
            <Task>Item Task</Task>
            <Task>Item Task</Task>
        </Stack>
    );
};

export default TasksList;
