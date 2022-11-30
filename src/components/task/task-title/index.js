import {
    styled,
    AccordionSummary,
    IconButton,
    Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledAccordionSummary = styled(AccordionSummary)({
    justifyContent: 'center',

    '& .MuiAccordionSummary-content': {
        justifyContent: 'space-between',
    },
});

const TaskTitle = ({ children }) => {
    return (
        <StyledAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Typography>{children}</Typography>
            <IconButton
                sx={{
                    p: 0,
                    justifySelf: 'space-between',
                    alignSelf: 'space-between',
                }}
            >
                <DeleteIcon />
            </IconButton>
        </StyledAccordionSummary>
    );
};

export default TaskTitle;
