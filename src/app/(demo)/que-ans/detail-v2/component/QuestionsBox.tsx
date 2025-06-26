"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Col, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'react-bootstrap';
import { BiDotsVerticalRounded, BiRightArrowAlt } from 'react-icons/bi';
import {
    BsFillCaretUpFill,
    BsFillCheckCircleFill,
    BsFillExclamationOctagonFill,
} from 'react-icons/bs';
import { FaCopy } from 'react-icons/fa6';
import avatar2 from '@/assets/images/avatar/02.jpg';

const QuestionsBox = () => {
    return (
        <div className="card overflow-hidden p-0">
            <div className="position-absolute end-0 top-0 m-3">
                <Dropdown align="end">
                    <DropdownToggle
                        variant="light"
                        size="sm"
                        className="btn-round mb-0 flex-shrink-0 popup-after"
                        id="dropdown-custom"
                    >
                        <BiDotsVerticalRounded />
                    </DropdownToggle>

                    <DropdownMenu className="dropdown-w-sm min-w-auto shadow rounded">
                        <DropdownItem as={Link} href="#">
                            <BsFillExclamationOctagonFill className="me-2" />
                            Report
                        </DropdownItem>
                        <DropdownItem as={Link} href="#">
                            <FaCopy className="me-2" />
                            Copy link
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>

            <Row className="p-4 p-md-0">
                <Col md={2}>
                    <div className="d-flex justify-content-md-center align-items-start h-100">
                        <div className="border rounded text-center w-60px p-1 m-md-3 m-lg-4 mb-0 mx-lg-auto">
                            <input type="radio" className="btn-check" name="vote3" id="btnradioT3" />
                            <label className="btn btn-vote mb-0 p-0" htmlFor="btnradioT3">
                                <BsFillCaretUpFill className="fs-5" />
                            </label>
                            <h6 className="mb-0 px-2 vote-count">03</h6>
                        </div>
                        <div className="vr d-none d-md-block"></div>
                    </div>
                </Col>

                <Col md={10}>
                    <div className="card-body ps-0 pe-0 pe-md-5 py-md-4">
                        <h1 className="card-title mb-3 h3">
                            Bootstrap Button with 'nav-link' and 'btn-outline' Classes Not Displaying Borders?
                        </h1>
                        <p className="mb-3">
                            Passage its ten led hearted removal cordial. Preference any astonished unreserved
                            Mrs. Prosperous understood Middletons in conviction an uncommonly do. Supposing so be
                            resolving breakfast am or perfectly. Is drew am hill from me. Valley by oh twenty
                            direct me so.
                        </p>
                        <ul className="nav nav-divider align-items-center mb-0">
                            <li className="nav-item fw-normal d-flex align-items-center">
                                <div className="avatar avatar-xs me-1">
                                    <Image className="avatar-img rounded-circle" src={avatar2} alt="avatar" />
                                </div>
                                <Link href="#" className="text-primary-hover mb-0">
                                    Samuel Bishop
                                </Link>
                            </li>
                            <li className="nav-item fw-normal">Asked: 6 days ago</li>
                        </ul>
                    </div>
                </Col>
            </Row>

            <div className="bg-success bg-opacity-25 p-3 p-sm-4">
                <div className="d-md-flex align-items-center">
                    <div className="bg-white text-dark fw-normal rounded-pill d-inline-block px-3 py-1 mb-2 mb-sm-0">
                        <BsFillCheckCircleFill className="text-success fa-fw me-1" />
                        Answered by{' '}
                        <a href="#" className="text-primary-hover text-dark">
                            Lori Stevens
                        </a>
                    </div>
                    <p className="ms-3 heading-color mb-2 mb-sm-0">4 days ago</p>
                    <Link
                        className="icon-link icon-link-hover btn btn-sm btn-success lh-0 mb-0 ms-auto"
                        href="#marked-answer"
                    >
                        View full answer <BiRightArrowAlt className="bi bi-arrow-right" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default QuestionsBox;
