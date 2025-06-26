import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import helpContact from "@/assets/images/elements/help-contact.svg"
import helpTicket from "@/assets/images/elements/help-ticket.svg"
import Image from 'next/image'
import Link from 'next/link'

const Action = () => {
    return (
        <section className="pt-0">
            <Container>
                <Row className="g-4">
                    <Col lg={6}>
                        <div className="bg-mode p-0 rounded position-relative overflow-hidden h-100">
                            <Row>
                                <Col xs={10} sm={8}>
                                    <div className="card card-body bg-transparent z-index-9 p-4 p-sm-5">
                                        <h3>Contact Support?</h3>
                                        <p>Not finding the help you need?</p>

                                        <div><Link href="#" className="btn btn-dark mb-0">Contact Us</Link></div>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <Image className="h-100px h-sm-200px position-absolute bottom-0 end-0" src={helpContact} alt="" />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="bg-mode p-0 rounded position-relative overflow-hidden h-100">
                            <Row>
                                <Col xs={10} sm={8}>
                                    <div className="card card-body bg-transparent z-index-9 p-4 p-sm-5">

                                        <h3>Submit a Ticket</h3>
                                        <p>Prosperous impression had conviction For every delay</p>

                                        <div><Link href="#" className="btn btn-dark mb-0">Submit Ticket</Link></div>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <Image className="h-100px h-sm-200px position-absolute bottom-0 end-0" src={helpTicket} alt="" />
                                </Col>
                            </Row>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Action