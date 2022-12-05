import Accordion from '@mui/material/Accordion';

import TaskDetails from './task-details';
import TaskTitle from './task-title';

const Task = ({ task }) => {
    return (
        <Accordion>
            <TaskTitle task={task}>{task.name}</TaskTitle>
            <TaskDetails>{task.description}</TaskDetails>
        </Accordion>
    );
};

export default Task;
