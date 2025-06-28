"use client"
import avatar03 from "@/assets/images/avatar/03.jpg";
import Image from "next/image";
import { Form, FormControl, FormGroup, FormLabel, Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap';

type PostModalProps = {
    show: boolean;
    onHide: () => void;
    placeholder?: string;
};

const PostModal = ({
    show,
    onHide,
    placeholder = 'Share your thoughts...',
}: PostModalProps) => {
    return (
        <Modal show={show} onHide={onHide} centered>
            <ModalHeader closeButton>
                <ModalTitle>Add post photo</ModalTitle>
            </ModalHeader>

            <ModalBody>
                <div className="d-flex mb-3">
                    <div className="avatar avatar-xs me-2">
                        <Image
                            src={avatar03}
                            alt="avatar"
                            className="avatar-img rounded-circle"
                            width={40}
                            height={40}
                        />
                    </div>
                    <Form className="w-100">
                        <FormControl
                            as="textarea"
                            rows={2}
                            placeholder={placeholder}
                            className="bg-transparent pe-4 fs-4 lh-1 border-0"
                        />
                    </Form>
                </div>

                <FormGroup controlId="formFile">
                    <FormLabel>Upload attachment</FormLabel>
                    <FormControl type="file" />
                </FormGroup>
            </ModalBody>

            <div className="modal-footer ">
                <button type="button" className="btn btn-danger-soft me-2" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary-soft">Post</button>
            </div>
        </Modal>
    );
};

export default PostModal;
