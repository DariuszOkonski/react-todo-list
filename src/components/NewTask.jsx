import React from 'react';

const NewTask = () => {
    return ( 
        <section className="new-task">
            <p className="new-task__paragraph">Add new task to list</p>
            <form>
                <input type="text" placeholder="Add New Task..."/>
                <button>
                    <i className="fas fa-plus"></i>
                </button>
            </form>
        </section>
     );
}
 
export default NewTask;