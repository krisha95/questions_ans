"use client";
import Link from "next/link";
import React, { JSX } from "react";
import { Row, Col } from "react-bootstrap";
import {
    BsBoxes,
    BsEmojiSmile,
    BsLayers,
    BsHouse,
    BsGear,
    BsAppIndicator,
    BsArrowRight,
} from "react-icons/bs";

type HelpItem = {
    title: string;
    description?: string;
    icon: JSX.Element;
    iconClass: string;
    colorClass: string;
    articles?: string[];
    link: string;
};

const helpData: HelpItem[] = [
    {
        title: "Getting Started",
        description: "Dive into the basics with a brief guide to get you up and running swiftly.",
        icon: <BsBoxes />,
        iconClass: "fa-xl",
        colorClass: "bg-success bg-opacity-10 text-success",
        link: "#",
    },
    {
        title: "Installation",
        description: "Get detailed instructions on how to install and set up our system",
        icon: <BsEmojiSmile />,
        iconClass: "fa-xl",
        colorClass: "bg-info bg-opacity-10 text-info",
        link: "#",
    },
    {
        title: "User Accounts",
        description: "Access articles explaining specific tasks and processes for easy comprehension.",
        icon: <BsLayers />,
        iconClass: "fa-xl",
        colorClass: "bg-danger bg-opacity-10 text-danger",
        link: "#",
    },
    {
        title: "Admin Panel",
        icon: <BsHouse />,
        iconClass: "fa-xl",
        colorClass: "bg-warning bg-opacity-15 text-warning",
        articles: [
            "Follow up Emails",
            "Standard Post Format",
            "Upgrading Theme",
            "Plugin Installation",
            "Subscriptions Modul Setup",
        ],
        link: "#",
    },
    {
        title: "Security Guidelines",
        icon: <BsGear />,
        iconClass: "fa-xl",
        colorClass: "bg-orange bg-opacity-10 text-orange",
        articles: [
            "Well Documented",
            "Shipping Options Page",
            "Standard Post Format",
            "Customizing Forms",
            "Shipping Methods",
        ],
        link: "#",
    },
    {
        title: "Troubleshooting",
        icon: <BsAppIndicator />,
        iconClass: "fa-xl",
        colorClass: "bg-primary bg-opacity-10 text-primary",
        articles: [
            "Follow up Emails",
            "Multiple installs on one domain",
            "Standard Post Format",
            "Responsive Design",
            "Increasing Memory",
        ],
        link: "#",
    },
];

const HelpBox = () => {
    return (
        <Row className="g-4">
            {helpData.map((item, index) => (
                <Col md={6} lg={4} key={index}>
                    <div className="card p-4 h-100">
                        <div className="card-body p-0">
                            <div className={`icon-md ${item.colorClass} rounded flex-shrink-0 mb-3`}>
                                <span className={item.iconClass}>{item.icon}</span>
                            </div>
                            <h5 className="mb-3">{item.title}</h5>
                            {item.description && <p>{item.description}</p>}
                            {item.articles && (
                                <ul className="nav flex-column gap-1">
                                    {item.articles.map((text, idx) => (
                                        <li className="nav-item" key={idx}>
                                            <Link className="nav-link d-flex fs-6 ps-0" href="/help-detail">
                                                <BsArrowRight className="me-2" />
                                                {text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className={`card-footer p-0 ${item.articles ? "pt-3" : ""}`}>
                            <Link className="icon-link icon-link-hover lh-0" href={item.link}>
                                View all articles <BsArrowRight />
                            </Link>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    );
};

export default HelpBox;
