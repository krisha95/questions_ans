"use client"
import Image from 'next/image'
import element20 from "@/assets/images/elements/20.svg"
import React, { useState } from 'react'
import Link from 'next/link'
import { Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa6'
import { BsChatSquareDots } from 'react-icons/bs'
import { BiX } from 'react-icons/bi'
import CustomModal from '@/component/CustomModal'

const RightSide = () => {
    const [showAlert, setShowAlert] = useState(true);
    const [show, setShow] = useState(false);

    return (
        <Col lg={4} xl={3}>
            <Row className="g-4">

                <Col xs={12}>
                    <button onClick={() => setShow(true)} className="btn btn-primary w-100 mb-0" data-bs-toggle="modal" data-bs-target="#modalNewtopic" >
                        <FaPlus className="me-2" />Start a new topic
                    </button>
                    <CustomModal show={show} onHide={() => setShow(false)} />
                </Col>

                <Col xs={12}>
                    <Card className="p-0">

                        <CardHeader className="border-0 border-bottom p-3">
                            <h4 className="card-title mb-0">Statistics</h4>
                        </CardHeader>

                        <CardBody className="py-0 px-3">

                            <Row>
                                <Col xs={6} className="border-end p-3 text-center">
                                    <h4 className="mb-0">58</h4>
                                    <span>Topics</span>
                                </Col>

                                <Col xs={6} className="p-3 text-center">
                                    <h4 className="mb-0">1025</h4>
                                    <span>Posts</span>
                                </Col>

                                <Col xs={6} className="p-3 border-top border-end text-center">
                                    <h4 className="mb-0">290</h4>
                                    <span>Members</span>
                                </Col>
                                <Col xs={6} className="p-3 border-top text-center">
                                    <h4 className="mb-0">15M</h4>
                                    <span>Questions</span>
                                </Col>
                            </Row>
                        </CardBody>

                    </Card>
                </Col>


                <Col md={6} lg={12}>
                    <Col md={6} lg={12}>
                        <Card className="p-3">
                            <div className="card-header border-0 p-2">
                                <h4 className="card-title mb-0">Trending Questions</h4>
                            </div>

                            <CardBody className="p-2">
                                <div className="border-bottom pb-3 mb-3">
                                    <h6 className="mb-2 fw-normal"><Link href="/que-ans/detail-minimal">What is the importance of customer feedback in business?</Link></h6>
                                    <p className="small mb-0"><BsChatSquareDots className="fa-fw me-1" />05 Answers</p>
                                </div>

                                <div className="border-bottom pb-3 mb-3">
                                    <h6 className="mb-2 fw-normal"><Link href="/que-ans/detail-minimal">Explain the concept of object-oriented programming (OOP).</Link></h6>
                                    <p className="small mb-0"><BsChatSquareDots className="fa-fw me-1" />08 Answers</p>
                                </div>

                                <div className="">
                                    <h6 className="mb-2 fw-normal"><Link href="/que-ans/detail-minimal">How does digital marketing impact business growth?</Link></h6>
                                    <p className="small mb-0"><BsChatSquareDots className="fa-fw me-1" />11 Answers</p>
                                </div>
                            </CardBody>

                        </Card>
                    </Col>
                </Col>
                {
                    showAlert &&
                    <Col md={6} lg={12}>
                        <div className="alert-warning p-4 alert alert-dismissible fade show position-relative mb-0 overflow-hidden">

                            <div className="position-absolute end-0 top-0">
                                <button
                                    type="button"
                                    className="btn btn-link p-3"
                                    onClick={() => setShowAlert(false)}
                                    aria-label="Close"
                                >
                                    <BiX size={24} />
                                </button>
                            </div>

                            <h5>Q&amp;A Organize Team</h5>
                            <p className="mb-2">Start collaborating and organizational Knowledge</p>
                            <Link href="#" className="btn btn-warning mb-0 w-100">Create a free team</Link>

                            <Image src={element20} className="mb-n8 text-center" alt="" />
                        </div>
                    </Col>
                }
            </Row >
        </Col >
    )
}

export default RightSide