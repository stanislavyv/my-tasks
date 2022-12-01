import { styled, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import DeleteButton from '../../buttons/delete-button';

const StyledAccordionSummary = styled(AccordionSummary)({
    justifyContent: 'center',

    '& .MuiAccordionSummary-content': {
        justifyContent: 'space-between',
    },
});

const TaskTitle = ({ children, id }) => {
    return (
        <StyledAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Typography>{children}</Typography>
            <DeleteButton id={id} />
        </StyledAccordionSummary>
    );
};

export default TaskTitle;
