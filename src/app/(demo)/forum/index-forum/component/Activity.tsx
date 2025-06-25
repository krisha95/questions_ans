import Link from 'next/link';
import React from 'react';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import { BiArrowToRight, BiRightArrowAlt } from 'react-icons/bi';
import { BsFillCaretUpFill } from 'react-icons/bs';
import { FaEye, FaThumbsUp, FaComment } from 'react-icons/fa';

const activityData = [
    {
        id: 1,
        badge: { text: 'Freelance & Jobs', color: 'bg-success' },
        title: 'How can I enhance the security of my website to protect against cyber threats?',
        user: 'Larry Lawson',
        created: '7 Nov 2024',
        lastReply: '45 min ago',
        content: 'Implementing HTTPS, keeping software and plugins updated, regularly monitoring logs, and using strong authentication methods are key measures to enhance website security.',
        views: 15,
        likes: 25,
        comments: 7,
        vote: 251,
        voteId: 'vote1',
    },
    {
        id: 2,
        badge: { text: 'Custom code', color: 'bg-danger' },
        title: 'What are the advantages of using a content management system (CMS) for website development?',
        user: 'Creative Group',
        created: '8 Nov 2024',
        lastReply: '32 min ago',
        content: 'A CMS simplifies content creation, allows collaborative editing, provides a consistent design, and enables easy updates without extensive technical knowledge.',
        views: 10,
        likes: 12,
        comments: 2,
        vote: 145,
        voteId: 'vote2',
    },
    {
        id: 3,
        badge: { text: 'Finance', color: 'bg-orange' },
        title: 'What are some effective ways to maintain a healthy work-life balance, especially in demanding professions?',
        user: 'Frances Guerrero',
        created: '12 Nov 2024',
        lastReply: '1 hour ago',
        content: 'Prioritize tasks, set boundaries, take regular breaks, practice self-care, and communicate expectations with colleagues and supervisors to achieve a healthy work-life balance.',
        views: 51,
        likes: 32,
        comments: 5,
        vote: 86,
        voteId: 'vote3',
    },
    {
        id: 4,
        badge: { text: 'Business', color: 'bg-dark' },
        title: 'How can businesses leverage social media for marketing and brand awareness?',
        user: 'Frances Guerrero',
        created: '12 Nov 2024',
        lastReply: '1 hour ago',
        content: 'Develop a social media strategy, identify target audiences, create engaging content, use analytics to measure performance, and actively engage with followers to build brand awareness.',
        views: 51,
        likes: 32,
        comments: 5,
        vote: 21,
        voteId: 'vote4',
    },
    {
        id: 5,
        badge: { text: 'Legal', color: 'bg-info' },
        title: 'What programming languages are trending in the current tech landscape, and why?',
        user: 'Louis Ferguson',
        created: '3 Nov 2024',
        lastReply: '5 hours ago',
        content: 'Python, JavaScript, and TypeScript are trending due to their versatility, community support, and application in areas like web development, data science, and machine learning.',
        views: 5,
        likes: 2,
        comments: 0,
        vote: 42,
        voteId: 'vote5',
    },
];

const Activity = () => {
    return (
        <Col lg={8} xl={9}>
            <div className="vstack gap-4">
                <div className="d-sm-flex justify-content-between align-items-center">
                    <h2 className="mb-2 mb-sm-0">Recent Activity</h2>
                    <Link className="icon-link link-primary icon-link-hover fw-normal" href="#">View all activities<BiRightArrowAlt className="lh-1" /></Link>
                </div>

                {activityData.map((item) => (
                    <Card key={item.id}>
                        <Row>
                            <Col sm={3} md={2}>
                                <div className="d-flex justify-content-sm-center align-items-start h-100">
                                    <div className="border rounded text-center w-60px p-1 m-4 m-sm-3 mb-0 mx-sm-auto">
                                        <input type="radio" className="btn-check" name={item.voteId} id={`btnradioT${item.id}`} />
                                        <label className="btn btn-vote mb-0 p-0" htmlFor={`btnradioT${item.id}`}>
                                            <BsFillCaretUpFill className="fs-5" />
                                        </label>
                                        <h6 className="mb-0 px-2 vote-count">{item.vote}</h6>
                                    </div>
                                    <div className="vr d-none d-sm-block"></div>
                                </div>
                            </Col>

                            <Col sm={9} md={10}>
                                <CardBody className="ps-sm-0 p-4">
                                    <div className={`badge ${item.badge.color} mb-3`}>{item.badge.text}</div>

                                    <h5 className="card-title mb-2">
                                        <Link href="/answer-detail-v2">{item.title}</Link>
                                    </h5>

                                    <ul className="nav nav-divider pb-3">
                                        <li className="nav-item fw-normal">
                                            <Link href="#" className="text-primary-hover mb-0">{item.user}</Link>
                                        </li>
                                        <li className="nav-item fw-normal">Created: {item.created}</li>
                                        <li className="nav-item fw-normal">Last Reply: {item.lastReply}</li>
                                    </ul>

                                    <p className="mb-2">{item.content}</p>

                                    <div className="hstack flex-wrap small gap-3 mt-4">
                                        <Link href="#" className="text-primary-hover fw-light mb-0">
                                            <FaEye className="me-1" />{item.views} Views
                                        </Link>
                                        <Link href="#" className="text-primary-hover fw-light mb-0">
                                            <FaThumbsUp className="me-1" />{item.likes} Likes
                                        </Link>
                                        <Link href="#" className="text-primary-hover fw-light mb-0">
                                            <FaComment className="me-1" />{item.comments} Comments
                                        </Link>
                                    </div>
                                </CardBody>
                            </Col>
                        </Row>
                    </Card>
                ))}
            </div>
        </Col>
    );
};

export default Activity;