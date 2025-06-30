import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, Dropdown, Form, InputGroup, Button, DropdownToggle, DropdownMenu, DropdownItem, CardBody, FormCheck, FormLabel, FormControl } from 'react-bootstrap';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaXTwitter, FaShareNodes, FaFlag, FaBookmark, FaBan, FaCommentDots, FaCopy, FaChevronUp, FaCaretUp } from 'react-icons/fa6';
import avatar05 from "@/assets/images/avatar/05.jpg";
import avatar09 from "@/assets/images/avatar/09.jpg";
import { BsCaretUpFill, BsFillCaretUpFill } from 'react-icons/bs';

const Post = () => {
    return (
        <Card className="p-0">
            <Dropdown className="position-absolute top-0 end-0 p-3 no-after-icon">
                <DropdownToggle variant="light" size="sm" className="btn-icon mb-0 no-after-icon" id="cardShareAction">
                    <BiDotsHorizontalRounded />
                </DropdownToggle>

                <DropdownMenu align="end" className="min-w-auto">
                    <DropdownItem href="#"><FaBookmark className="me-2" /> Save</DropdownItem>
                    <DropdownItem href="#"><FaBan className="me-2" /> Mute</DropdownItem>
                    <DropdownItem href="#"><FaBan className="me-2" /> Block</DropdownItem>
                    <DropdownItem href="#"><FaFlag className="me-2" /> Report</DropdownItem>
                </DropdownMenu>
            </Dropdown>

            <CardBody className="p-4">
                <div className="d-sm-flex align-items-center mb-3">
                    <div className="avatar flex-shrink-0">
                        <Image className="avatar-img rounded-circle" src={avatar05} alt="avatar" />
                    </div>
                    <div className="ms-0 ms-sm-2">
                        <h6 className="mb-0"><Link href="#">Frances Guerrero</Link></h6>
                        <ul className="nav nav-divider small">
                            <li className="nav-item">Social media Marketing pro</li>
                            <li className="nav-item">28 August</li>
                        </ul>
                    </div>
                </div>

                <h5>Find the highest/lowest value by the data of two different tables in SQL?</h5>
                <p className="mb-0">
                    It drew a hill from me. Valley by oh twenty direct me so... carried manners talking how.
                </p>

                <div className="hstack gap-3 flex-wrap align-items-start mt-3">

                    <div className="border px-2 py-0 rounded-1 d-flex align-items-center gap-1">
                        <input type="radio" className="btn-check" name="vote3" id="btnradioT3" />
                        <label className="btn btn-vote mb-0" htmlFor="btnradioT3">
                            <BsFillCaretUpFill className="fs-5" />
                        </label>
                        <span className="fw-normal">0</span>
                    </div>

                    <Link href="" className="btn btn-sm btn-light mb-0">Comment</Link>

                    <Dropdown className='no-after-icon'>
                        <DropdownToggle variant="light" size="sm" className="mb-0">
                            <FaShareNodes className="me-2" /> Share
                        </DropdownToggle>

                        <DropdownMenu className="shadow px-3 rounded" style={{ minWidth: "260px" }}>
                            <h6 className="mt-2">Share a link to this question</h6>
                            <InputGroup className="mt-2">
                                <FormControl
                                    size="sm"
                                    type="text"
                                    value="https:q&a.com//556dd//gmail"
                                    readOnly
                                />
                                <Button size="sm" variant="primary"><FaCopy /></Button>
                            </InputGroup>
                            <ul className="list-inline mb-2 mt-3">
                                <li className="list-inline-item">
                                    <Link href="#" className="btn btn-xs btn-icon mb-0 bg-facebook text-white"><FaFacebookF /></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link href="#" className="btn btn-xs btn-icon mb-0 bg-whatsapp text-white"><FaWhatsapp /></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link href="#" className="btn btn-xs btn-icon mb-0 bg-twitter text-white"><FaXTwitter /></Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link href="#" className="btn btn-xs btn-icon mb-0 bg-linkedin text-white"><FaLinkedinIn /></Link>
                                </li>
                            </ul>
                        </DropdownMenu>
                    </Dropdown>
                </div>

                <Form className="bg-light d-sm-flex rounded-2 p-3 mt-3">
                    <div className="avatar avatar-sm flex-shrink-0 me-2">
                        <Link href="#"><Image className="avatar-img rounded-circle" src={avatar09} alt="" /></Link>
                    </div>
                    <InputGroup className="align-items-start">
                        <FormControl
                            as="textarea"
                            rows={1}
                            placeholder="Add a comment..."
                            className="me-2 rounded"
                        />
                        <Button variant="primary" className="rounded mb-0">Post</Button>
                    </InputGroup>
                </Form>
            </CardBody>
        </Card>
    );
};

export default Post;
