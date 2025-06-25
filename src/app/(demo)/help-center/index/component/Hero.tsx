import React from 'react'
import element from "@/assets/images/elements/help.svg"
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className="bg-mode pt-8">
            <Container>
                <Row className="g-4 justify-content-between align-items-center">
                    <Col lg={7} xxl={6}>
                        <h1 className="display-6">How can we help?</h1>
                        <p className="mb-0 mt-4">We are glad to have you here looking for the answer. As our team hardly working on products, feel free to ask anything.</p>

                        <form className="border rounded p-2 mt-4">
                            <div className="input-group">
                                <input className="form-control border-0 me-1" type="text" placeholder="Search question..." />
                                <button type="button" className="btn btn-dark mb-0 rounded">Search</button>
                            </div>
                        </form>
                        <h6 className="mt-4 mb-3">Popular questions</h6>
                        <div className="list-group list-group-horizontal gap-1 gap-sm-2 flex-wrap mb-0 border-0 ">
                            <Link className="btn btn-light btn-sm mb-1" href="/help-detail"> How can we help?</Link>
                            <Link className="btn btn-light btn-sm mb-1" href="/help-detail"> How to upload data to the system? </Link>
                            <Link className="btn btn-light btn-sm mb-1" href="/help-detail"> Installation Guide? </Link>
                            <Link className="btn btn-light btn-sm mb-1" href="/help-detail"> What's are the difference between a social?</Link>
                            <Link className="btn btn-primary-soft btn-sm" href="#!">View all questions</Link>
                        </div>
                    </Col>
                    <div className="col-lg-5 text-center">
                        <Image src={element} alt="" />
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Hero