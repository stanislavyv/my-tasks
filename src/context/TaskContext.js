import React, { useState, useEffect, useMemo, useContext } from 'react';
import * as taskService from '../services/taskService';

const TaskContext = React.createContext({});
TaskContext.displayName = 'TaskContext';

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        taskService.getAllTasks().then((res) => setTasks(res));
    }, []);

    const addTask = (taskObj) => {
        taskService.createTask(taskObj).then(() => {
            setTasks((prev) => [taskObj, ...prev]);
        });
    };

    const deleteTask = (id) => {
        taskService.deleteTask(id).then((res) => {
            setTasks((prev) => prev.filter((t) => t.id != id));
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
