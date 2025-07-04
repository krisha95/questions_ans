import React from 'react'
import Supports from './component/Supports'
import NavBar from '../component/NavBar'
import Footer from '../../que-ans/index/components/Footer'
import { Col, Container, Row } from 'react-bootstrap'

const page = () => {
    return (
        <>
            <NavBar />
            <main>
                <section className="pt-8">
                    <Container>
                        <Row>
                            <Col lg={10} className="mx-auto text-center">
                                <h6 className="text-primary">Supports</h6>
                                <h1>Submit a Request</h1>
                                <p className="mb-0">Can’t find the answer you’re looking for? Don't worry! Get in touch with the Docs Support team, we will be glad to assist you.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Supports />
            </main>
            <Footer />
        </>
    )
}

export default page