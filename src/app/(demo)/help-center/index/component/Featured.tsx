import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
    BiInfoCircle,
    BiRightArrowAlt
} from "react-icons/bi";
import { BsArrowRight, BsEmojiSmile, BsHouseDoor, BsLayers } from "react-icons/bs";

type CardItem = {
    title: string;
    Icon: React.ElementType;
    iconBgClass: string;
    textColorClass: string;
    links: string[];
}

const cardData: CardItem[] = [
    {
        title: "Advanced Usage",
        Icon: BsHouseDoor,
        iconBgClass: "bg-warning bg-opacity-15",
        textColorClass: "text-warning",
        links: [
            "Admin & Billing",
            "Become a Pro",
            "Mobile application",
            "Guide",
            "Promotions & Deals",
        ],
    },
    {
        title: "Get started",
        Icon: BsEmojiSmile,
        iconBgClass: "bg-primary bg-opacity-10",
        textColorClass: "text-primary",
        links: [
            "Connecting to your Account",
            "Edit your profile information",
            "Connecting to other Social Media Accounts",
            "Adding your profile picture",
            "Describing your store",
        ],
    },
    {
        title: "Other Topics",
        Icon: BiInfoCircle,
        iconBgClass: "bg-success bg-opacity-10",
        textColorClass: "text-success",
        links: [
            "Security & Privacy",
            "Author, Publisher & Admin Guides",
            "Pricing plans",
            "Sales Tax & Regulatory Fees",
            "Promotions & Deals",
        ],
    },
    {
        title: "Account Setup",
        Icon: BsLayers,
        iconBgClass: "bg-orange bg-opacity-10",
        textColorClass: "text-orange",
        links: [
            "Gulp and Customization",
            "Color Scheme and Logo Settings",
            "Dark mode, RTL Version and Lazy Load",
            "Sources, Credits and Changelog",
            "Updates and Support",
        ],
    },
];

const Featured = () => {
    return (
        <section>
            <Container>
                <Row className="g-4">
                    {cardData.map(({ title, Icon, iconBgClass, textColorClass, links }, index) => (
                        <Col sm={6} xl={3} key={index}>
                            <div className="card p-0 h-100">
                                <div className="card-header border-0 p-3 pb-0">
                                    <div className={`icon-lg ${iconBgClass} rounded ${textColorClass} fs-3`}>
                                        <Icon />
                                    </div>
                                    <h5 className="card-title mb-0 mt-3">{title}</h5>
                                </div>
                                <div className="card-body p-3">
                                    <ul className="nav flex-column">
                                        {links.map((link, i) => (
                                            <li key={i} className="nav-item">
                                                <Link className="nav-link d-flex ps-0" href="/help-detail">
                                                    <BsArrowRight className="me-2" size={16} /> {link}
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
    );
};

export default Featured;
