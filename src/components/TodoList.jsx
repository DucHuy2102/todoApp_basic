import React, { useState } from 'react';
import CreateTask from '../Modals/createTask';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <>
            {/* header */}
            <div className='header text-center'>
                <h3>Todo List</h3>
                <button className='btn btn-primary' onClick={() => setModal(true)}>
                    Create Task
                </button>
            </div>

            {/* content */}
            <div className='task-container'></div>
            <CreateTask modal={modal} toggle={toggle} />
        </>
    );
};

export default TodoList;
