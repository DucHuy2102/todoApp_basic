import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Form, FormGroup, Input } from 'reactstrap';

const CreateTask = (props) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleSaveTask = () => {
        let task = {};
        task['Name'] = taskName;
        task['Description'] = taskDescription;
        props.save(task);
    };

    return (
        <Modal isOpen={props.modal} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>What is your plan today?</ModalHeader>
            <ModalBody>
                <Form>
                    {/* task name */}
                    <FormGroup>
                        <Label for='taskName'>Task Name</Label>
                        <Input
                            id='taskName'
                            className='form-control'
                            type='text'
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
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                        />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color='primary' onClick={handleSaveTask}>
                    Create
                </Button>
                <Button color='secondary' onClick={props.toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTask;
