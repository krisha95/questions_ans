import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Blogs from './component/Blogs'

const page = () => {
    return (
        <main>
            <section className="pt-8">
                <Container>
                    <Row>
                        <Col md={8} className="mx-auto text-center">
                            <h1 className="mb-0">Latest Blogs</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Blogs />
        </main>

    )
}

export default page