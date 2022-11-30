import { useState, useEffect } from 'react';

import { Stack } from '@mui/system';
import Task from '../task';
import { getAllTasks } from '../../services/taskService';

const TasksList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getAllTasks().then((tasks) => {
            setTasks(tasks);
        });
    }, []);

    return (
        <Stack spacing={2} m={4} mt={10}>
            {tasks.map((task, index) => (
                <Task task={task} key={index}></Task>
            ))}
        </Stack>
    );
};

export default TasksList;
