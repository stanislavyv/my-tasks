import React, {
    useState,
    useEffect,
    useMemo,
    useContext,
    useRef,
    useReducer,
} from 'react';
import useToastify from '../hooks/useToastify';

import { trackPromise } from 'react-promise-tracker';
import * as taskService from '../services/taskService';

const TaskContext = React.createContext({});
TaskContext.displayName = 'TaskContext';

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'SET_TASKS':
            return {
                tasks: payload,
                toRemove: [],
            };

        case 'CLEAN_REMOVED':
            return {
                tasks: state.tasks,
                toRemove: [],
            };

        case 'ADD_TASK':
            return {
                tasks: [payload, ...state.tasks],
                toRemove: state.toRemove,
            };

        case 'REMOVE_TASK':
            return {
                tasks: state.tasks.filter((t) => t.id !== payload.id),
                toRemove: [...state.toRemove, payload],
            };

        case 'UNDO': {
            const newToRemove = state.toRemove;
            const task = newToRemove.pop();

            const newTasks = [...state.tasks];
            newTasks.splice(task.index, 0, task);

            return {
                tasks: newTasks,
                toRemove: newToRemove,
            };
        }

        default:
            return state;
    }
};

const TaskProvider = ({ children }) => {
    const [{ tasks, toRemove }, dispatch] = useReducer(reducer, {
        tasks: [],
        toRemove: [],
    });

    const isDeleting = useRef(false);

    const { notifySuccess, notifyDelete } = useToastify();

    useEffect(() => {
        trackPromise(
            taskService.getAllTasks().then((res) => {
                dispatch({ type: 'SET_TASKS', payload: res });
            }),
            'main-area'
        );

        return () => {
            toRemove.forEach((t) => {
                taskService.deleteTask(t.id);
            });
            dispatch({ type: 'CLEAN_REMOVED' });
        };
    }, []);

    const addTask = (taskObj) => {
        taskService.createTask(taskObj).then((id) => {
            const newTask = { id, ...taskObj };

            dispatch({ type: 'ADD_TASK', payload: newTask });
            notifySuccess('Task Added');
        });
    };

    const deleteTask = (inputTask) => {
        isDeleting.current = true;

        const isAlreadyDeleted = toRemove.some((t) => t?.id === inputTask.id);

        if (!isAlreadyDeleted) {
            dispatch({ type: 'REMOVE_TASK', payload: inputTask });
        }

        notifyDelete('Task Deleted', undo, () =>
            deletePermanently(inputTask.id)
        );
    };

    const deletePermanently = (id) => {
        if (isDeleting.current) {
            taskService.deleteTask(id);
        }
    };

    const undo = (inputTask) => {
        isDeleting.current = false;

        dispatch({ type: 'UNDO', payload: inputTask });
    };

    const value = useMemo(
        () => ({
            tasks,
            addTask,
            deleteTask,
            undo,
        }),
        [tasks, toRemove]
    );

    return <TaskContext.Provider value={value} children={children} />;
};

export const useTasks = () => useContext(TaskContext);

export default TaskProvider;
