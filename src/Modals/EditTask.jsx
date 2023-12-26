import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Form, FormGroup, Input } from 'reactstrap';

const EditTask = (props) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleUpdateTask = (e) => {
        e.preventDefault();
        let tempUpdate = {};
        tempUpdate['Name'] = taskName;
        tempUpdate['Description'] = taskDescription;
        props.updateTask(tempUpdate);
    };

    useEffect(() => {
        setTaskName(props.taskObj.Name);
        setTaskDescription(props.taskObj.Description);
    }, []);

    return (
        <Modal isOpen={props.modal} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>Update your task here</ModalHeader>
            <ModalBody>
                <Form>
                    {/* task name */}
                    <FormGroup>
                        <Label for='taskName'>Task Name</Label>
                        <Input
                            id='taskName'
                            className='form-control'
                            type='text'
                            placeholder='Enter your task name ...'
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                        />
                    </FormGroup>

                    {/* task description */}
                    <FormGroup>
                        <Label for='taskDescription'>Description</Label>
                        <textarea
                            id='taskDescription'
                            className='form-control'
                            rows={5}
                            placeholder='Description your task ...'
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                        />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color='primary' onClick={handleUpdateTask}>
                    Update
                </Button>
                <Button color='secondary' onClick={props.toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditTask;
