import React from 'react';
import { Modal, Button, Form, ModalHeader, ModalTitle, FormSelect, ModalBody, FormLabel, FormControl, ModalFooter, Col } from 'react-bootstrap';
import Image from 'next/image';
import { BiX } from 'react-icons/bi';
import { FaPhotoFilm } from 'react-icons/fa6';
import avatar06 from '@/assets/images/avatar/06.jpg';
import QuillTool from '@/component/QuillTool';

interface PostModalProps {
    show: boolean;
    onHide: () => void;
}

const PostModal = ({ show, onHide }: PostModalProps) => {
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
                    <BiX size={24} />
                </Button>
            </div>

            <ModalHeader className="d-block border-0 pb-0">
                <div className="d-flex justify-content-between align-items-center">
                    <ModalTitle className="mb-0">Create Post</ModalTitle>
                    <Col sm={4}>
                        <FormSelect
                            size="sm"
                            className="js-choice"
                            aria-label="Select post type"
                        >
                            <option value="PB">Public</option>
                            <option value="PV">Friends</option>
                            <option value="OM">Only me</option>
                            <option value="CU">Custom</option>
                        </FormSelect>
                    </Col>
                </div>
            </ModalHeader>

            <ModalBody>
                <Form>
                    <div className="d-flex justify-content-between rounded-top mb-3">
                        <div className="avatar avatar-xs flex-shrink-0">
                            <Image
                                className="avatar-img rounded-circle"
                                src={avatar06}
                                alt="user"
                                width={32}
                                height={32}
                            />
                        </div>
                    </div>

                    <QuillTool className='quilleditor border rounded-bottom rounded-top mt-0 h-150px overflow-hidden' />


                    <div className="justify-content-center align-items-center my-3">
                        <FormLabel>Upload files*</FormLabel>
                        <div className="mt-1">
                            <FormLabel htmlFor="uploadfile-1" title="Replace this pic">
                                <span className="p-3 border rounded fs-1 text-secondary d-inline-block cursor-pointer">
                                    <FaPhotoFilm />
                                </span>
                            </FormLabel>
                            <FormControl id="uploadfile-1" type="file" className="d-none" />
                        </div>
                    </div>
                </Form>
            </ModalBody>

            <ModalFooter className="border-0 pt-0">
                <Button variant="success" className="m-0">
                    Post
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default PostModal;
