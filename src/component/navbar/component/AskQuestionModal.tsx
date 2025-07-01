import avatar06 from "@/assets/images/avatar/06.jpg"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button, Col, Form, Modal } from 'react-bootstrap'
import { BiInfoCircle, BiX } from 'react-icons/bi'

type AskQuestionModalProps = {
    show: boolean
    onHide: () => void
}

const AskQuestionModal = ({ show, onHide }: AskQuestionModalProps) => {
    const [type, setType] = useState('PB')
    const [question, setQuestion] = useState('')

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <div className="position-absolute end-0 top-0 mt-n3 me-n3 z-index-9">
                <Button variant="danger" size="sm" className="btn-round mb-0" onClick={onHide}>
                    <span aria-hidden="true"><BiX size={24} /></span>
                </Button>
            </div>
            <Modal.Header className="d-block border-0 pb-0" closeButton={false}>
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="modal-title mb-0">Ask Question</h5>
                    <Col sm={3}>
                        <Form.Select
                            value={type}
                            onChange={e => setType(e.target.value)}
                        >
                            <option value="PB">Public</option>
                            <option value="FR">Friends</option>
                            <option value="OM">Only me</option>
                            <option value="CU">Custom</option>
                        </Form.Select>
                    </Col>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex mb-3">
                    <div className="avatar avatar-xs me-2">
                        <Image className="avatar-img rounded-circle" src={avatar06} alt="" />
                    </div>
                    <Form className="w-100">
                        <Form.Control
                            as="textarea"
                            className="bg-transparent pe-4 fs-4 lh-1 border-0"
                            rows={5}
                            placeholder="Share your question..."
                            autoFocus
                            value={question}
                            onChange={e => setQuestion(e.target.value)}
                        />
                    </Form>
                </div>
            </Modal.Body>
            <Modal.Footer className="gap-2">
                <p className="mb-0">
                    <BiInfoCircle /> Guidelines for Receiving Quality Answers{' '}
                    <Link href="#" className="text-decoration-underline fw-semibold">Know more</Link>
                </p>
                <Button variant="light" className="border ms-auto mb-0" onClick={onHide}>Cancel</Button>
                <Button variant="primary" className="m-0">Ask question</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AskQuestionModal