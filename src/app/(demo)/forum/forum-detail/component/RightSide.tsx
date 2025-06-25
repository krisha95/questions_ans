"use client"
import React, { useState } from 'react'
import avtar8 from "@/assets/images/avatar/08.jpg"
import element20 from "@/assets/images/elements/20.svg"
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import { BiCalendar, BiTrophy, BiX } from 'react-icons/bi'
import { FaFacebookF, FaLinkedinIn, FaPlus, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'
import { BsChatSquareDots, BsFileEarmarkPost, BsFillPersonPlusFill } from 'react-icons/bs'
import Link from 'next/link'
import CustomModal from '@/component/CustomModal'

const RightSide = () => {
    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(true);


    return (
        <Col lg={4} xl={3}>
            <Row className="g-4">

                <Col md={6} lg={12}>
                    <button onClick={() => setShow(true)} className="btn btn-primary w-100 mb-0" data-bs-toggle="modal"
                        data-bs-target="#modalNewtopic">
                        <FaPlus className="me-2" />Start a new topic
                    </button>
                    <CustomModal show={show} onHide={() => setShow(false)} />

                </Col>

                <Col md={6} lg={12}>
                    <div className="card card-body">

                        <div className="d-flex align-items-center">

                            <div className="avatar flex-shrink-0">
                                <Image className="avatar-img rounded-circle" src={avtar8} alt="" />
                            </div>

                            <div className="ms-3">
                                <h6 className="mb-1">Billy Vasquez</h6>
                                <span>Founder of Webpix</span>
                            </div>
                        </div>

                        <ul className="list-unstyled mt-3 mb-2">
                            <li className="mb-2"> <BiCalendar className="pe-1" /> Join: <strong> Oct
                                2024</strong> </li>
                            <li className="mb-2"> <BiTrophy className="pe-1" /> Points: <strong> 1025
                            </strong> </li>
                            <li className="mb-2"> <BsFileEarmarkPost className="fa-fw pe-1" /> Total
                                posts: <strong> 26 </strong> </li>
                        </ul>


                        <Link href="#" className="btn btn-success-soft mb-0">
                            <BsFillPersonPlusFill className="me-2" />Follow</Link>
                    </div>
                </Col>

                <Col md={6} lg={12}>
                    <div className="card p-0">

                        <div className="card-header border-0 border-bottom p-3">
                            <h5 className="card-title mb-0">Share this discussion</h5>
                        </div>


                        <div className="card-body py-3">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item"> <Link className="btn btn-icon mb-0 bg-facebook"
                                    href="#"><FaFacebookF /></Link> </li>
                                <li className="list-inline-item"> <Link className="btn btn-icon mb-0 bg-whatsapp"
                                    href="#"><FaWhatsapp /></Link> </li>
                                <li className="list-inline-item"> <Link className="btn btn-icon mb-0 bg-twitter"
                                    href="#"><FaXTwitter /></Link> </li>
                                <li className="list-inline-item"> <Link className="btn btn-icon mb-0 bg-linkedin"
                                    href="#"><FaLinkedinIn /></Link> </li>
                            </ul>
                        </div>

                    </div>
                </Col>


                <Col md={6} lg={12}>
                    <div className="card p-3">

                        <div className="card-header border-0 p-2">
                            <h5 className="card-title mb-0">Trending Questions</h5>
                        </div>

                        <div className="card-body p-2">

                            <div className="border-bottom pb-3 mb-3">
                                <h6 className="mb-2 fw-normal"><Link href="answer-detail-minimal.html">What is the
                                    importance of customer feedback in business?</Link></h6>
                                <p className="small mb-0"><BsChatSquareDots className="me-1" />05
                                    Answers</p>
                            </div>


                            <div className="border-bottom pb-3 mb-3">
                                <h6 className="mb-2 fw-normal"><a href="answer-detail-minimal.html">Explain the
                                    concept of object-oriented programming (OOP).</a></h6>
                                <p className="small mb-0"><BsChatSquareDots className="me-1" />08
                                    Answers</p>
                            </div>


                            <div className="">
                                <h6 className="mb-2 fw-normal"><a href="answer-detail-minimal.html">How does
                                    digital marketing impact business growth?</a></h6>
                                <p className="small mb-0"><BsChatSquareDots className="me-1" />11
                                    Answers</p>
                            </div>
                        </div>

                    </div>
                </Col>

                {showAlert && (
                    <Col md={6} lg={12}>
                        <div
                            className="alert-warning p-4 alert alert-dismissible fade show position-relative mb-0 overflow-hidden">

                            <div className="position-absolute end-0 top-0">
                                <button onClick={() => setShowAlert(false)} type="button" className="btn btn-link p-3" data-bs-dismiss="alert"
                                    aria-label="Close"><BiX size={24} /></button>
                            </div>


                            <h5>Q&A Organize Team</h5>
                            <p className="mb-2">Start collaborating and organizational Knowledge</p>
                            <a href="#" className="btn btn-warning mb-0 w-100">Create a free team</a>

                            <Image src={element20} className="mb-n8 text-center" alt="" />
                        </div>
                    </Col>
                )}
            </Row>
        </Col>
    )
}

export default RightSide