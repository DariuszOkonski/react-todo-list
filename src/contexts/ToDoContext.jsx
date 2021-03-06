import React, { createContext, useState } from 'react';
import {v4 as uuidv4} from 'uuid';

export const ToDoContext = createContext();

const ToDoContextProvider = (props) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        setTasks([...tasks, {id: uuidv4(), task: newTask, isEdit: false}]);
    }

    const editTask = (id, newTask) => {
        setTasks(tasks.map(task => (task.id === id) ? {id: id, task: newTask, isEdit: false} :  task ));
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const toggleIsEdit = (id) => {
        setTasks(tasks.map(task => (task.id === id) ? {...task, isEdit: true} : task));
    }

    return (  
        <ToDoContext.Provider value={{tasks, addTask, editTask, toggleIsEdit, removeTask}}>
            {props.children}
        </ToDoContext.Provider>
    );
}
 
export default ToDoContextProvider;