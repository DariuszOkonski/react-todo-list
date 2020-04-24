import React, { useState, useContext } from 'react';
import { ToDoContext } from '../contexts/ToDoContext';

const NewTask = () => {
    const {addTask} = useContext(ToDoContext);
    const [currentTask, setCurrentTask] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(currentTask);
        setCurrentTask('');
    }
    return ( 
        <section className="new-task">
            <p className="new-task__paragraph">Add new task to list</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Add New Task..."
                    value={currentTask}
                    onChange={(e) => setCurrentTask(e.target.value)}
                    required
                />
                <button>
                    <i className="fas fa-plus"></i>
                </button>
            </form>
        </section>
     );
}
 
export default NewTask;