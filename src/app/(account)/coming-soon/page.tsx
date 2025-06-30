import React from 'react'
import CommingSoon from "@/assets/images/elements/coming-soon.svg"
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

const page = () => {
    return (
        <main>
            <section>
                <Container>
                    <Row className="align-items-center justify-content-center">
                        <Col lg={8} className="text-center mx-auto">

                            <Image src={CommingSoon} alt="" />

                            <h1 className="mt-4">The site is currently down for maintenance!</h1>
                            <p>Hey, you! Q&A is coming. We are doing our best to launch our website and we will be back soon.</p>

                            <form className="mt-4">

                                <h6>Notify me when the website is launched</h6>
                                <Col md={6} className="bg-mode rounded-2 p-2 mx-auto">

                                    <div className="input-group">
                                        <input className="form-control border-0 me-1" type="email" placeholder="Enter your email" />
                                        <button type="button" className="btn btn-primary mb-0 rounded-2">Notify Me!</button>
                                    </div>
                                </Col>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default page