import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Actions = () => {
    return (
        <section className="pt-0 pt-lg-5">
            <Container>
                <div className="bg-mode p-4 p-sm-5 rounded-2">
                    <Row className="align-items-center">
                        <Col lg={9}>
                            <h3>What do you need to know?</h3>
                            <p className="mb-3 mb-lg-0">Whether you're stuck on a history question or blocked by a geometry puzzle, there's no question too tricky for Brainy.</p>
                        </Col>
                        <Col lg={3} className="text-lg-end">
                            <Link href="/ask-question" className="btn btn-dark mb-0">Ask a Question</Link>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Actions