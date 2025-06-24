"use client"
import React from 'react'
import element18 from "@/assets/images/elements/18.svg"
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import CountUp from 'react-countup'

const About = () => {
    return (
        <section className="pt-0">
            <Container>
                <Row className="g-4 align-items-center">
                    <Col lg={5} className="me-auto">
                        <Image src={element18} alt="" />
                    </Col>
                    <Col lg={6}>
                        <h3>We'll help your grades soar</h3>
                        <p className="mb-0">Start your 48-hour free trial and unlock all the summaries, Q&A, and analyses you need to get better grades now.</p>
                        <Row className="my-3">
                            <Col sm={6}>
                                <ul className="list-group list-group-borderless">
                                    <li className="list-group-item d-flex fw-normal"><BsFillCheckCircleFill className="text-success" />15,000+ Category</li>
                                    <li className="list-group-item d-flex fw-normal"><BsFillCheckCircleFill className="text-success" />State your question clearly, and Be Specific </li>
                                    <li className="list-group-item d-flex fw-normal"><BsFillCheckCircleFill className="text-success" />375,000+ answered</li>
                                    <li className="list-group-item d-flex fw-normal"><BsFillCheckCircleFill className="text-success" />Ad-free content</li>
                                </ul>
                            </Col>
                            <Col sm={6}>
                                <ul className="list-group list-group-borderless">
                                    <li className="list-group-item d-flex fw-normal"><BsFillCheckCircleFill className="text-success" />30% study tools discount</li>
                                    <li className="list-group-item d-flex fw-normal"><BsFillCheckCircleFill className="text-success" />PDF downloads</li>
                                    <li className="list-group-item d-flex fw-normal"><BsFillCheckCircleFill className="text-success" />5-star customer support</li>
                                </ul>
                            </Col>
                        </Row>


                        <Row className="g-4">
                            <Col sm={4}>
                                <div className="d-flex">
                                    <h4 className="h2 fw-bold mb-0">
                                        <CountUp
                                            start={0}
                                            end={12}
                                            duration={2}
                                            delay={0.3}
                                            suffix="K"
                                        />
                                    </h4>
                                </div>
                                <h6 className="mb-0 fw-normal">Total Followers</h6>
                            </Col>

                            <Col sm={4}>
                                <div className="d-flex">
                                    <h4 className="h2 fw-bold mb-0">
                                        <CountUp
                                            start={0}
                                            end={28000}
                                            duration={2.5}
                                            delay={0.3}
                                            suffix="+"
                                        />
                                    </h4>
                                </div>
                                <h6 className="mb-0 fw-normal">Total Questions</h6>
                            </Col>

                            <Col sm={4}>
                                <div className="d-flex">
                                    <h4 className="h2 fw-bold mb-0">
                                        <CountUp
                                            start={0}
                                            end={26585}
                                            duration={2.5}
                                            delay={0.3}
                                            suffix="+"
                                        />
                                    </h4>
                                </div>
                                <h6 className="mb-0 fw-normal">Total Answers</h6>
                            </Col>
                        </Row>

                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default About