"use client"
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import avatar01 from '@/assets/images/avatar/01.jpg';
import avatar02 from '@/assets/images/avatar/02.jpg';
import avatar03 from '@/assets/images/avatar/03.jpg';
import avatar04 from '@/assets/images/avatar/04.jpg';
import avatar05 from '@/assets/images/avatar/05.jpg';
import avatar06 from '@/assets/images/avatar/06.jpg';
import avatar07 from '@/assets/images/avatar/07.jpg';
import avatar08 from '@/assets/images/avatar/08.jpg';
import avatar09 from '@/assets/images/avatar/09.jpg';
import avatar10 from '@/assets/images/avatar/10.jpg';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'react-bootstrap';
import Link from 'next/link';
import { FaSpinner } from 'react-icons/fa6';

type TopicsType = {
    title: string,
    editors: (StaticImageData | string)[],
    replies: string,
    views: string,
    activity: string
}

const topics: TopicsType[] = [
    {
        title: 'How can I enhance the security of my website to protect against cyber threats?',
        editors: [avatar09],
        replies: '07',
        views: '845',
        activity: '2D',
    },
    {
        title: 'How can I optimize my website for search engines (SEO) to improve visibility?',
        editors: [avatar05, avatar02],
        replies: '03',
        views: '5K',
        activity: '3D',
    },
    {
        title: 'How do you approach troubleshooting in coding when faced with a bug or error?',
        editors: [avatar01, avatar03, 'PT'],
        replies: '03',
        views: '5K',
        activity: '3D',
    },
    {
        title: 'What skills and qualities are crucial for a successful career in data science?',
        editors: [avatar08, avatar07],
        replies: '10',
        views: '11K',
        activity: '4D',
    },
    {
        title: 'How can individuals develop their leadership skills in a professional setting?',
        editors: ['SL'],
        replies: '02',
        views: '81',
        activity: '4D',
    },
    {
        title: 'File Upload feature messing up page formatting',
        editors: [avatar09, avatar10],
        replies: '03',
        views: '56',
        activity: '6D',
    },
    {
        title: 'Shop images act as one',
        editors: ['MP', avatar04],
        replies: '02',
        views: '586',
        activity: '6D',
    },
    {
        title: 'Links Not Working on Tablet/Mobile',
        editors: [avatar08, avatar07],
        replies: '10',
        views: '52',
        activity: '6D',
    },
    {
        title: 'Randomize background videos',
        editors: ['ML'],
        replies: '06',
        views: '156',
        activity: '7D',
    },
    {
        title: 'Alternate my flex rows',
        editors: [avatar02, avatar05, avatar09],
        replies: '15',
        views: '786',
        activity: '7D',
    },
    {
        title: 'Horizontal scroll issue with custom slider',
        editors: [avatar03, avatar06],
        replies: '11',
        views: '255',
        activity: '7D',
    },
];

const Content = () => {
    const [activeTab, setActiveTab] = useState<string>('latest');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };
    return (
        <Col lg={8} xl={9}>
            <div className="vstack gap-4">
                <Card className="p-0">
                    <CardHeader className="border-bottom p-4">
                        <Row className="g-3 justify-content-between">
                            <Col md={6}>
                                <ul className="nav nav-pills nav-pills-primary-soft">
                                    <li className="nav-item">
                                        <button
                                            className={`nav-link mb-0 ${activeTab === 'latest' ? 'active' : ''}`}
                                            onClick={() => handleTabClick('latest')}
                                        >
                                            Latest
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className={`nav-link mb-0 ${activeTab === 'new' ? 'active' : ''}`}
                                            onClick={() => handleTabClick('new')}
                                        >
                                            New
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className={`nav-link mb-0 ${activeTab === 'top' ? 'active' : ''}`}
                                            onClick={() => handleTabClick('top')}
                                        >
                                            Top
                                            <span className="badge bg-success bg-opacity-10 text-success small ms-1">5</span>
                                        </button>
                                    </li>
                                </ul>
                            </Col>
                            <Col md={3}>
                                <select className="form-select">
                                    <option value="AT">All Topics</option>
                                    <option value="SV">Solved</option>
                                    <option value="UV">Unsolved</option>
                                </select>
                            </Col>
                        </Row>
                    </CardHeader>

                    <CardBody className="p-4 pt-0">
                        <div className="table-responsive border-0 rounded-3">
                            <Table className="table-shrink table align-middle p-4 mb-0 table-hover">
                                <thead>
                                    <tr>
                                        <th className="border-0 rounded-start">Topics</th>
                                        <th className="border-0">Editors</th>
                                        <th className="border-0">Replies</th>
                                        <th className="border-0">Views</th>
                                        <th className="border-0">Activity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topics.map((topic, index) => (
                                        <tr key={index}>
                                            <td>
                                                <h6 className="table-title mb-0 ms-2">
                                                    <Link href="#">{topic.title}</Link>
                                                </h6>
                                            </td>
                                            <td>
                                                <div className="hstack gap-2">
                                                    {topic.editors.map((editor, i) => (
                                                        typeof editor === 'string' ? (
                                                            <span key={i} className={`avatar avatar-xs flex-shrink-0`}>
                                                                <div className={`avatar-img rounded-circle bg-${editor === 'SL' ? 'dark' : editor === 'PT' ? 'danger' : 'info'}`}>
                                                                    <span className="text-white position-absolute top-50 start-50 translate-middle fw-bold">{editor}</span>
                                                                </div>
                                                            </span>
                                                        ) : (
                                                            <Link key={i} href="#" className="avatar avatar-xs flex-shrink-0">
                                                                <Image className="avatar-img rounded-circle" src={editor} alt="avatar" />
                                                            </Link>
                                                        )
                                                    ))}
                                                </div>
                                            </td>
                                            <td><h6 className="mb-0">{topic.replies}</h6></td>
                                            <td><h6 className="mb-0">{topic.views}</h6></td>
                                            <td><h6 className="mb-0">{topic.activity}</h6></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </CardBody>
                    <div className="card-footer text-center pt-0 d-grid">
                        <Link href="#" className="btn btn-link p-0 mb-0">
                            <FaSpinner className="me-2" />Load more
                        </Link>
                    </div>
                </Card>
            </div>
        </Col>
    );
};

export default Content;
