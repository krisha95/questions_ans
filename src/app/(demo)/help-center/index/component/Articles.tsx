'use client'

import Image from 'next/image'
import {
    FaRegComments,
    FaEye,
    FaSpinner,
    FaThumbsUp,
} from 'react-icons/fa6'

import avatar01 from '@/assets/images/avatar/01.jpg'
import avatar02 from '@/assets/images/avatar/02.jpg'
import avatar03 from '@/assets/images/avatar/03.jpg'
import avatar04 from '@/assets/images/avatar/04.jpg'
import avatar06 from '@/assets/images/avatar/06.jpg'
import avatar07 from '@/assets/images/avatar/07.jpg'
import avatar08 from '@/assets/images/avatar/08.jpg'
import avatar09 from '@/assets/images/avatar/09.jpg'
import avatar10 from '@/assets/images/avatar/10.jpg'
import Link from 'next/link'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Articles = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col xs={12} className="text-center">
                        <h2 className="text-center mb-4">Popular Articles</h2>
                    </Col>
                </Row>
                <Row className="g-4">
                    <Col xl={9} className="mx-auto">
                        <div className="vstack gap-4">
                            <Card className="p-4">
                                <div className="d-md-flex justify-content-between align-items-center">
                                    <div className="mb-3 mb-md-0">
                                        <h4 className="card-title mb-2 mb-sm-1">
                                            <Link href="#">The installation part (10 articles)</Link>
                                        </h4>
                                        <div className="d-flex align-items-start align-items-sm-center">
                                            <ul className="avatar-group mb-0">
                                                {[avatar08, avatar04].map((img, i) => (
                                                    <li key={i} className="avatar avatar-xxs">
                                                        <Image
                                                            className="avatar-img rounded-circle border border-2 border-white"
                                                            src={img}
                                                            alt="avatar"
                                                            width={32}
                                                            height={32}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="ms-2">
                                                <small className="mb-0">
                                                    Written by <b>Carolyn Ortiz</b> and <b>Billy Vasquez</b>.
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hstack gap-4 gap-sm-5 flex-wrap">
                                        <Link href="#" className="text-primary-hover mb-0">
                                            <FaEye className="me-2" />578
                                        </Link>
                                        <Link href="#" className="text-primary-hover mb-0">
                                            <FaRegComments className="me-2" />25
                                        </Link>
                                        <Link href="#" className="text-primary-hover mb-0">
                                            <FaThumbsUp className="me-2" />10
                                        </Link>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-4">
                                <div className="d-md-flex justify-content-between align-items-center">
                                    <div className="mb-3 mb-md-0">
                                        <h4 className="card-title mb-2 mb-sm-1">
                                            <Link href="#">Supporting Customers With Inbox</Link>
                                        </h4>
                                        <div className="d-flex align-items-start align-items-sm-center">
                                            <ul className="avatar-group mb-0">
                                                {[avatar01, avatar02, avatar03].map((img, i) => (
                                                    <li key={i} className="avatar avatar-xxs">
                                                        <Image
                                                            className="avatar-img rounded-circle border border-2 border-white"
                                                            src={img}
                                                            alt="avatar"
                                                            width={32}
                                                            height={32}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="ms-2">
                                                <small className="mb-0">
                                                    Written by <b>Louis Ferguson</b>, <b>Dennis Barrett</b> and <b>Larry Lawson</b>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hstack gap-4 gap-sm-5 flex-wrap">
                                        <Link href="#" className="text-primary-hover mb-0">
                                            <FaEye className="me-2" />254
                                        </Link>
                                        <Link href="#" className="text-primary-hover mb-0">
                                            <FaRegComments className="me-2" />20
                                        </Link>
                                        <Link href="#" className="text-primary-hover mb-0">
                                            <FaThumbsUp className="me-2" />18
                                        </Link>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-4">
                                <div className="d-md-flex justify-content-between align-items-center">
                                    <div className="mb-3 mb-md-0">
                                        <h4 className="card-title mb-2 mb-sm-1">
                                            <Link href="#">Sending Effective Emails</Link>
                                        </h4>
                                        <div className="d-flex align-items-start align-items-sm-center">
                                            <ul className="avatar-group mb-0">
                                                <li className="avatar avatar-xxs">
                                                    <Image
                                                        className="avatar-img rounded-circle border border-2 border-white"
                                                        src={avatar06}
                                                        alt="avatar"
                                                        width={32}
                                                        height={32}
                                                    />
                                                </li>
                                            </ul>
                                            <div className="ms-2">
                                                <small className="mb-0">
                                                    Written by <b>Jacqueline Miller</b>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hstack gap-4 gap-sm-5 flex-wrap">
                                        <Link href="#" className="text-primary-hover mb-0">
                                            <FaEye className="me-2" />789
                                        </Link>
                                        <Link href="#" className="text-primary-hover mb-0">
                                            <FaRegComments className="me-2" />18
                                        </Link>
                                        <Link href="#" className="text-primary-hover mb-0">
                                            <FaThumbsUp className="me-2" />56
                                        </Link>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-4">
                                <div className="d-md-flex justify-content-between align-items-center">
                                    <div className="mb-3 mb-md-0">
                                        <h4 className="card-title mb-2 mb-sm-1">
                                            <Link href="#">Connect With Customers</Link>
                                        </h4>
                                        <div className="d-flex align-items-start align-items-sm-center">
                                            <ul className="avatar-group mb-0">
                                                {[avatar07, avatar08].map((img, i) => (
                                                    <li key={i} className="avatar avatar-xxs">
                                                        <Image
                                                            className="avatar-img rounded-circle border border-2 border-white"
                                                            src={img}
                                                            alt="avatar"
                                                            width={32}
                                                            height={32}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="ms-2">
                                                <small className="mb-0">
                                                    Written by <b>Lori Stevens</b> and <b>Samuel Bishop</b>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hstack gap-4 gap-sm-5 flex-wrap">
                                        <Link href="#" className="text-primary-hover mb-0">
                                            <FaEye className="me-2" />758
                                        </Link>
                                        <Link href="#" className="text-primary-hover mb-0">
                                            <FaRegComments className="me-2" />21
                                        </Link>
                                        <Link href="#" className="text-primary-hover mb-0">
                                            <FaThumbsUp className="me-2" />125
                                        </Link>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-4">
                                <div className="d-md-flex justify-content-between align-items-center">
                                    <div className="mb-3 mb-md-0">
                                        <h4 className="card-title mb-2 mb-sm-1">
                                            <Link href="#">Upgrade Gulp 3 to Gulp 4 the gulpfile.js workflow</Link>
                                        </h4>
                                        <div className="d-flex align-items-start align-items-sm-center">
                                            <ul className="avatar-group mb-0">
                                                {[avatar09, avatar10].map((img, i) => (
                                                    <li key={i} className="avatar avatar-xxs">
                                                        <Image
                                                            className="avatar-img rounded-circle border border-2 border-white"
                                                            src={img}
                                                            alt="avatar"
                                                            width={32}
                                                            height={32}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="ms-2">
                                                <small className="mb-0">
                                                    Written by <b>Lori Stevens</b> and <b>Samuel Bishop</b>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hstack gap-4 gap-sm-5 flex-wrap">
                                        <Link href="#" className="text-primary-hover mb-0">
                                            <FaEye className="me-2" />685
                                        </Link>
                                        <Link href="#" className="text-primary-hover mb-0">
                                            <FaRegComments className="me-2" />12
                                        </Link>
                                        <Link href="#" className="text-primary-hover mb-0">
                                            <FaThumbsUp className="me-2" />245
                                        </Link>
                                    </div>
                                </div>
                            </Card>

                            <div className="text-center">
                                <Link href="#" className="btn btn-primary-soft mb-0">
                                    <FaSpinner className="me-2" />
                                    View all article
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Articles
