import { useState } from 'react';
import { useFormik } from 'formik';
import { useTasks } from '../../context/TaskContext';

import * as yup from 'yup';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import AddButton from '../buttons/add-button';

const PATTERN_INPUT = /^[a-zA-Zа-яА-Я0-9\s!\.,:;'"%&*()\-_=+?\/]+$/;

const validationSchema = yup.object({
    name: yup
        .string('Enter task name')
        .min(6, 'Name must be minimum 6 characters')
        .max(25, 'Name cannot be more than 25 characters')
        .matches(PATTERN_INPUT, 'Name contains illegal characters')
        .required('Name is required'),
    description: yup
        .string('Enter description')
        .max(100, 'Description cannot be more than 100 characters')
        .matches(PATTERN_INPUT, 'Description contains illegal characters'),
});

export default function AddDialog() {
    const [open, setOpen] = useState(false);
    const { addTask } = useTasks();

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if (!formik.isValid) {
                return;
            }

            addTask(values);

            setOpen(false);
            formik.resetForm();
        },
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        formik.resetForm();
    };

    return (
        <>
            <AddButton onClick={handleClickOpen} />
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle align="center">Add New Task</DialogTitle>
                <DialogContent>
                    <form id="add-form" onSubmit={formik.handleSubmit}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            name="name"
                            label="Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.name &&
                                Boolean(formik.errors.name)
                            }
                            helperText={
                                formik.touched.name && formik.errors.name
                            }
                        />
                        <TextField
                            margin="dense"
                            id="description"
                            name="description"
                            label="Description"
                            type="text"
                            fullWidth
                            variant="standard"
                            multiline
                            rows={4}
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.description &&
                                Boolean(formik.errors.description)
                            }
                            helperText={
                                formik.touched.description &&
                                formik.errors.description
                            }
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" form="add-form">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
