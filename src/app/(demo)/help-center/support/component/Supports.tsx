import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsHeadset } from 'react-icons/bs'
import { FaRegEnvelope } from 'react-icons/fa6'

const Supports = () => {
    return (
        <section className="pt-0">
            <Container>
                <Row className="g-4">
                    <Col xl={8} className="mx-auto">

                        <div className="card p-0">

                            <div className="card-header p-4 border-bottom">
                                <div className="hstack gap-2 flex-wrap align-items-center">
                                    <h6 className="mb-0"><Link href="#"><BsHeadset className="me-1" />Call us on: +222 555 789</Link></h6>
                                    <h6 className="mb-0 ms-sm-auto"><Link href="#"><FaRegEnvelope className="me-1" />Email us at: example@gmail.com</Link></h6>
                                </div>
                            </div>


                            <div className="card-body p-4">
                                <form className="form-group">

                                    <div className="mb-3">
                                        <label className="form-label form-label-dark">Your Name</label>
                                        <input className="form-control" type="text" placeholder="Enter your name" />
                                    </div>


                                    <div className="mb-3">
                                        <label className="form-label form-label-dark">Phone Number</label>
                                        <input className="form-control" type="text" placeholder="Enter phone number" />
                                    </div>


                                    <div className="mb-3">
                                        <label className="form-label form-label-dark">Company</label>
                                        <input className="form-control" type="text" placeholder="Enter company name" />
                                    </div>


                                    <div className="mb-3">
                                        <label className="form-label form-label-dark">Email address</label>
                                        <input className="form-control" type="email" placeholder="Enter email address" />
                                    </div>


                                    <div className="mb-3">
                                        <label className="form-label form-label-dark">Subject</label>

                                        <select className="form-select js-choice" data-placeholder-val="Select subject" data-search-enabled="false">
                                            <option value="MR">Marketing</option>
                                            <option value="DV">Development</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label form-label-dark">Description</label>
                                        <textarea className="form-control" id="textareaBox" rows={3} spellCheck={false} placeholder="Write down here"></textarea>
                                    </div>
                                    <button className="btn btn-primary mb-0">Submit</button>
                                </form>
                            </div>

                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Supports