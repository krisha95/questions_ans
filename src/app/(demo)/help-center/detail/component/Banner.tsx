import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Banner = () => {
    return (
        <section className="pt-8">
            <Container>
                <Row>
                    <Col lg={8} className="mx-auto text-center">
                        <h1 className="display-6">How can we help?</h1>
                        <p className="mb-0 mt-4">We are glad to have you here looking for the answer. As our team hardly working on products, feel free to ask anything.</p>

                        <form className="bg-mode rounded p-2 mt-4">
                            <div className="input-group">
                                <input className="form-control border-0 me-1" type="text" placeholder="Search question..." />
                                <button type="button" className="btn btn-dark mb-0 rounded">Search</button>
                            </div>
                        </form>
                        <h6 className="mt-4 mb-3">Popular questions</h6>
                        <div className="list-group list-group-horizontal gap-1 gap-sm-2 flex-wrap mb-0 border-0 justify-content-center">
                            <Link className="btn btn-white btn-sm mb-1" href="/help-detail"> How can we help?</Link>
                            <Link className="btn btn-white btn-sm mb-1" href="/help-detail"> How to upload data to the system? </Link>
                            <Link className="btn btn-white btn-sm mb-1" href="/help-detail"> What's are the difference between a social?</Link>
                            <Link className="btn btn-white btn-sm mb-1" href="/help-detail"> Installation Guide? </Link>
                            <Link className="btn btn-primary-soft btn-sm" href="#!">View all question</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner