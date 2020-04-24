import React, { useContext } from 'react';
import SingleTask from './SingleTask';
import SingleTaskEdit from './SingleTaskEdit';
import { ToDoContext } from '../contexts/ToDoContext';

const Tasks = () => {
    const {tasks} = useContext(ToDoContext);

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
}
 
export default Tasks;