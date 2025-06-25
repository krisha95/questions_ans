import React from 'react'
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'react-bootstrap'
import QuillTool from './QuillTool';

const CustomModal = ({ show, onHide }: { show: boolean; onHide: () => void }) => {
    return (
        <Modal show={show} onHide={onHide} centered>
            <ModalHeader closeButton>
                <h5 className="modal-title" id="modalLabelNewtopic">Create new topic</h5>
            </ModalHeader>

            <ModalBody>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Topic that you discuss</label>
                        <input type="text" className="form-control" placeholder="Write a topic" />
                    </div>

                    <div className="mb-3 position-relative">
                        <label className="form-label">Optional tags</label>
                        <input type="text" className="form-control" placeholder="Enter tags" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label d-block">Category</label>
                        <select className="form-select">
                            <option>All level</option>
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Advance</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <QuillTool className='quilleditor bg-mode border rounded-top rounded-bottom h-150px overflow-hidden' />
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button variant="success">Create now</Button>
            </ModalFooter>
        </Modal>
    )
}

export default CustomModal
