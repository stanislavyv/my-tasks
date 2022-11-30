import {
    styled,
    Paper,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import TaskDetails from './task-details';
import TaskTitle from './task-title';

const Task = ({ task }) => {
    return (
        <Accordion>
            <TaskTitle>{task.name}</TaskTitle>
            <TaskDetails>{task.description}</TaskDetails>
        </Accordion>
    );
};

export default Task;
