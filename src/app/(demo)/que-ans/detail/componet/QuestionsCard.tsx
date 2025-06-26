import Link from 'next/link';
import React from 'react';
import { Card, Badge, Stack, Row, Col, CardBody } from 'react-bootstrap';
import { BsBookmark, BsCaretUpFill, BsCaretDownFill, BsFire } from 'react-icons/bs';
import { FaFacebookF, FaWhatsapp, FaXTwitter, FaLinkedinIn, FaCircleExclamation } from 'react-icons/fa6';
import avatar1 from "@/assets/images/avatar/01.jpg"
import avatar2 from "@/assets/images/avatar/02.jpg"
import avatar3 from "@/assets/images/avatar/03.jpg"
import avatar4 from "@/assets/images/avatar/04.jpg"
import avatar9 from "@/assets/images/avatar/09.jpg"
import Image from 'next/image';

const tags = ["Python", "Biopython", "JAVA"];
const avatars = [
    avatar1, avatar2, avatar3, avatar4
];

const QuestionsCard = () => {
    return (
        <Card className="p-0">
            <div className="position-absolute top-0 end-0 p-2">
                <Link href="#" className="btn btn-sm btn-round btn-light mb-0 flex-shrink-0">
                    <BsBookmark />
                </Link>
            </div>
            <Stack direction="horizontal" gap={0} className="align-items-start">
                <div className="user-vote w-50px w-sm-80px">
                    <div className="p-3 p-sm-4">
                        <div className="btn-group vstack align-items-center" role="group">
                            <input type="radio" className="btn-check" name="vote1" id="btnradioT1" />
                            <label className="btn btn-vote mb-0" htmlFor="btnradioT1">
                                <BsCaretUpFill className="fs-5" />
                            </label>
                            <h6 className="mb-0 px-2 vote-count">145</h6>
                            <input type="radio" className="btn-check" name="vote1" id="btnradioT2" />
                            <label className="btn btn-vote mb-0" htmlFor="btnradioT2">
                                <BsCaretDownFill className="fs-5" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="vr"></div>
                <CardBody className="p-3">
                    <Stack direction="horizontal" gap={2} className="flex-wrap mb-3 mb-sm-2">
                        <Badge bg="info" text="info" className="bg-opacity-10">Programmer</Badge>
                        <Badge bg="danger" text="danger" className="bg-opacity-10">
                            <BsFire className="me-2" />Popular question
                        </Badge>
                    </Stack>
                    <h3 className="card-title mb-2">
                        What is version control, and why is it important in software development?
                    </h3>
                    <small>Asked: 05 Nov 2024</small>
                    <Stack direction="horizontal" gap={2} className="mt-2">
                        {tags.map(tag => (
                            <Link key={tag} href="#" className="badge bg-light text-body">{tag}</Link>
                        ))}
                    </Stack>
                    <Row className="d-md-flex justify-content-md-between mt-4">
                        <Col className="d-flex align-items-center">
                            <div className="avatar">
                                <Image className="avatar-img rounded-circle" src={avatar9} alt="avatar" width={40} height={40} />
                            </div>
                            <div className="ms-2">
                                <h6 className="mb-0"><a href="my-profile.html">Lori Stevens</a></h6>
                                <ul className="nav nav-achievement-divider small">
                                    <li className="nav-item dote-gold">5</li>
                                    <li className="nav-item dote-silver">15</li>
                                    <li className="nav-item dote-bronze">351</li>
                                </ul>
                            </div>
                        </Col>
                        <Col className="hstack flex-wrap gap-2 mt-3 mt-md-0" md="auto">
                            <ul className="avatar-group mb-0">
                                {avatars.map((avatar, idx) => (
                                    <li className="avatar avatar-xs" key={idx}>
                                        <Image className="avatar-img rounded-circle border border-2 border-white" src={avatar} alt="avatar" width={32} height={32} />
                                    </li>
                                ))}
                            </ul>
                            <ul className="nav nav-divider-slash small heading-color align-items-center">
                                <li className="nav-item"><a href="answer-detail.html" className="p-0 mb-0 text-primary-hover">08 Answer</a></li>
                                <li className="nav-item">25 Views</li>
                            </ul>
                        </Col>
                    </Row>
                    <hr />
                    <div className="d-sm-flex justify-content-sm-between align-items-center">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item"><h6>Share on:</h6></li>
                            <li className="list-inline-item">
                                <Link className="btn btn-icon btn-xs mb-0 bg-facebook" href="#"><FaFacebookF /></Link>
                            </li>
                            <li className="list-inline-item">
                                <Link className="btn btn-icon btn-xs mb-0 bg-whatsapp" href="#"><FaWhatsapp /></Link>
                            </li>
                            <li className="list-inline-item">
                                <Link className="btn btn-icon btn-xs mb-0 bg-twitter" href="#"><FaXTwitter /></Link>
                            </li>
                            <li className="list-inline-item">
                                <Link className="btn btn-icon btn-xs mb-0 bg-linkedin" href="#"><FaLinkedinIn /></Link>
                            </li>
                        </ul>
                        <Link href="#" className="text-primary-hover small">
                            <FaCircleExclamation className="me-1" />Report
                        </Link>
                    </div>
                </CardBody>
            </Stack>
        </Card>
    );
};

export default QuestionsCard;