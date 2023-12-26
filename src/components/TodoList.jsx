import React, { useEffect, useState } from 'react';
import CreateTask from '../Modals/CreateTask';
import Card from './Card';
import DeleteTask from '../Modals/DeleteTask';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);
    const [checkDone, setCheckDone] = useState(false);

    useEffect(() => {
        let arrTaskList = localStorage.getItem('taskList');
        if (arrTaskList) {
            let obj = JSON.parse(arrTaskList);
            setTaskList(obj);
        }
    }, []);

    const toggle = () => setModal(!modal);
    const toggleCheckDone = () => {
        setCheckDone(!checkDone);
    };

    // save
    const saveTask = (newTask) => {
        //let tmp = taskList;
        taskList.push(newTask);
        localStorage.setItem('taskList', JSON.stringify(taskList));
        setModal(false);
        setTaskList(taskList);
    };

    // delete
    const deleteTask = (index) => {
        taskList.splice(index, 1);
        localStorage.setItem('taskList', JSON.stringify(taskList));
        setTaskList(taskList);
        window.location.reload();
    };

    // update
    const updateTaskArr = (obj, index) => {
        taskList[index] = obj;
        localStorage.setItem('taskList', JSON.stringify(taskList));
        setTaskList(taskList);
        window.location.reload();
    };

    return (
        <>
            {/* header */}
            <div className='header text-center'>
                <h3>Todo List</h3>
                <button className='btnCreateTask' onClick={() => setModal(true)}>
                    Create Task
                </button>
            </div>

            {/* content */}
            <div className='task-container'>
                {taskList.map((obj, index) => (
                    <Card
                        key={index}
                        taskObj={obj}
                        index={index}
                        deleteTask={deleteTask}
                        updateTaskArr={updateTaskArr}
                    />
                ))}
            </div>
            <CreateTask modal={modal} toggle={toggle} save={saveTask} />
            <DeleteTask checkDone={checkDone} toggleCheckDone={toggleCheckDone} deleteTask={deleteTask} />
        </>
    );
};

export default TodoList;

// bấm nút String -> đổi state String từ A -> B
// console.log giá trị
