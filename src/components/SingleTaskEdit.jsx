import React from 'react';

const SingleTaskEdit = () => {
    return ( 
        <li className="single-task">
            <form className="single-task__form">
                <input 
                    type="text" 
                    value="walk a dog" 
                    onChange={() => console.log('onChange')}
                />
                <button>
                    <i className="fas fa-save"></i>
                </button>
            </form>
        </li>
     );
}
 
export default SingleTaskEdit;