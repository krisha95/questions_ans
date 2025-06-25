import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Banner = () => {
    return (
        <section className="pt-8 pb-4">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <h1 className="h2">Discussion</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner