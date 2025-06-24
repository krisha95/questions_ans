import Link from 'next/link'
import React, { JSX } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {
    BiInfoCircle,
    BiRightArrowAlt,
    BiSmile,
} from 'react-icons/bi'
import { BsHouseDoor, BsLayers } from 'react-icons/bs'
import { FaArrowRightLong } from 'react-icons/fa6'

type FeaturedItem = {
    title: string;
    icon: JSX.Element;
    iconClass: string;
    links: string[];
}

const featuredData: FeaturedItem[] = [
    {
        title: 'Common questions',
        icon: <BsHouseDoor />,
        iconClass: 'bg-warning bg-opacity-15 text-warning',
        links: [
            'Admin & Billing',
            'Become a Pro',
            'Mobile application'
        ]
    },
    {
        title: 'Ticket inquiry',
        icon: <BiSmile />,
        iconClass: 'bg-primary bg-opacity-10 text-primary',
        links: [
            'Connecting to your Account',
            'Edit your profile information',
            'Connecting to other Social Media Accounts'
        ]
    },
    {
        title: 'Notification alert',
        icon: <BiInfoCircle />,
        iconClass: 'bg-success bg-opacity-10 text-success',
        links: [
            'Security & Privacy',
            'Author, Publisher & Admin Guides',
            'Pricing plans'
        ]
    },
    {
        title: 'Account Setup',
        icon: <BsLayers />,
        iconClass: 'bg-orange bg-opacity-10 text-orange',
        links: [
            'Gulp and Customization',
            'Color Scheme and Logo Settings',
            'Dark mode, RTL Version and Lazy Load'
        ]
    }
]

const Featured = () => {
    return (
        <section>
            <Container>
                <div className="mx-auto text-center mb-4">
                    <h2 className="h1">Featured article</h2>
                </div>

                <Row className="g-4">
                    {featuredData.map((item, index) => (
                        <Col sm={6} xl={3} key={index}>
                            <div className="card border p-0 h-100">
                                <div className="card-header border-0 p-3 pb-0">
                                    <div className={`icon-lg rounded fs-4 ${item.iconClass}`}>
                                        {item.icon}
                                    </div>
                                    <h5 className="card-title mb-0 mt-3">{item.title}</h5>
                                </div>

                                <div className="card-body p-3">
                                    <ul className="nav flex-column">
                                        {item.links.map((link, i) => (
                                            <li className="nav-item" key={i}>
                                                <Link className="nav-link d-flex ps-0" href="/help-detail">
                                                    <FaArrowRightLong className="me-2" />
                                                    {link}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default Featured
