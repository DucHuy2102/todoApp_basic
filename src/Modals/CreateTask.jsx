import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Form, FormGroup, Input } from 'reactstrap';

const CreateTask = ({ modal, toggle }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>What is your plan today?</ModalHeader>
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
                <Button color='primary' onClick={toggle}>
                    Create
                </Button>{' '}
                <Button color='secondary' onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTask;
