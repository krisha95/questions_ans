import React from 'react'
import avatar01 from "@/assets/images/avatar/01.jpg";
import avatar02 from "@/assets/images/avatar/02.jpg";
import avatar03 from "@/assets/images/avatar/03.jpg";
import avatar04 from "@/assets/images/avatar/04.jpg";
import avatar05 from "@/assets/images/avatar/05.jpg";
import avatar06 from "@/assets/images/avatar/06.jpg";
import avatar07 from "@/assets/images/avatar/07.jpg";
import avatar09 from "@/assets/images/avatar/09.jpg";
import { Button, Card, CardBody, CardHeader, Col, Row, Spinner } from 'react-bootstrap';
import Image, { StaticImageData } from 'next/image';
import { BsFillPatchCheckFill, BsFillPersonCheckFill, BsFillPersonPlusFill, BsGeo, BsGlobe2, BsPatchCheck } from 'react-icons/bs';
import { BiBlock, BiBriefcase } from 'react-icons/bi';
import { FaAward, FaPlus } from 'react-icons/fa6';
import Link from 'next/link';

type FollowerStatus = "follow" | "followed" | "blocked";

type Follower = {
    avatar: StaticImageData,
    name: string,
    desc: string,
    followers: string,
    posts: string,
    status: FollowerStatus,
};

const followers: Follower[] = [
    {
        avatar: avatar01,
        name: "Lori Ferguson",
        desc: "Former Self Employee",
        followers: "4K",
        posts: "235",
        status: "follow",
    },
    {
        avatar: avatar02,
        name: "Ferguson Reed",
        desc: "Full Stack Web Developer",
        followers: "15K",
        posts: "356",
        status: "followed",
    },
    {
        avatar: avatar03,
        name: "Samuel Bishop",
        desc: "former Intern at Microsoft (2021-2024)",
        followers: "845",
        posts: "25",
        status: "follow",
    },
    {
        avatar: avatar04,
        name: "Dennis Barrett",
        desc: "",
        followers: "260",
        posts: "5",
        status: "follow",
    },
    {
        avatar: avatar05,
        name: "Amanda Reed",
        desc: "Digital Marketing Executive at folio.com (2024-present)",
        followers: "65K",
        posts: "856",
        status: "follow",
    },
    {
        avatar: avatar06,
        name: "Judy Nguyen",
        desc: "Digital Marketing Executive at folio.com (2024-present)",
        followers: "2K",
        posts: "101",
        status: "blocked",
    },
    {
        avatar: avatar07,
        name: "Bryan Knight",
        desc: "",
        followers: "586",
        posts: "25",
        status: "followed",
    },
    {
        avatar: avatar09,
        name: "Joan Wallace",
        desc: "Digital Marketing Executive at eduport.com",
        followers: "1M",
        posts: "2K",
        status: "follow",
    },
];

const renderButton = (status: FollowerStatus) => {
    if (status === "followed") {
        return (
            <Button variant="success" size="sm" className="flex-nowrap d-flex mb-0">
                <BsFillPersonCheckFill className="me-2" />Followed
            </Button>
        );
    }
    if (status === "blocked") {
        return (
            <Button variant="danger" size="sm" className="flex-nowrap d-flex mb-0">
                <BiBlock className="me-2" />Blocked
            </Button>
        );
    }
    return (
        <Button variant="success-soft" size="sm" className="flex-nowrap d-flex mb-0">
            <BsFillPersonPlusFill className="me-2" />Follow
        </Button>
    );
};

const Details = () => {
    return (
        <>
            <Card>
                <CardHeader className="border-bottom d-md-flex justify-content-md-between">
                    <div className="mb-1 mb-md-0">
                        <h4 className="card-title mb-1">Admin</h4>
                        <p className="mb-sm-0">Admin can manage submissions, content, and settings</p>
                    </div>
                    <div className="hstack gap-3">
                        <span><FaAward className="text-bronze me-1" />1.3k</span>
                        <span><FaAward className="text-silver me-1" />586</span>
                        <span><FaAward className="text-gold me-1" />120</span>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className="d-sm-flex justify-content-sm-between align-items-center mb-3">
                        <div className="hstack gap-2">
                            <div className="avatar">
                                <Image className="avatar-img rounded-circle" src={avatar09} alt="avatar" width={48} height={48} />
                            </div>
                            <div>
                                <h6 className="mb-0">
                                    <Link href="#">Lori Stevens<BsFillPatchCheckFill className="text-info ms-1 small" /></Link>
                                </h6>
                                <p className="mb-0 small">Joined April 2018</p>
                            </div>
                        </div>
                        <Button href="#" size="sm" variant="primary-soft" className="mb-0 mt-2 mt-sm-0">
                            <FaPlus className="me-2" />Follow
                        </Button>
                    </div>
                    <Row className="g-4">
                        <Col lg={6}>
                            <ul className="list-group list-group-borderless mb-0">
                                <li className="list-group-item fw-semibold heading-color d-flex mb-0">
                                    <BiBriefcase className="me-2" />Founder at Facts of business and plans
                                </li>
                                <li className="list-group-item fw-semibold heading-color d-flex mb-0">
                                    <BsGeo className="me-2" />Live in the USA
                                </li>
                                <li className="list-group-item fw-semibold heading-color d-flex mb-0">
                                    <BsPatchCheck className="me-2" />Active in 10 Categories
                                </li>
                                <li className="list-group-item fw-semibold heading-color d-flex mb-0">
                                    <BsGlobe2 className="me-2" />Knows English, French, German
                                </li>
                            </ul>
                        </Col>
                        <Col lg={6}>
                            <Row className="g-2">
                                <Col xs={6} sm={4}>
                                    <h5 className="mb-0">1.5M</h5>
                                    <p className="mb-0">Total Followers</p>
                                </Col>
                                <Col xs={6} sm={4}>
                                    <h5 className="mb-0">2156</h5>
                                    <p className="mb-0">Total Posts</p>
                                </Col>
                                <Col xs={6} sm={4}>
                                    <h5 className="mb-0">350</h5>
                                    <p className="mb-0">Total Questions</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </CardBody>
            </Card>

            <Card>
                <CardHeader className="border-bottom">
                    <h4 className="card-title mb-1">Followers</h4>
                </CardHeader>
                <CardBody>
                    {followers.map((f, idx) => (
                        <React.Fragment key={f.name}>
                            <div className="d-sm-flex align-items-center">
                                <div className="avatar me-3 mb-2 mb-md-0 flex-shrink-0">
                                    <Link href="#!">
                                        <Image className="avatar-img rounded-circle" src={f.avatar} alt="" width={40} height={40} />
                                    </Link>
                                </div>
                                <div className="pe-3">
                                    <p className="mb-2 mb-md-0">
                                        <Link href="#" className="heading-color fw-bold text-primary-hover mb-0 me-2">{f.name}</Link>
                                        {f.desc}
                                    </p>
                                    <ul className="nav nav-divider small mb-2 mb-md-0">
                                        <li className="nav-item">{f.followers} Followers</li>
                                        <li className="nav-item">{f.posts} Posts</li>
                                    </ul>
                                </div>
                                <div className="ms-sm-auto">{renderButton(f.status)}</div>
                            </div>
                            {idx !== followers.length - 1 && <hr />}
                        </React.Fragment>
                    ))}
                    <div className="text-center mt-5">
                        <Button variant="primary-soft" type="button" className="mb-0">
                            <Spinner animation="border" size="sm" className="me-2" />
                            Load more users
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default Details;