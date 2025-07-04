import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import Faqs from './component/Faqs'
import NavBar from '../component/NavBar'
import Footer from '../../forum/component/Footer'

const page = () => {
    return (
        <>
            <NavBar />
            <main>
                <section className="pt-8">
                    <Container>
                        <Row>
                            <Col lg={10} className="mx-auto text-center">
                                <h6 className="text-primary">Faqs</h6>
                                <h1>Frequently Asked Questions</h1>
                                <p>have questions? We're here to help you</p>
                                <form className="col-lg-8 position-relative mx-auto">
                                    <input className="form-control form-control-lg pe-5" type="search" placeholder="Type search words" aria-label="Search" />
                                    <button className="btn btn-link py-0 position-absolute top-50 end-0 translate-middle-y" type="submit"><FaSearch className="fs-6 heading-color" /></button>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Faqs />
            </main>
            <Footer />
        </>
    )
}

export default page