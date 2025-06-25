import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"

const Hero = () => {
    return (
        <section className="bg-dark pt-8" data-bs-theme="dark">
            <Container className="position-relative">
                <Row className="align-items-center">
                    <Col lg={9}>
                        <nav className="mb-4" aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-dark mb-1">
                                <li className="breadcrumb-item"><Link href="/forum/index-forum">Home</Link></li>
                                <li className="breadcrumb-item"><Link href="/forum/forum-category">Category</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">forum detail</li>
                            </ol>
                        </nav>
                        <h1 className="mb-3 h2">What are the advantages of using a content management system (CMS) for website development?</h1>
                        <ul className="nav nav-divider align-items-center py-2 small">
                            <li className="nav-item heading-color"><Link href="#" className="text-primary-hover">Billy Vasquez</Link></li>
                            <li className="nav-item heading-color"> Created: 3 Nov 2024</li>
                            <li className="nav-item heading-color"> <Link href="#" className="text-primary-hover">03  replies</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Hero