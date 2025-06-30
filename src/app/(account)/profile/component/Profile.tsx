import Link from 'next/link'
import React from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap'
import { BiCalendarCheck, BiCalendarPlus, BiEnvelope, BiGlobe } from 'react-icons/bi'
import { BsEye, BsMortarboard, BsPencilSquare, BsPinMap, BsTelephone } from 'react-icons/bs'
import { FaCreativeCommons, FaMedal } from 'react-icons/fa6'

const Profile = () => {
    return (
        <Card className="p-0">
            <CardHeader className="border-bottom">

                <div className="d-flex justify-content-between align-items-center">
                    <h4 className="card-title mb-0">Overview</h4>
                    <Link href="#" className="btn btn-sm btn-light mb-0"><BsPencilSquare className="me-2" />Edit</Link>
                </div>
            </CardHeader>

            <CardBody>
                <p className="mb-0">Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how.</p>
                <p className="mb-0 mt-2">Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing</p>

                <h5 className="mt-4 mb-3">Basic Information</h5>

                <Row className="g-4">
                    <Col sm={6} md={4}>
                        <h6 className="mb-1"><BiCalendarPlus className="me-2" />Age</h6>
                        <p className="mb-0">25 years</p>
                    </Col>
                    <Col sm={6} md={4}>
                        <h6 className="mb-1"><FaMedal className="me-2" />Experience</h6>
                        <p className="mb-0">5 years</p>
                    </Col>
                    <Col sm={6} md={4}>
                        <h6 className="mb-1"><BsTelephone className="me-2" />Phone</h6>
                        <p className="mb-0">+1 (546) 458 896</p>
                    </Col>
                    <Col sm={6} md={4}>
                        <h6 className="mb-1"><BsPinMap className="me-2" />Location</h6>
                        <p className="mb-0">2492 Centennial NW, Acworth, GA, 30102</p>
                    </Col>
                    <Col sm={6} md={4}>
                        <h6 className="mb-1"><BiEnvelope className="me-2" />Email</h6>
                        <p className="mb-0">example@gmail.com</p>
                    </Col>
                    <Col sm={6} md={4}>
                        <h6 className="mb-1"><BiGlobe className="me-2" />Visit Site</h6>
                        <p className="mb-0">www.q&a.com</p>
                    </Col>
                </Row>

                <h5 className="mt-4">Highlights</h5>
                <Row>
                    <Col xl={12}>
                        <ul className="list-group list-group-borderless mb-3">
                            <li className="list-group-item fw-semibold heading-color mb-0 d-flex"><BsMortarboard className="me-2" />Ph.D. from Massachusetts Institute of Technology (Graduated 1992)</li>
                            <li className="list-group-item fw-semibold heading-color mb-0 d-flex"><BsPinMap className="me-2" />Lives in California, USA</li>
                            <li className="list-group-item fw-semibold heading-color mb-0 d-flex"><BsEye className="me-2" />31.8M content views (648.5K this month)</li>
                            <li className="list-group-item fw-semibold heading-color mb-0 d-flex"><FaCreativeCommons className="me-2" />Active in 5 Categories</li>
                            <li className="list-group-item fw-semibold heading-color mb-0 d-flex"><BiCalendarCheck className="me-2" />Joined January 2014</li>
                        </ul>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default Profile