import React from 'react';

const SingleTask = () => {
    return (  
        <li className="single-task">
            <p className="single-task__paragraph">Go fetch some milk</p>

            <div>
                <button>
                    <i class="fas fa-pen-fancy"></i>
                </button>
                <button>
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </li>
    );
}
 
export default SingleTask;