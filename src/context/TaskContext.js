import React, { useState, useEffect, useMemo, useContext } from 'react';

import { trackPromise } from 'react-promise-tracker';
import * as taskService from '../services/taskService';
import { notifySuccess, notifyDelete } from '../services/toastService';

const TaskContext = React.createContext({});
TaskContext.displayName = 'TaskContext';

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        trackPromise(
            taskService
                .getAllTasks()
                .then((res) => {
                    setTasks(res);
                })
                .catch(() => {
                    setLoading(false);
                }),
            'main-area'
        );
    }, []);

    const addTask = (taskObj) => {
        taskService.createTask(taskObj).then(() => {
            setTasks((prev) => [taskObj, ...prev]);
            notifySuccess('Task Added');
        });
    };

    const deleteTask = (id) => {
        taskService.deleteTask(id).then((res) => {
            setTasks((prev) => prev.filter((t) => t.id != id));
            notifyDelete('Task Deleted');
        });
    };

    const value = useMemo(
        () => ({
            tasks,
            addTask,
            deleteTask,
        }),
        [tasks]
    );

    return <TaskContext.Provider value={value} children={children} />;
};

export const useTasks = () => useContext(TaskContext);

export default TaskProvider;
