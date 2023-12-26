import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeleteTask = (props) => {
    const handleDelete = () => {
        props.deleteTask(props.index);
    };

    return (
        <Modal isOpen={props.checkDone} toggleModal={props.toggleCheckDone}>
            <ModalHeader toggleModal={props.toggleCheckDone}>Confirm delete</ModalHeader>
            <ModalBody>
                <p>Are you sure want to delete this task?</p>
            </ModalBody>
            <ModalFooter>
                <Button onClick={handleDelete} color='warning'>
                    Yes
                </Button>
                <Button onClick={props.toggleCheckDone} variant='secondary'>
                    No
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default DeleteTask;
