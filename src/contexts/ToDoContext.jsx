import React, { createContext, useState } from 'react';
import {v4 as uuidv4} from 'uuid';

export const ToDoContext = createContext();

const ToDoContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        {id: 1, task: "Go for a walk", isEdit: false},
        {id: 2, task: "Buy some milk", isEdit: false},
        {id: 3, task: "Go for schopping", isEdit: false}
    ]);

    const addTask = (newTask) => {
        setTasks([...tasks, {id: uuidv4(), task: newTask, isEdit: false}]);
    }

    return (  
        <ToDoContext.Provider value={{tasks, addTask}}>
            {props.children}
        </ToDoContext.Provider>
    );
}
 
export default ToDoContextProvider;