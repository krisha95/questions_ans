import React, { useState } from 'react'
import { Modal, Button, Form, ModalHeader, ModalTitle, ModalBody, ModalFooter } from 'react-bootstrap'

interface CategoryModalProps {
    show: boolean;
    handleClose: () => void;
}

const CategoryModal = ({ show, handleClose }: CategoryModalProps) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <ModalHeader closeButton className="align-items-start">
                <div>
                    <ModalTitle>Create Category</ModalTitle>
                    <p className="mb-0">Share your interests, content, creativity and many more.</p>
                </div>
            </ModalHeader>

            <ModalBody>
                <Form className="text-start">
                    <Form.Group className="mb-3" controlId="categoryName">
                        <Form.Label className="h6">Category name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group className="mt-3" controlId="briefDescription">
                        <Form.Label className="h6">Brief description</Form.Label>
                        <Form.Control as="textarea" rows={4} spellCheck="false" />
                        <Form.Text muted>
                            Include a few keywords to show people what to expect if they join.
                        </Form.Text>
                    </Form.Group>
                </Form>
            </ModalBody>

            <ModalFooter>
                <Button variant="primary" size="sm" onClick={handleClose}>
                    Create
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default CategoryModal
