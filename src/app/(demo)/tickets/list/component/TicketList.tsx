import React from "react";
import Image from "next/image";
import {
    BsCalendar,
    BsChatLeft,
    BsArrowRight,
    BsArrowClockwise,
} from "react-icons/bs";

import avtar01 from "@/assets/images/avatar/01.jpg";
import avtar6 from "@/assets/images/avatar/06.jpg";
import avtar4 from "@/assets/images/avatar/04.jpg";
import avtar3 from "@/assets/images/avatar/03.jpg";
import placeHolder from "@/assets/images/avatar/placeholder.jpg";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

const ticketsData = [
    {
        id: 1,
        avatar: avtar01,
        name: "Frances Guerrero",
        question: "Is this in React Bootstrap?",
        category: "General inquiry",
        updateTime: "Update 40sec ago",
        comments: "2 comment",
    },
    {
        id: 2,
        avatar: avtar6,
        name: "Bryan Knight",
        question: "Can I remove node from template?",
        category: "General inquiry",
        updateTime: "Update 5hour ago",
        comments: "5 comment",
    },
    {
        id: 3,
        avatar: avtar4,
        name: "Billy Vasquez",
        question: "How I get my refund?",
        category: "General inquiry",
        updateTime: "Update 2days ago",
        comments: "10 comment",
    },
    {
        id: 4,
        avatar: placeHolder,
        name: "Larry Lawson",
        question: "How to implement node in SAAS?",
        category: "General inquiry",
        updateTime: "Update 10days ago",
        comments: "22 comment",
    },
    {
        id: 5,
        avatar: avtar3,
        name: "Louis Ferguson",
        question: "Why Sample Data Look Different than Demo Pages?",
        category: "General inquiry",
        updateTime: "Update 22sec ago",
        comments: "6 comment",
    },
    {
        id: 6,
        avatar: placeHolder,
        name: "Frances Guerrero",
        question: "An important one, it allows us to verify purchase codes.",
        category: "General inquiry",
        updateTime: "Update 1month ago",
        comments: "2 comment",
    },
];

const TicketList = () => {
    return (
        <main>
            <section >
                <Container>
                    <Row>
                        <Col lg={7} className="text-center mx-auto mb-5">
                            <h1 className="mb-3">My Tickets</h1>
                            <p className="mb-0">
                                At our support desk, we're dedicated to providing you with
                                exceptional assistance and resolving any queries you may have.
                            </p>
                        </Col>

                        <Col lg={9} className="mx-auto">
                            <div className="card overflow-hidden p-0">
                                {/* Header */}
                                <div className="card-header p-4 border-bottom">
                                    <Row className="g-4 align-items-center">
                                        <Col sm={6}>
                                            <h5 className="mb-0">
                                                {ticketsData.length} tickets pending
                                            </h5>
                                        </Col>
                                        <Col sm={6} md={3} className="ms-auto">
                                            <select className="form-select" defaultValue="MR">
                                                <option value="MR">New</option>
                                                <option value="DV">Week ago</option>
                                                <option value="MA">Month ago</option>
                                            </select>
                                        </Col>
                                    </Row>
                                </div>

                                {/* Body */}
                                <div className="card-body p-0">
                                    <div className="list-group list-group-flush">
                                        {ticketsData.map((ticket) => (
                                            <div
                                                key={ticket.id}
                                                className="list-group-item list-group-item-action d-md-flex align-items-center py-3"
                                            >
                                                <div className="flex-shrink-0 avatar avatar-lg">
                                                    <Image
                                                        className="avatar-img rounded-circle"
                                                        src={ticket.avatar}
                                                        alt={ticket.name}
                                                    />
                                                </div>

                                                <div className="ms-md-3 mt-3 mt-md-0">
                                                    <span className="fw-normal">{ticket.name}</span>
                                                    <h5 className="my-2">{ticket.question}</h5>
                                                    <ul className="nav nav-divider small">
                                                        <li className="nav-item">{ticket.category}</li>
                                                        <li className="nav-item">
                                                            <BsCalendar className="me-1" />
                                                            {ticket.updateTime}
                                                        </li>
                                                        <li className="nav-item">
                                                            <BsChatLeft className="me-1" />
                                                            {ticket.comments}
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="ms-auto mt-3 mt-md-0">
                                                    <Link
                                                        className="icon-link icon-link-hover stretched-link"
                                                        href="ticket-reply.html"
                                                    >
                                                        View ticket <BsArrowRight />
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="card-footer border-top text-center">
                                    <Link href="#" className="btn btn-link fw-normal mb-0 p-0">
                                        <BsArrowClockwise className="me-1" /> Load more
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
};


export default TicketList