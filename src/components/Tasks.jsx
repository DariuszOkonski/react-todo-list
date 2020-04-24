import React from 'react';
import SingleTask from './SingleTask';
import SingleTaskEdit from './SingleTaskEdit';

const Tasks = () => {
    return ( 
        <ul>
            <SingleTask/>
            <SingleTask/>
            <SingleTask/>
            <SingleTask/>
            <SingleTaskEdit/>
        </ul>
     );
}
 
export default Tasks;