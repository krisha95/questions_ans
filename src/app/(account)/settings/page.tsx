'use client'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaSlidersH } from 'react-icons/fa'
import LeftSide from './account/component/LeftSide'
import Settings from './component/Settings'

const Page = () => {
    const [activeTab, setActiveTab] = useState('account')

    return (
        <main>
            <section className='pt-8'>
                <Container>
                    <div className="d-flex align-items-center mb-4 d-lg-none">
                        <button className="btn btn-primary mb-0 d-xxl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <FaSlidersH className="me-1" /> Show side bar
                        </button>
                    </div>
                    <Row>
                        <LeftSide activeTab={activeTab} setActiveTab={setActiveTab} />
                        <Col lg={8} xl={9}>
                            <Settings activeTab={activeTab} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default Page
