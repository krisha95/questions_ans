import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BiRightArrowAlt } from 'react-icons/bi';
import { FaCircle } from 'react-icons/fa6';

const categories = [
    {
        title: 'Boards',
        topic: 125,
        activity: 'Today 5:30 PM',
        iconColor: 'text-warning',
    },
    {
        title: 'Finance',
        topic: 245,
        activity: 'Today 1:30 AM',
        iconColor: 'text-orange',
    },
    {
        title: 'Legal',
        topic: 458,
        activity: 'Today 2:54 PM',
        iconColor: 'text-info',
    },
    {
        title: 'Nursing',
        topic: 45,
        activity: 'Today 7:40 AM',
        iconColor: 'heading-color',
    },
    {
        title: 'Freelance & Jobs',
        topic: 145,
        activity: 'Today 2:30 PM',
        iconColor: 'text-success',
    },
    {
        title: 'General',
        topic: 56,
        activity: 'Today 3:05 PM',
        iconColor: 'text-primary',
    },
    {
        title: 'Custom code',
        topic: 176,
        activity: 'Today 12:54 PM',
        iconColor: 'text-danger',
    },
    {
        title: 'Hosting',
        topic: 268,
        activity: 'Today 5:21 PM',
        iconColor: 'text-light',
    },
];

const Category = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col xs={12} className="mb-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2 className="mb-0">Top Categories</h2>
                            <Link href="#" className="btn btn-primary-soft mb-0">View all</Link>
                        </div>
                    </Col>
                </Row>

                <Row className="g-4">
                    {categories.map((category, index) => (
                        <Col sm={6} lg={4} xl={3} key={index}>
                            <div className="card p-0">
                                <div className="card-header border-bottom d-flex justify-content-between align-items-center p-3">
                                    <h5 className="card-title mb-0">
                                        <FaCircle className={`fa-2xs ${category.iconColor} me-2`} />
                                        {category.title}
                                    </h5>
                                    <Link className="icon-link icon-link-hover fw-normal" href="/forum-category">
                                        View<BiRightArrowAlt className="lh-1" />
                                    </Link>
                                </div>
                                <div className="card-body hstack gap-4 flex-wrap p-3">
                                    <div>
                                        <small>Topic</small>
                                        <h6 className="mb-0">{category.topic}</h6>
                                    </div>
                                    <div>
                                        <small>Last Activity</small>
                                        <h6 className="mb-0">{category.activity}</h6>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

            </Container>
        </section>
    );
};

export default Category;
