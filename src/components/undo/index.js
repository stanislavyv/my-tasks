import { Box, Typography, Button } from '@mui/material';

const Undo = ({ msg, onUndo, closeToast }) => {
    const onClickHandler = () => {
        onUndo();
        closeToast();
    };

    return (
        <Box>
            <Typography>
                {msg}{' '}
                <Button
                    variant="text"
                    color={'primary'}
                    onClick={onClickHandler}
                >
                    Undo
                </Button>
            </Typography>
        </Box>
    );
};

export default Undo;
