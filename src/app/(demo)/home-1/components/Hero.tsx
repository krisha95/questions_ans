import Image1 from '@/assets/images/elements/01.svg'
import Image2 from '@/assets/images/elements/02.svg'
import Image from 'next/image'
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap'
import { BiSearch } from 'react-icons/bi'
import { FaGraduationCap, FaHandPointer } from 'react-icons/fa6'

const Hero = () => {
    return (
        <section className="pt-8">
            <Container className="position-relative">
                <Row className="align-items-end align-items-lg-end">

                    <Col xs={6} lg={3} className="text-center order-1">
                        <Image src={Image1} alt="Element 01" />
                    </Col>

                    <Col lg={6} className="px-xl-5 text-center order-lg-2 mb-5 mb-lg-0">
                        <h1 className="mb-4">Stuck with Question? Get the Answer</h1>

                        <Form className="mb-3 mb-sm-4">
                            <InputGroup className="input-borderless">
                                <FormControl
                                    size="lg"
                                    type="search"
                                    placeholder="Find your answer"
                                    className="form-control"
                                />
                                 <Button type="button" variant="dark" className="mb-0 px-4">
                                    <BiSearch />
                                </Button>
                            </InputGroup>
                        </Form>

                        <Row className="g-3 g-sm-4 justify-content-center">
                            <Col xs={6} xxl={5}>
                                <div className="bg-mode px-2 px-sm-3 py-2 rounded d-flex justify-content-between align-items-center">
                                    <h6 className="mb-0 fw-light">
                                        <FaHandPointer className="fa-regular  d-none d-sm-inline" /> Subscribers
                                    </h6>
                                    <span className="badge text-bg-dark">3854</span>
                                </div>
                            </Col>

                            <Col xs={6} xxl={5}>
                                <div className="bg-mode px-2 px-sm-3 py-2 rounded d-flex justify-content-between align-items-center">
                                    <h6 className="mb-0 fw-light">
                                        <FaGraduationCap className="d-none d-sm-inline me-1" /> Experts
                                    </h6>
                                    <span className="badge text-bg-dark">245</span>
                                </div>
                            </Col>

                            <Col xs={12} className="d-grid d-sm-none mt-3 mt-sm-0">
                                <Button variant="primary" className="mb-0" data-bs-toggle="modal" data-bs-target="#modalLabelQuestion">
                                    Ask Question
                                </Button>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={6} lg={3} className="text-center order-3">
                        <Image src={Image2} alt="Element 02" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero