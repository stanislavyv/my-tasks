import React, { useState, useEffect, useMemo, useContext } from 'react';
import useToastify from '../hooks/useToastify';

import { trackPromise } from 'react-promise-tracker';
import * as taskService from '../services/taskService';

const TaskContext = React.createContext({});
TaskContext.displayName = 'TaskContext';

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [deletedTasks, setDeletedTasks] = useState([]);
    const [timeoutIds, setTimeoutIds] = useState([]);

    const { notifySuccess, notifyDelete } = useToastify();

    useEffect(() => {
        trackPromise(
            taskService.getAllTasks().then((res) => {
                setTasks(res);
            }),
            'main-area'
        );
    }, []);

    useEffect(() => {
        return () => {
            timeoutIds.forEach((t) => {
                clearTimeout(t);
            });
            setTimeoutIds([]);

            deletedTasks.forEach((d) => {
                taskService.deleteTask(d.id);
            });
            setDeletedTasks([]);
        };
    }, [tasks]);

    const addTask = (taskObj) => {
        taskService.createTask(taskObj).then((id) => {
            setTasks((prev) => [{ id, ...taskObj }, ...prev]);
            notifySuccess('Task Added');
        });
    };

    const undo = () => {
        const newDeletedTasks = [...deletedTasks];
        const latestDeletedTask = newDeletedTasks.pop();
        setDeletedTasks(newDeletedTasks);

        const newTimeotIds = [...timeoutIds];
        newTimeotIds.pop();
        setTimeoutIds(newTimeotIds);

        const newTasks = [...tasks];
        newTasks.splice(latestDeletedTask.index, 0, latestDeletedTask);
        setTasks(newTasks);
    };

    const deleteTask = (id) => {
        const newTasks = [...tasks];

        let toDelete = newTasks.find((t) => t.id === id);
        const toDeleteIndex = newTasks.indexOf(toDelete);

        newTasks.splice(toDeleteIndex, 1);
        setTasks(newTasks);

        if (!deletedTasks.includes(toDelete)) {
            setDeletedTasks((prev) => [
                ...prev,
                { ...toDelete, index: toDeleteIndex },
            ]);
        }

        const currTimeoutId = setTimeout(() => {
            taskService.deleteTask(id);
        }, 10000);
        setTimeoutIds((prev) => [...prev, currTimeoutId]);

        notifyDelete('Task Deleted', undo);
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
