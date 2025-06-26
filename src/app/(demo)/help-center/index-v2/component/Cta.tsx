import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { BiRightArrowAlt } from 'react-icons/bi'
import { BsHeadset, BsTicketPerforated } from 'react-icons/bs'

const Cta = () => {
    return (
        <Row className="row-cols-1 row-cols-lg-2 g-4 mt-6">
            <Col>
                <Card className="card-body border border-primary border-opacity-50 p-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex">

                            <h2 className="mb-0 text-primary"><BsHeadset /></h2>

                            <div className="mx-3">
                                <h5 className="mb-1">Contact Support</h5>
                                <p className="mb-0">Not finding the help you need?</p>
                            </div>
                        </div>

                        <Link className="icon-link icon-link-hover text-body stretched-link" href="#"><BiRightArrowAlt className="fs-5" /> </Link>
                    </div>
                </Card>
            </Col>

            <Col>
                <Card className="card-body border border-primary border-opacity-50 p-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex">

                            <h2 className="mb-0 text-primary"><BsTicketPerforated /></h2>

                            <div className="mx-3">
                                <h5 className="mb-1">Submit a Ticket</h5>
                                <p className="mb-0">Prosperous impression had delay</p>
                            </div>
                        </div>
                        <Link className="icon-link icon-link-hover text-body stretched-link" href="#"><BiRightArrowAlt className="fs-5" /> </Link>
                    </div>
                </Card>
            </Col>
        </Row >
    )
}

export default Cta