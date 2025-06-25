import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { BiBarChart, BiChat, BiCheckCircle, BiSolidMessageAltDots } from "react-icons/bi";
import { BsFillCaretUpFill, BsFillCheckCircleFill, BsFillPatchQuestionFill, BsFire, BsLifePreserver } from "react-icons/bs";
import Paginations from "./Paginations";


type QueAnsType = {
    id: number;
    votes: string;
    voteName: string;
    badge: { icon: React.ReactNode; label: string };
    title: string;
    link: string;
    user: string;
    asked: string;
    answered: boolean;
    bestAnswer?: boolean;
};

const queAnsData: QueAnsType[] = [
    {
        id: 1,
        votes: "02",
        voteName: "vote1",
        badge: { icon: <BsFillPatchQuestionFill className="fa-fw me-1" />, label: "Q&A" },
        title: "Issue in input-group & form-control add show/hide icon to password",
        link: "/answer-detail",
        user: "Larry Lawson",
        asked: "3 days ago",
        answered: false,
    },
    {
        id: 2,
        votes: "03",
        voteName: "vote2",
        badge: { icon: <BsFire className="fa-fw me-1" />, label: "General" },
        title: "Using style and still staying responsive",
        link: "answer-detail-v2.html",
        user: "Frances Guerrero",
        asked: "5 days ago",
        answered: true,
        bestAnswer: true,
    },
    {
        id: 3,
        votes: "0",
        voteName: "vote3",
        badge: { icon: <BiSolidMessageAltDots className="fa-fw me-1" />, label: "Forum" },
        title: "What's a goal you're currently working towards, and how do you plan to achieve it?",
        link: "/answer-detail",
        user: "Samuel Bishop",
        asked: "6 days ago",
        answered: false,
    },
    {
        id: 4,
        votes: "04",
        voteName: "vote4",
        badge: { icon: <BsFire className="fa-fw me-1" />, label: "General" },
        title: "What's the last book, movie, or TV show you enjoyed, and why?",
        link: "/answer-detail",
        user: "Billy Vasquez",
        asked: "6 days ago",
        answered: false,
    },
    {
        id: 5,
        votes: "03",
        voteName: "vote5",
        badge: { icon: <BiBarChart className="fa-fw me-1" />, label: "Poll" },
        title: "Bootstrap Button with 'nav-link' and 'btn-outline' Classes Not Displaying Borders?",
        link: "/answer-detail",
        user: "Billy Vasquez",
        asked: "6 days ago",
        answered: false,
    },
    {
        id: 6,
        votes: "10",
        voteName: "vote6",
        badge: { icon: <BsLifePreserver className="fa-fw me-1" />, label: "Help center" },
        title: "What's the meaning of success to you, and how do you pursue it in your life?",
        link: "answer-detail-v2.html",
        user: "Billy Vasquez",
        asked: "6 days ago",
        answered: true,
        bestAnswer: true,
    },
    {
        id: 7,
        votes: "02",
        voteName: "vote7",
        badge: { icon: <BsFillPatchQuestionFill className="fa-fw me-1" />, label: "Q&A" },
        title: "Where do you see yourself in 5 years, and what steps are you taking to get there?",
        link: "/answer-detail",
        user: "Billy Vasquez",
        asked: "1 week ago",
        answered: false,
    },
    {
        id: 8,
        votes: "01",
        voteName: "vote8",
        badge: { icon: <BiSolidMessageAltDots className="fa-fw me-1" />, label: "Forum" },
        title: "What inspires your creativity, and how do you overcome creative blocks?",
        link: "/answer-detail",
        user: "Lori Stevens",
        asked: "1 week ago",
        answered: false,
    },
    {
        id: 9,
        votes: "03",
        voteName: "vote9",
        badge: { icon: <BsFire className="fa-fw me-1" />, label: "General" },
        title: "Share a favorite memory from your past and what makes it special to you.",
        link: "answer-detail-v2.html",
        user: "Dennis Barrett",
        asked: "2 weeks ago",
        answered: true,
        bestAnswer: true,
    },
    {
        id: 10,
        votes: "02",
        voteName: "vote10",
        badge: { icon: <BsLifePreserver className="fa-fw me-1" />, label: "Help center" },
        title: "Who is an inspirational figure in your life, and how have they influenced you?",
        link: "/answer-detail",
        user: "Billy Vasquez",
        asked: "2 weeks ago",
        answered: false,
    },
];

const QueAnsContent = () => {
    return (
        <Col xl={9} className="vstack gap-4">
            {queAnsData.map((item) => (
                <div className="card p-3 p-md-0" key={item.id}>
                    <Row>
                        <Col md={2}>
                            <div className="d-flex justify-content-md-center align-items-start h-100">
                                <div className="border rounded text-center w-60px p-1 m-md-4 mb-0 mx-lg-auto">
                                    <input
                                        type="radio"
                                        className="btn-check"
                                        name={item.voteName}
                                        id={`btnradioT${item.id}`}
                                    />
                                    <label
                                        className="btn btn-vote mb-0 p-0"
                                        htmlFor={`btnradioT${item.id}`}
                                    >
                                        <BsFillCaretUpFill className="fs-5" />
                                    </label>
                                    <h6 className="mb-0 px-2 vote-count">{item.votes}</h6>
                                </div>
                                <div className="vr d-none d-md-block"></div>
                            </div>
                        </Col>
                        <Col md={8}>
                            <div className="card-body px-0 py-md-4">
                                <div className="badge text-bg-dark mb-2">
                                    {item.badge.icon}
                                    {item.badge.label}
                                </div>
                                <h5 className="card-title mb-2">
                                    <Link href={item.link}>{item.title}</Link>
                                </h5>
                                <ul className="nav nav-divider">
                                    <li className="nav-item fw-normal">
                                        <Link href="#" className="text-primary-hover mb-0">
                                            {item.user}
                                        </Link>
                                    </li>
                                    <li className="nav-item fw-normal">Asked: {item.asked}</li>
                                    <li
                                        className={`nav-item fw-normal${item.answered ? " text-primary" : ""
                                            }`}
                                    >
                                        {item.answered
                                            ? item.bestAnswer
                                                ? "Answered"
                                                : "Answered"
                                            : "Unanswered"}
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={2} className="m-auto">
                            <div className="text-lg-center">
                                <input
                                    type="checkbox"
                                    className="btn-check"
                                    id={`btn-check-${item.id}`}
                                    checked={!!item.answered}
                                    readOnly
                                />
                                <Link
                                    href={item.link}
                                    className="btn btn-light btn-success-soft-check mb-0"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title={
                                        item.bestAnswer
                                            ? "Best answer"
                                            : item.answered
                                                ? "Answered"
                                                : "Answered"
                                    }
                                >
                                    {item.votes}
                                    {item.answered ? (
                                        item.bestAnswer ? (
                                            <BsFillCheckCircleFill className="ms-2" />
                                        ) : (
                                            <BiCheckCircle className="ms-2" />
                                        )
                                    ) : (
                                        <BiCheckCircle className="ms-2" />
                                    )}
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            ))}
            <Paginations />
        </Col>
    );
};

export default QueAnsContent;