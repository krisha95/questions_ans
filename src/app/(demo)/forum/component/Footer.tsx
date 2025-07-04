import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className="bg-mode py-3">
            <Container >
                <Row className="g-2">
                    <Col lg={6}>
                        <ul className="nav lh-1 justify-content-center justify-content-lg-start">
                            <li className="nav-item">
                                <Link className="nav-link" href="/profile">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" target="_blank" href="https://support.webestica.com/login">Support </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" target="_blank" href="docs/index">Docs </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Privacy & Terms</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={6}>
                        <p className="text-center text-lg-end mb-0"><Link className="text-primary-hover" target="_blank" href="https://www.webestica.com/">©{new Date().getFullYear()} Q&A </Link>All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer