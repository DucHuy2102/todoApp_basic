import React, { useState } from 'react';
import EditTask from '../Modals/EditTask';
import CheckTask from '../Modals/DeleteTask';

// taskObj, index
const Card = (props) => {
    const [modal, setModal] = useState(false);
    const [checkDone, setCheckDone] = useState(false);

    // colors
    const colors = [
        {
            primaryColor: '#5D93E1',
            secondaryColor: '#ECF3FC',
        },
        {
            primaryColor: '#F9D288',
            secondaryColor: '#FEFAF1',
        },
        {
            primaryColor: '#5DC250',
            secondaryColor: '#F2FAF1',
        },
        {
            primaryColor: '#F48687',
            secondaryColor: '#FDF1F1',
        },
        {
            primaryColor: '#B964F7',
            secondaryColor: '#F3F0FD',
        },
    ];

    const toggle = () => {
        setModal(!modal);
    };

    const toggleCheckDone = () => {
        setCheckDone(!checkDone);
    };

    // update Task
    const handleUpdate = (obj) => {
        props.updateTaskArr(obj, props.index);
    };

    // delete Task
    const handleDelete = () => {
        props.deleteTask(props.index);
    };

    // open card
    const handleOpenCard = () => {
        setModal(true);
        let task = {};
        task['Name'] = props.taskObj.Name;
        task['Description'] = props.taskObj.Description;
    };

    return (
        <div className='card-wrapper mr-5'>
            <div className='card-top' style={{ backgroundColor: colors[props.index % 5].primaryColor }}></div>
            <div className='task-holder'>
                {/* name task */}
                <div
                    style={{ display: 'flex', justifyContent: 'center', borderBottom: '1px solid #ccc' }}
                    onClick={handleOpenCard}
                >
                    <span className='card-header'>{props.taskObj.Name}</span>
                </div>

                {/* description task */}
                <p className='mt-3'>{props.taskObj.Description}</p>

                {/* button edit & delete */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'end',
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                    }}
                >
                    {/* check done */}
                    <i
                        className='fa-regular fa-square-check'
                        style={{ color: colors[props.index % 5].primaryColor, cursor: 'pointer' }}
                    ></i>

                    {/* edit */}
                    <i
                        className='far fa-edit'
                        style={{ color: colors[props.index % 5].primaryColor, cursor: 'pointer', marginLeft: '10px' }}
                        onClick={() => setModal(true)}
                    ></i>

                    {/* delete */}
                    <i
                        className='fas fa-trash-alt'
                        style={{ color: colors[props.index % 5].primaryColor, cursor: 'pointer', marginLeft: '10px' }}
                        onClick={() => setCheckDone(true)}
                    ></i>
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={handleUpdate} taskObj={props.taskObj} />
            <CheckTask checkDone={checkDone} toggleCheckDone={toggleCheckDone} deleteTask={handleDelete} />
        </div>
    );
};

export default Card;
