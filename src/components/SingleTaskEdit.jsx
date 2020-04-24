import React, { useState, useContext } from 'react';
import { ToDoContext } from '../contexts/ToDoContext';

const SingleTaskEdit = ({id, task}) => {
    const {editTask} = useContext(ToDoContext);
    const [currentTask, setCurrentTask] = useState(task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTask(id, currentTask);
    }
    return ( 
        <li className="single-task">
            <form onSubmit={handleSubmit} className="single-task__form">
                <input 
                    type="text" 
                    value={currentTask} 
                    onChange={(e) => setCurrentTask(e.target.value)}
                />
                <button>
                    <i className="fas fa-save"></i>
                </button>
            </form>
        </li>
     );
}
 
export default SingleTaskEdit;