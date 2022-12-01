import { useTasks } from '../../context/TaskContext';

import { Stack } from '@mui/system';
import Task from '../task';

const TasksList = () => {
    const { tasks } = useTasks();

    return (
        <Stack spacing={2} m={4} mt={10}>
            {tasks.map((task, index) => (
                <Task task={task} key={index}></Task>
            ))}
        </Stack>
    );
};

export default TasksList;
