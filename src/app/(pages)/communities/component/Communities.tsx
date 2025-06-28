import Link from 'next/link'
import React from 'react'
import { Card, Col, Row, Dropdown, Button, DropdownToggle, DropdownItem, CardHeader, DropdownMenu, CardBody } from 'react-bootstrap'
import { BiBlock, BiBookmark, BiDotsHorizontalRounded, BiPieChart, BiXCircle } from 'react-icons/bi'
import { BsFillPieChartFill, BsPersonCheckFill } from 'react-icons/bs'
import { FaBarsProgress, FaBriefcase, FaBuildingColumns, FaChalkboardUser, FaCode, FaGlobe, FaHandHoldingDollar, FaHandshake, FaPaperPlane, FaPlus } from 'react-icons/fa6'
import { IconType } from 'react-icons'
import Paginations from './Paginations'

type Community = {
    id: number;
    name: string;
    icon: React.ReactNode;
    followers: string;
    posts: string;
    followed: boolean;
    btnVariant: string;
    btnText: string;
    btnIcon: React.ReactNode;
}

const communitiesData: Community[] = [
    {
        id: 1,
        name: "Language",
        icon: <FaGlobe className="me-2" />,
        followers: "15K",
        posts: "846",
        followed: false,
        btnVariant: "primary-soft",
        btnText: "Follow",
        btnIcon: <FaPlus className="me-2" />
    },
    {
        id: 2,
        name: "Program",
        icon: <FaCode className="me-2" />,
        followers: "1.5M",
        posts: "245",
        followed: true,
        btnVariant: "danger-soft",
        btnText: "Unfollow",
        btnIcon: <BsPersonCheckFill className="me-2" />
    },
    {
        id: 3,
        name: "Programer",
        icon: <FaChalkboardUser className="me-2" />,
        followers: "95K",
        posts: "485",
        followed: false,
        btnVariant: "primary-soft",
        btnText: "Follow",
        btnIcon: <FaPlus className="me-2" />
    },
    {
        id: 4,
        name: "Company",
        icon: <FaBriefcase className="me-2" />,
        followers: "25K",
        posts: "145",
        followed: false,
        btnVariant: "primary-soft",
        btnText: "Follow",
        btnIcon: <FaPlus className="me-2" />
    },
    {
        id: 5,
        name: "Management",
        icon: <FaBarsProgress className="me-2" />,
        followers: "18K",
        posts: "125",
        followed: false,
        btnVariant: "primary-soft",
        btnText: "Follow",
        btnIcon: <FaPlus className="me-2" />
    },
    {
        id: 6,
        name: "Analytics",
        icon: <BsFillPieChartFill className="me-2" />,
        followers: "12K",
        posts: "102",
        followed: true,
        btnVariant: "danger-soft",
        btnText: "Unfollow",
        btnIcon: <BsPersonCheckFill className="me-2" />
    },
    {
        id: 7,
        name: "University",
        icon: <FaBuildingColumns className="me-2" />,
        followers: "36K",
        posts: "512",
        followed: true,
        btnVariant: "danger-soft",
        btnText: "Unfollow",
        btnIcon: <BsPersonCheckFill className="me-2" />
    },
    {
        id: 8,
        name: "Communication",
        icon: <FaPaperPlane className="me-2" />,
        followers: "18K",
        posts: "125",
        followed: false,
        btnVariant: "primary-soft",
        btnText: "Follow",
        btnIcon: <FaPlus className="me-2" />
    },
    {
        id: 9,
        name: "Sponsor",
        icon: <FaHandHoldingDollar className="me-2" />,
        followers: "9K",
        posts: "95",
        followed: false,
        btnVariant: "primary-soft",
        btnText: "Follow",
        btnIcon: <FaPlus className="me-2" />
    },
    {
        id: 10,
        name: "Marketing",
        icon: <FaHandshake className="me-2" />,
        followers: "21K",
        posts: "485",
        followed: false,
        btnVariant: "primary-soft",
        btnText: "Follow",
        btnIcon: <FaPlus className="me-2" />
    },
];

const Communities = () => {
    return (
        <Col xl={8} xxl={7}>
            <div className="bg-mode p-4 rounded mb-4">
                <Row className="g-2 align-items-center">
                    <Col lg={2}>
                        <h1 className="h3 mb-lg-0">Communities</h1>
                    </Col>
                    <Col sm={6} lg={3} className="ms-lg-auto">
                        <select className="form-select" data-placeholder-val="Sort by" data-search-enabled="false">
                            <option value="pr">Popular</option>
                            <option value="fl">Followers</option>
                            <option value="nm">Name</option>
                        </select>
                    </Col>
                    <Col sm={6} lg={4}>
                        <div className="w-100">
                            <form className="position-relative">
                                <input className="form-control pe-5" type="search" placeholder="Type to find" aria-label="Search" />
                                <button className="btn btn-link py-0 position-absolute top-50 end-0 translate-middle-y" type="submit">
                                    <i className="fas fa-search fs-6 heading-color"></i>
                                </button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
            <Card className="card-body p-4 mb-4">
                <Row className="g-4">
                    {communitiesData.map((community) => (
                        <Col md={6} key={community.id}>
                            <Card className="border h-100">
                                <CardHeader className="border-bottom d-flex justify-content-between align-items-center p-3">
                                    <h5 className="mb-0">{community.icon}{community.name}</h5>
                                    <Dropdown align="end" className='no-after-icon'>
                                        <DropdownToggle as={Button} variant="light" className="btn-icon mb-0 p-1">
                                            <BiDotsHorizontalRounded />
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem href="#"><BiBookmark className="pe-2" size={24} />Save</DropdownItem>
                                            <DropdownItem href="#"><BiXCircle className="pe-2" size={24} />Hide</DropdownItem>
                                            <DropdownItem href="#"><BiBlock className="pe-2" size={24} />Block</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </CardHeader>
                                <CardBody className="p-3">
                                    <div className="d-flex justify-content-between mb-3">
                                        <div>
                                            <h5 className="mb-0">{community.followers}</h5>
                                            <h6 className="mb-0 fw-light">Total followers</h6>
                                        </div>
                                        <div>
                                            <h5 className="mb-0">{community.posts}</h5>
                                            <h6 className="mb-0 fw-light">Total posts</h6>
                                        </div>
                                    </div>
                                    <Button
                                        variant={community.btnVariant}
                                        className="w-100 mb-0"
                                    >
                                        {community.btnIcon}
                                        {community.btnText}
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Card>
            <Paginations />
        </Col>
    )
}

export default Communities