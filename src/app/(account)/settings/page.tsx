import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaSlidersH } from 'react-icons/fa'
import LeftSide from './account/component/LeftSide'

const page = () => {
    return (
        <main>
            <section className='pt-8'>
                <Container>
                    <div className="d-flex align-items-center mb-4 d-lg-none">
                        <button className="btn btn-primary mb-0 d-xxl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <FaSlidersH className="fas  me-1" />Show side bar
                        </button>
                    </div>
                    <Row>
                        <LeftSide />
                        <Col lg={8} xl={9}>
                                
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>

    )
}

export default page