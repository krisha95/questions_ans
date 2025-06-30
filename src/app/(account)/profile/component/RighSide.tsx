import React from 'react'
import { Card, CardBody, CardHeader, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import gold from "@/assets/images/elements/gold.svg"
import silver from "@/assets/images/elements/silver.svg"
import bronz from "@/assets/images/elements/bronz.svg"
import avatar01 from "@/assets/images/avatar/01.jpg"
import avatar02 from "@/assets/images/avatar/02.jpg"
import avatar05 from "@/assets/images/avatar/05.jpg"
import avatar07 from "@/assets/images/avatar/07.jpg"
import Image from 'next/image'
import Link from 'next/link'
import { BsFillPersonCheckFill, BsFillPersonPlusFill, BsMortarboard, BsPinMap } from 'react-icons/bs'
import { FaCreativeCommons } from 'react-icons/fa6'

const RighSide = () => {


    return (
        <Col xl={4}>
            <Row className="g-4">

                <Col lg={6} xl={12}>
                    <Card className="p-0">

                        <CardHeader className="border-bottom p-3">
                            <h4 className="card-title mb-0">About</h4>
                        </CardHeader>


                        <CardBody className="card-body p-3">
                            <p className="mb-0">Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Departure defective arranging rapturous did believe him all had supported. </p>


                            <div className="hstack gap-2 gap-xl-3 mt-3 flex-wrap">
                                <OverlayTrigger placement="top"
                                    overlay={<Tooltip>Gold badge</Tooltip>}>

                                    <Link href="#">
                                        <Image src={gold} className="h-30px" alt="" />
                                    </Link>
                                </OverlayTrigger>
                                <div className="vr"></div>
                                <OverlayTrigger placement="top"
                                    overlay={<Tooltip>Silver badge</Tooltip>}>
                                    <Link href="#">
                                        <Image src={silver} className="h-30px" alt="" />
                                    </Link>
                                </OverlayTrigger>

                                <div className="vr"></div>

                                <OverlayTrigger placement="top"
                                    overlay={<Tooltip>Bronze badge</Tooltip>}>
                                    <Link href="#">
                                        <Image src={bronz} className="h-30px" alt="" />
                                    </Link>
                                </OverlayTrigger>
                            </div>

                            <ul className="list-group list-group-borderless mb-0 mt-3">
                                <li className="list-group-item d-flex heading-color fw-semibold mb-0"><BsMortarboard className="me-2" />Ph.D. from Massachusetts Institute of Technology (Graduated 1992)</li>
                                <li className="list-group-item d-flex heading-color fw-semibold mb-0"><BsPinMap className="me-2" />Lives in California, USA</li>
                                <li className="list-group-item d-flex heading-color fw-semibold mb-0"><FaCreativeCommons className="me-2" />Active in 5 Categories</li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>



                <Col lg={6} xl={12}>
                    <Card className="p-0">

                        <CardHeader className="border-bottom p-3">
                            <h4 className="card-title mb-0">People you may know</h4>
                        </CardHeader>

                        <CardBody className="p-3">


                            <div className="d-sm-flex justify-content-between align-items-center">

                                <div className="hstack gap-2 mb-2 mb-sm-0">

                                    <div className="avatar">
                                        <Image className="avatar-img rounded-circle" src={avatar01} alt="avatar" />
                                    </div>

                                    <div>
                                        <h6 className="mb-0"><Link href="#">Frances Guerrero</Link></h6>

                                        <ul className="nav nav-achievement-divider small">
                                            <li className="nav-item dote-gold">5</li>
                                            <li className="nav-item dote-silver">15</li>
                                            <li className="nav-item dote-bronze">351</li>
                                        </ul>
                                    </div>
                                </div>
                                <button className="btn btn-sm btn-success-soft mb-0"><BsFillPersonPlusFill className="me-2" />Follow</button>
                            </div>
                            <hr />


                            <div className="d-sm-flex justify-content-between align-items-center">

                                <div className="hstack gap-2 mb-2 mb-sm-0">

                                    <div className="avatar">
                                        <Image className="avatar-img rounded-circle" src={avatar02} alt="avatar" />
                                    </div>

                                    <div>
                                        <h6 className="mb-0"><Link href="#">Larry Lawson</Link></h6>

                                        <ul className="nav nav-achievement-divider small">
                                            <li className="nav-item dote-silver">50</li>
                                            <li className="nav-item dote-bronze">128</li>
                                        </ul>
                                    </div>
                                </div>
                                <button className="btn btn-sm btn-success-soft mb-0"><BsFillPersonPlusFill className="me-2" />Follow</button>
                            </div>
                            <hr />

                            <div className="d-sm-flex justify-content-between align-items-center">

                                <div className="hstack gap-2 mb-2 mb-sm-0">

                                    <div className="avatar">
                                        <Image className="avatar-img rounded-circle" src={avatar05} alt="avatar" />
                                    </div>

                                    <div>
                                        <h6 className="mb-0"><Link href="#">Jacqueline Miller</Link></h6>

                                        <ul className="nav nav-achievement-divider small">
                                            <li className="nav-item dote-gold">17</li>
                                            <li className="nav-item dote-silver">125</li>
                                            <li className="nav-item dote-bronze">658</li>
                                        </ul>
                                    </div>
                                </div>


                                <button className="btn btn-sm btn-success mb-0"><BsFillPersonCheckFill className="me-2" />Followed</button>
                            </div>


                            <hr />


                            <div className="d-sm-flex justify-content-between align-items-center">

                                <div className="hstack gap-2 mb-2 mb-sm-0">

                                    <div className="avatar">
                                        <Image className="avatar-img rounded-circle" src={avatar07} alt="avatar" />
                                    </div>

                                    <div>
                                        <h6 className="mb-0"><Link href="#">Bryan Knight</Link></h6>

                                        <ul className="nav nav-achievement-divider small">
                                            <li className="nav-item dote-gold">88</li>
                                            <li className="nav-item dote-silver">458</li>
                                            <li className="nav-item dote-bronze">1258</li>
                                        </ul>
                                    </div>
                                </div>
                                <button className="btn btn-sm btn-success-soft mb-0"><BsFillPersonPlusFill className="me-2" />Follow</button>
                            </div>
                        </CardBody>

                        <div className="card-footer border-top p-3 text-center">
                            <Link href="#" className="btn btn-link p-0 mb-0">View All</Link>
                        </div>

                    </Card>
                </Col>

            </Row>
        </Col>
    )
}

export default RighSide