"use client"
import React, { useState } from 'react'
import element20 from "@/assets/images/elements/20.svg"
import Image from 'next/image'
import Link from 'next/link'
import { Col, Row } from 'react-bootstrap'
import { BiX } from 'react-icons/bi'

const RightSide = () => {
    const [showAlert, setShowAlert] = useState(true);

    return (
        <Col lg={4} xl={3}>
            <Row className="g-4">

                <Col md={6} lg={12}>
                    <div className="card p-0">

                        <div className="card-header border-0 border-bottom p-3">
                            <h4 className="card-title mb-0">Forum Statistics</h4>
                        </div>

                        <div className="card-body px-3">
                            <ul className="list-group list-group-borderless">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <span className="fw-bold">Registered Users</span>
                                    <span className="h6 mb-0">30</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <span className="fw-bold">Forums</span>
                                    <span className="h6 mb-0">29</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <span className="fw-bold">Topics</span>
                                    <span className="h6 mb-0">10</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <span className="fw-bold">Replies</span>
                                    <span className="h6 mb-0">31</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <span className="fw-bold">Topics Tags</span>
                                    <span className="h6 mb-0">25</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </Col>
                {showAlert && (
                    <Col md={6} lg={12}>
                        <div className="alert-warning p-4 alert alert-dismissible fade show position-relative mb-0 overflow-hidden">

                            <div className="position-absolute end-0 top-0">
                                <button onClick={() => setShowAlert(false)} type="button" className="btn btn-link p-3" data-bs-dismiss="alert" aria-label="Close"><BiX size={24} /></button>
                            </div>
                            <h5>Q&A Organize Team</h5>
                            <p className="mb-2">Start collaborating and organizational Knowledge</p>
                            <Link href="#" className="btn btn-warning mb-0 w-100">Create a free team</Link>
                            <Image src={element20} className="mb-n8 text-center" alt="" />
                        </div>
                    </Col>
                )}
            </Row>
        </Col>
    )
}

export default RightSide