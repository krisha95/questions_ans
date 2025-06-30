import React from 'react';
import { Modal, Button, Form, ModalHeader, ModalTitle, FormSelect, ModalBody, FormControl, ModalFooter } from 'react-bootstrap';
import Image from 'next/image';
import { BiX } from 'react-icons/bi';
import avatar06 from '@/assets/images/avatar/06.jpg';

interface QuestionModalProps {
    show: boolean;
    onHide: () => void;
}

const QuestionModal = ({ show, onHide }: QuestionModalProps) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            backdrop="static"
            keyboard={false}
        >
            <div className="position-absolute end-0 top-0 mt-n3 me-n3 z-index-9">
                <Button
                    variant="danger"
                    size="sm"
                    className="btn-round mb-0"
                    onClick={onHide}
                >
                    <BiX  size={24}/>
                </Button>
            </div>

            <ModalHeader className="d-block border-0 pb-0">
                <div className="d-flex justify-content-between align-items-center">
                    <ModalTitle className="mb-0">Ask Question</ModalTitle>
                    <div className="col-sm-4">
                        <FormSelect
                            size="sm"
                            className="js-choice"
                            aria-label="Select type"
                        >
                            <option value="PB">Public</option>
                            <option value="PV">Friends</option>
                            <option value="OM">Only me</option>
                            <option value="CU">Custom</option>
                        </FormSelect>
                    </div>
                </div>
            </ModalHeader>

            <ModalBody>
                <div className="d-flex mb-3">
                    <div className="avatar avatar-xs me-2 flex-shrink-0">
                        <Image
                            className="avatar-img rounded-circle"
                            src={avatar06}
                            alt="user"
                            width={32}
                            height={32}
                        />
                    </div>
                    <Form className="w-100">
                        <FormControl
                            as="textarea"
                            rows={4}
                            placeholder="Share your question..."
                            className="bg-transparent pe-4 fs-4 lh-1 border-0"
                            autoFocus
                        />
                    </Form>
                </div>
            </ModalBody>

            <ModalFooter className="border-0 pt-0">
                <Button variant="success" className="m-0">
                    Post
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default QuestionModal;
