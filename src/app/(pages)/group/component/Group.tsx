"use client"
import React, { useState } from "react";
import banner08 from "@/assets/images/post/4by3/08.jpg";
import banner05 from "@/assets/images/post/4by3/05.jpg";
import banner06 from "@/assets/images/post/4by3/06.jpg";
import banner07 from "@/assets/images/post/4by3/07.jpg";

import logo03 from "@/assets/images/elements/logo/03.svg";
import logo05 from "@/assets/images/elements/logo/05.svg";
import logo06 from "@/assets/images/elements/logo/06.svg";
import logo02 from "@/assets/images/elements/logo/02.svg";
import logo01 from "@/assets/images/elements/logo/01.svg";
import logo4 from "@/assets/images/elements/logo/04.svg";

import { FaPlus } from "react-icons/fa6";
import { BiGlobe, BiLock } from "react-icons/bi";
import { BsFillPersonCheckFill, BsFillPersonPlusFill } from "react-icons/bs";
import { Card, Col, Row } from "react-bootstrap";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import CreateGroupModal from "./Modal";

type GroupItem = {
    id: number;
    name: string;
    type: "Public" | "Private";
    isPublic: boolean;
    logo?: StaticImageData | string;
    initials?: string;
    banner: { src: StaticImageData | string };
    members: string;
    posts: string;
    joined: boolean;
};

const groupData: GroupItem[] = [
    {
        id: 1,
        name: "Eternal triangle",
        type: "Private",
        isPublic: false,
        logo: logo03,
        banner: banner08,
        members: "15k",
        posts: "20",
        joined: false,
    },
    {
        id: 2,
        name: "Creative Group",
        type: "Private",
        isPublic: false,
        initials: "CG",
        banner: banner05,
        members: "32k",
        posts: "20",
        joined: false,
    },
    {
        id: 3,
        name: "Beauty queens",
        type: "Public",
        isPublic: true,
        logo: logo05,
        banner: banner06,
        members: "82k",
        posts: "125",
        joined: true,
    },
    {
        id: 4,
        name: "Hard workers",
        type: "Private",
        isPublic: false,
        initials: "HW",
        banner: banner07,
        members: "84k",
        posts: "32",
        joined: false,
    },
    {
        id: 5,
        name: "Mountain movers",
        type: "Public",
        isPublic: true,
        logo: logo06,
        banner: banner08,
        members: "1M",
        posts: "125",
        joined: true,
    },
    {
        id: 6,
        name: "Team yes, we can",
        type: "Public",
        isPublic: true,
        logo: logo02,
        banner: banner05,
        members: "5M",
        posts: "98",
        joined: true,
    },
];

const suggestedGroups: GroupItem[] = [
    {
        id: 101,
        name: "Beauty queens",
        type: "Public",
        isPublic: true,
        logo: logo01,
        banner: banner05,
        members: "12M",
        posts: "25K",
        joined: false,
    },
    {
        id: 102,
        name: "Eternal triangle",
        type: "Private",
        isPublic: false,
        logo: logo4,
        banner: banner08,
        members: "12M",
        posts: "25K",
        joined: true,
    },
];

const Group = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <Col xl={8} xxl={7}>
            <div className="bg-mode p-4 rounded mb-4">
                <Row className="g-2 align-items-center">
                    <Col lg={2}>
                        <h1 className="h3 mb-lg-0">Group</h1>
                    </Col>
                    <Col sm={4} className="ms-lg-auto">
                        <select className="form-select">
                            <option value="AB">Alphabetical</option>
                            <option value="NG">Newest group</option>
                            <option value="RA">Recently active</option>
                            <option value="SG">Suggested</option>
                        </select>
                    </Col>
                    <Col sm={4} lg={4}>
                        <button
                            className="btn btn-primary-soft ms-auto w-100 mb-0"
                            data-bs-toggle="modal"
                            data-bs-target="#modalCreateGroup"
                            onClick={() => setShowModal(!showModal)}
                        >
                            <FaPlus className="pe-1" /> Create group
                        </button>
                    </Col>
                </Row>
            </div>

            <Card className="card-body p-4">
                <Row className="g-4">
                    {groupData.map((group) => (
                        <Col sm={6} key={group.id}>
                            <div className="card border">
                                <div
                                    className="h-80px rounded-top"
                                    style={{
                                        backgroundImage: `url(${group.banner.src})`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                ></div>

                                <div className="card-body text-center pt-0">
                                    {group.logo ? (
                                        <Link href="#!" className="avatar avatar-lg mt-n5 mb-2">
                                            <Image
                                                className="avatar-img rounded-circle bg-white shadow border border-white border-3"
                                                src={group.logo}
                                                alt={group.name}
                                            />
                                        </Link>
                                    ) : (
                                        <div className="avatar avatar-lg mt-n5 mb-2">
                                            <Link href="#!" className={`avatar-img rounded-circle bg-${group.initials === "HW" ? "warning" : "dark"}`}>
                                                <span className="text-white position-absolute top-50 start-50 translate-middle fw-bold">
                                                    {group.initials}
                                                </span>
                                            </Link>
                                        </div>
                                    )}

                                    <h5 className="mb-0">
                                        <Link href="/group-detail">{group.name}</Link>
                                    </h5>
                                    <small>
                                        {group.isPublic ? <BiGlobe className="pe-1" size={20} /> : <BiLock className="pe-1" size={20} />}
                                        {group.type} Group
                                    </small>

                                    <div className="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                                        <div>
                                            <h6 className="mb-0">{group.members}</h6>
                                            <small>Members</small>
                                        </div>
                                        <div className="vr"></div>
                                        <div>
                                            <h6 className="mb-0">{group.posts}</h6>
                                            <small>Post per day</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer p-3 pt-0 border-0">
                                    {group.joined ? (
                                        <button className="btn btn-danger btn-sm w-100 mb-0">
                                            <BsFillPersonCheckFill className="me-2" />
                                            Leave Group
                                        </button>
                                    ) : (
                                        <button className="btn btn-success btn-sm w-100 mb-0">
                                            <BsFillPersonPlusFill className="me-2" />
                                            Join now
                                        </button>
                                    )}
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

                <div className="mt-5">
                    <h4 className="mb-3">Suggested</h4>
                    <Row className="g-4">
                        {suggestedGroups.map((group) => (
                            <Col md={6} key={group.id}>
                                <div className="card card-body border">
                                    <div className="hstack flex-wrap gap-4 mb-2 mb-sm-0">
                                        <div className="avatar avatar-lg">
                                            {group.logo && (
                                                <Link href="#!">
                                                    <Image
                                                        className="avatar-img rounded-circle bg-white shadow border border-white border-3"
                                                        src={group.logo}
                                                        alt={group.name}
                                                    />
                                                </Link>
                                            )}
                                        </div>
                                        <div>
                                            <h5 className="mb-1">
                                                <Link href="/group-detail">{group.name}</Link>
                                            </h5>
                                            <small>
                                                {group.isPublic ? <BiGlobe className="pe-1" /> : <BiLock className="pe-1" />}
                                                {group.type} Group
                                            </small>
                                        </div>
                                    </div>
                                    <div className="d-sm-flex justify-content-sm-between align-items-center mt-3">
                                        <div className="hstack gap-2 gap-xl-3 mb-3 mb-sm-0">
                                            <div>
                                                <h6 className="mb-0">{group.members}</h6>
                                                <small>Members</small>
                                            </div>
                                            <div className="vr"></div>
                                            <div>
                                                <h6 className="mb-0">{group.posts}</h6>
                                                <small>Post per day</small>
                                            </div>
                                        </div>
                                        <button
                                            className={`btn btn-sm ${group.joined ? "btn-danger-soft" : "btn-success-soft"
                                                } mb-0 mt-auto`}
                                        >
                                            {group.joined ? (
                                                <>
                                                    <BsFillPersonCheckFill className="me-2" />
                                                    Leave
                                                </>
                                            ) : (
                                                <>
                                                    <BsFillPersonPlusFill className="me-2" />
                                                    Join
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Card>
            <CreateGroupModal show={showModal} onHide={() => setShowModal(false)} />
        </Col>
    );
};

export default Group;
