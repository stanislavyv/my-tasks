import React, { useState, useEffect, useMemo, useContext, useRef } from 'react';
import useToastify from '../hooks/useToastify';

import { trackPromise } from 'react-promise-tracker';
import * as taskService from '../services/taskService';

const TaskContext = React.createContext({});
TaskContext.displayName = 'TaskContext';

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [deletedTasks, setDeletedTasks] = useState([]);
    const isDeleting = useRef(false);

    const { notifySuccess, notifyDelete } = useToastify();

    useEffect(() => {
        trackPromise(
            taskService.getAllTasks().then((res) => {
                setTasks(res);
            }),
            'main-area'
        );

        return () => {
            console.log('here');
            deletedTasks.forEach((d) => {
                taskService.deleteTask(d.id);
            });
            setDeletedTasks([]);
        };
    }, []);

    const addTask = (taskObj) => {
        taskService.createTask(taskObj).then((id) => {
            setTasks((prev) => [{ id, ...taskObj }, ...prev]);
            notifySuccess('Task Added');
        });
    };

    const deleteTask = (task) => {
        isDeleting.current = true;
        const { id } = task;

        const filteredTasks = tasks.filter((t) => t?.id !== id);
        setTasks(filteredTasks);

        const isAlreadyDeleted = deletedTasks.some((t) => t?.id === id);

        let newDeletedTasks = [];
        if (!isAlreadyDeleted) {
            newDeletedTasks = [...deletedTasks, { ...task }];
            setDeletedTasks(newDeletedTasks);
        }

        notifyDelete(
            'Task Deleted',
            () => undo(task, newDeletedTasks),
            () => deletePermanently(id)
        );
    };

    const deletePermanently = (id) => {
        console.log(isDeleting.current);
        if (isDeleting.current) {
            taskService.deleteTask(id);
        }
    };

    const undo = (task, deletedTasks) => {
        isDeleting.current = false;

        // We can mutate the input array here because
        // it's a copy of the state array
        const latestDeletedTask = deletedTasks.pop();
        setDeletedTasks(deletedTasks);

        const newTasks = [...tasks];
        // The task is also deleted here although it had
        // already been deleted in deleteTask() because
        // the state wouldn't have been updated yet on undo call
        newTasks.splice(task?.index, 1, task);
        setTasks(newTasks);
    };

    const value = useMemo(
        () => ({
            tasks,
            addTask,
            deleteTask,
            undo,
        }),
        [tasks]
    );

    return <TaskContext.Provider value={value} children={children} />;
};

export const useTasks = () => useContext(TaskContext);

export default TaskProvider;
