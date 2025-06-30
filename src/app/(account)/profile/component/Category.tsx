import React from 'react'
import category01 from "@/assets/images/elements/category/01.svg"
import category02 from "@/assets/images/elements/category/02.svg"
import caegory06 from "@/assets/images/elements/category/06.svg"
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardBody, Col, Row } from 'react-bootstrap'

const Category = () => {
    return (
        <Card className="p-0">

            <div className="card-header border-bottom">
                <h4 className="card-title mb-0">Categories</h4>
            </div>

            <CardBody>
                <Row className="g-4">
                    <Col md={6}>
                        <div className="d-flex align-items-center position-relative">

                            <div className="avatar">
                                <Image className="avatar-img" src={category01} alt="" />
                            </div>

                            <div className="ms-3">
                                <h6 className="mb-0"> <Link className="stretched-link" href="/profile/post">Maths & Arithmetics</Link></h6>

                                <ul className="nav nav-divider small mb-0 mt-1">
                                    <li className="nav-item">Admin</li>
                                    <li className="nav-item">4K Followers</li>
                                    <li className="nav-item">235 Posts</li>
                                </ul>
                            </div>
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className="d-flex align-items-center position-relative">

                            <div className="avatar">
                                <Image className="avatar-img" src={category02} alt="" />
                            </div>

                            <div className="ms-3">
                                <h6 className="mb-0"> <Link className="stretched-link" href="/profile/post">Business & Finance</Link></h6>

                                <ul className="nav nav-divider small mb-0 mt-1">
                                    <li className="nav-item">Moderator</li>
                                    <li className="nav-item">895 Followers</li>
                                    <li className="nav-item">50 Posts</li>
                                </ul>
                            </div>
                        </div>
                    </Col>



                    <Col md={6}>
                        <div className="d-flex align-items-center position-relative">

                            <div className="avatar">
                                <Image className="avatar-img" src={caegory06} alt="" />
                            </div>

                            <div className="ms-3">
                                <h6 className="mb-0"> <Link className="stretched-link" href="/profile/post">Law & Legal Issue</Link></h6>

                                <ul className="nav nav-divider small mb-0 mt-1">
                                    <li className="nav-item">Admin</li>
                                    <li className="nav-item">10K Followers</li>
                                    <li className="nav-item">168 Posts</li>
                                </ul>
                            </div>
                        </div>
                    </Col>

                </Row>
            </CardBody>

        </Card>
    )
}

export default Category