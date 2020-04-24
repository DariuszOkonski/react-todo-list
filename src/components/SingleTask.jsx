import React, { useContext } from 'react';
import { ToDoContext } from '../contexts/ToDoContext';

const SingleTask = ({id, task}) => {
    const {toggleIsEdit, removeTask} = useContext(ToDoContext)

    return (  
        <li className="single-task">
            <p className="single-task__paragraph">{task}</p>

            <div>
                <button onClick={() => toggleIsEdit(id)}>
                    <i className="fas fa-pen-fancy"></i>
                </button>
                <button onClick={() => removeTask(id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </li>
    );
}
 
export default SingleTask;