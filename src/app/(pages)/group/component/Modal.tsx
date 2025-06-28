import React from 'react';
import { Modal, Button, Form, ModalHeader, ModalTitle, ModalBody, FormGroup, FormLabel, FormControl, FormCheck, ModalFooter, } from 'react-bootstrap';

type CreateGroupModalProps = {
    show: boolean;
    onHide: () => void;
};

const CreateGroupModal = ({ show, onHide }: CreateGroupModalProps) => {
    return (
        <Modal show={show} onHide={onHide} centered>
            <ModalHeader closeButton>
                <ModalTitle id="modalLabelCreateGroup">Create Group</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup className="mb-3">
                        <FormLabel>Group name</FormLabel>
                        <FormControl type="text" placeholder="Add Group name here" />
                    </FormGroup>
                    <FormGroup className="mb-3 position-relative">
                        <FormLabel>Group picture</FormLabel>
                        <FormControl type="file" name="my-image" id="image" accept="image/gif, image/jpeg, image/png" />
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <FormLabel className="d-block">Select audience</FormLabel>
                        <FormCheck
                            inline
                            label="Public"
                            name="PublicRadioOptions"
                            type="radio"
                            id="publicRadio1"
                        />
                        <Form.Check
                            inline
                            label="Private"
                            name="PublicRadioOptions"
                            type="radio"
                            id="privateRadio2"
                        />
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <FormLabel>Group description</FormLabel>
                        <FormControl as="textarea" rows={3} placeholder="Description here" />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button variant="success" onClick={onHide}>
                    Create now
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateGroupModal;