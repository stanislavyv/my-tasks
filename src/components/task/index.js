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

const Task = ({ children }) => {
    return (
        <Accordion>
            <TaskTitle />
            <TaskDetails />
        </Accordion>
    );
};

export default Task;
