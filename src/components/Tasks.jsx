import React, { useContext } from 'react';
import SingleTask from './SingleTask';
import SingleTaskEdit from './SingleTaskEdit';
import { ToDoContext } from '../contexts/ToDoContext';

const Tasks = () => {
    const {tasks} = useContext(ToDoContext);

    if(tasks.length) {
        return ( 
            <ul>
            {
                tasks.map(task => {
                    if(!task.isEdit) {
                        return <SingleTask key={task.id} {...task} />
                    } else {
                        return <SingleTaskEdit key={task.id} {...task}/>
                    }
                })  
            }
        </ul>
     );
    } else {
        const headerStyle = {
            textAlign: 'center',
            fontSize: '1.2rem',
            letterSpacing: '1px'
        }
        return(
            <h3 style={headerStyle}>Nothing to display</h3>
        )
    }
}
 
export default Tasks;