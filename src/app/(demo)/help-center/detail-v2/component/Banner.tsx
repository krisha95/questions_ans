import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaSlidersH } from 'react-icons/fa'

const Banner = () => {
    return (
        <section className="pt-8">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <h1 className="h2">Getting Started</h1>
                    </Col>
                    <Col sm={6} className="text-sm-end">
                        <div className="d-grid d-sm-block">
                            <button className="btn btn-primary mb-0 d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                <FaSlidersH className="me-2" />Explore topics
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner