"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Col, Collapse, Row } from "react-bootstrap";
import {
    BiBookBookmark,
    BiBookmark,
    BiDotsHorizontal,
    BiFlag,
    BiXCircle
} from "react-icons/bi";
import { BsFillCaretUpFill, BsSlashCircle } from "react-icons/bs";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaReply,
    FaShareNodes,
    FaWhatsapp,
    FaXTwitter,
} from "react-icons/fa6";

import avatar1 from "@/assets/images/avatar/01.jpg";
import avatar2 from "@/assets/images/avatar/02.jpg";
import avatar3 from "@/assets/images/avatar/03.jpg";
import avatar4 from "@/assets/images/avatar/04.jpg";
import avatar5 from "@/assets/images/avatar/05.jpg";
import avatar6 from "@/assets/images/avatar/06.jpg";
import avatar7 from "@/assets/images/avatar/07.jpg";
import avatar8 from "@/assets/images/avatar/08.jpg";
import avatar9 from "@/assets/images/avatar/09.jpg";
import avatar10 from "@/assets/images/avatar/10.jpg";
import avatar11 from "@/assets/images/avatar/11.jpg";
import DropdownAction from "@/component/DropdownAction";

const PollCard = () => {
    const [collapseShow, setCollapseShow] = useState(false);

    const menuItems = [
        { label: "Save post", icon: <BiBookmark /> },
        { label: "Hide post", icon: <BiXCircle /> },
        { label: "Block", icon: <BsSlashCircle /> },
        { divider: true },
        { label: "Report post", icon: <BiFlag /> },
    ];

    return (
        <div className="card p-0 overflow-hidden">
            <DropdownAction
                items={menuItems}
                toggleIcon={<BiDotsHorizontal />}
                wrapperClass="dropdown flex-shrink-0 position-absolute end-0 top-0 p-3"
                toggleButtonClass="btn btn-sm btn-round btn-light mb-0"
                menuClass="dropdown-menu dropdown-menu-end"
            />

            {/* Header */}
            <div className="card-header border-0 p-4">
                <div className="d-flex align-items-center">
                    <div className="avatar flex-shrink-0">
                        <Image className="avatar-img rounded-circle" src={avatar3} alt="avatar" />
                    </div>
                    <div className="ms-2">
                        <h6 className="mb-0">Samuel Bishop</h6>
                        <ul className="nav nav-divider small">
                            <li className="nav-item">Digital Marketing Ninja</li>
                            <li className="nav-item">24 August</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="card-body p-4 pt-0">
                <h5>How do you protect your business against cyber-crime?</h5>

                <div className="vstack gap-2 mt-3">
                    {["We have cybersecurity insurance coverage", "Our dedicated staff will protect us", "We give regular training for best practices", "Third-party vendor protection"].map((text, i) => (
                        <div key={i}>
                            <input type="radio" className="btn-check" name="poll" id={`option${i}`} />
                            <label className="btn btn-outline-success w-100" htmlFor={`option${i}`}>{text}</label>
                        </div>
                    ))}
                </div>

                <div className="hstack gap-3 flex-wrap align-items-start mt-3">
                    <div className="border px-2 py-0 rounded-1 d-flex align-items-center gap-1">
                        <input type="radio" className="btn-check" name="vote10" id="btnradioT10" />
                        <label className="btn btn-vote mb-0" htmlFor="btnradioT10">
                            <BsFillCaretUpFill className="fs-5" />
                        </label>
                        <span className="fw-normal">3</span>
                    </div>

                    <button className="btn btn-sm btn-light mb-0">Comment (1)</button>

                    <div className="dropdown">
                        <button
                            className="btn btn-sm btn-light mb-0"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <FaShareNodes className="me-2" />Share
                        </button>
                        <div className="dropdown-menu shadow px-3 rounded">
                            <h6>Share a link to this question</h6>
                            <div className="input-group mt-2">
                                <input className="form-control form-control-sm" type="text" value="https:q&amp;a.com//556dd//gmail" readOnly />
                                <button className="btn btn-sm btn-primary mb-0">Copy</button>
                            </div>
                            <ul className="list-inline mb-0 mt-2">
                                <li className="list-inline-item"><Link className="btn btn-xs btn-icon bg-facebook" href="#"><FaFacebookF /></Link></li>
                                <li className="list-inline-item"><Link className="btn btn-xs btn-icon bg-whatsapp" href="#"><FaWhatsapp /></Link></li>
                                <li className="list-inline-item"><Link className="btn btn-xs btn-icon bg-twitter" href="#"><FaXTwitter /></Link></li>
                                <li className="list-inline-item"><Link className="btn btn-xs btn-icon bg-linkedin" href="#"><FaLinkedinIn /></Link></li>
                            </ul>
                        </div>
                    </div>

                    <button
                        onClick={() => setCollapseShow(!collapseShow)}
                        className="btn btn-outline-primary btn-sm mb-0 ms-auto"
                    >
                        Show Result
                    </button>
                </div>

                {/* Collapse Poll Results */}
                <Collapse in={collapseShow}>
                    <div className="card card-body bg-light bg-opacity-50 mt-4">
                        <div className="d-sm-flex justify-content-sm-between align-items-center">
                            <small>16/20 responded</small>
                            <small>Results not visible to participants</small>
                        </div>
                        <div className="vstack gap-4 gap-sm-3 mt-3">
                            {[25, 15, 10, 55].map((percent, i) => (
                                <Row key={i} className="g-2 align-items-center">
                                    <Col sm={7} md={8}>
                                        <div className="overflow-hidden">
                                            <span>{`Option - 0${i + 1}`}</span>
                                            <div className="progress progress-xl bg-secondary bg-opacity-10">
                                                <div className="progress-bar bg-secondary" style={{ width: `${percent}%` }}>
                                                    <span>{percent}%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={5} md={4}>
                                        <ul className="avatar-group mb-0 justify-content-sm-end">
                                            {[avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avatar10, avatar11].slice(0, i + 2).map((avatar, idx) => (
                                                <li key={idx} className="avatar avatar-xxs">
                                                    <Image className="avatar-img rounded-circle border border-2 border-white" src={avatar} alt="avatar" />
                                                </li>
                                            ))}
                                        </ul>
                                    </Col>
                                </Row>
                            ))}
                        </div>
                    </div>
                </Collapse>

                {/* Comment Section */}
                <ul className="comment-wrap list-unstyled mt-4 mb-0">
                    <li className="comment-item">
                        <div className="d-flex mb-4">
                            <div className="avatar avatar-sm flex-shrink-0">
                                <Image className="avatar-img rounded-circle" src={avatar5} alt="avatar" />
                            </div>
                            <div className="ms-2">
                                <h6 className="mb-0">Frances Guerrero</h6>
                                <div className="hstack gap-4 flex-wrap">
                                    <small>8 hour ago</small>
                                    <Link href="#" className="btn btn-sm btn-link p-0"> <FaReply className="me-1" />Reply</Link>
                                </div>
                                <p className="mt-2">What are you trying to get?</p>
                            </div>
                        </div>
                        <ul className="list-unstyled ms-4">
                            <li className="comment-item">
                                <div className="d-flex">
                                    <div className="avatar avatar-sm flex-shrink-0">
                                        <Image className="avatar-img rounded-circle" src={avatar4} alt="avatar" />
                                    </div>
                                    <div className="ms-2">
                                        <h6 className="mb-0">Dennis Barrett</h6>
                                        <div className="hstack gap-4 flex-wrap">
                                            <small>10 hour ago</small>
                                            <Link href="#" className="btn btn-sm btn-link p-0"> <FaReply className="me-1" />Reply</Link>
                                        </div>
                                        <p className="mt-2">Use the whenever gem to manage crontab on deploys.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <Link href="#" className="btn btn-sm btn-link p-0 mt-3">Load more replies...</Link>
                    </li>
                </ul>

                {/* Comment Form */}
                <form className="bg-light d-sm-flex rounded-2 p-3 mt-3">
                    <div className="avatar avatar-sm flex-shrink-0 me-2">
                        <Image className="avatar-img rounded-circle" src={avatar9} alt="avatar" />
                    </div>
                    <div className="input-group align-items-start">
                        <textarea className="form-control me-2 rounded" rows={1} placeholder="Add a comment..."></textarea>
                        <button type="button" className="btn btn-primary mb-0 rounded">Post</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PollCard;
