import { AccordionDetails, Typography } from '@mui/material';

const TaskDetails = ({ children }) => {
    return (
        <AccordionDetails>
            <Typography>{children}</Typography>
        </AccordionDetails>
    );
};

export default TaskDetails;
