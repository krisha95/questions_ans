import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
    return (
        <section className="bg-dark pt-8" data-bs-theme="dark">
            <Container className="position-relative">
                <Row className="align-items-center">
                    <Col lg={6}>
                        <h1 className="mb-3 display-6">Meet Your Modern Discussion Board</h1>
                        <p className="mb-3">With a sleek and intuitive interface, it empowers users to share ideas, ask questions, and exchange information seamlessly.</p>
                        <Link href="/contact-us" className="btn btn-warning mb-0">Get Started</Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero