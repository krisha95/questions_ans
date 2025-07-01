"use client";
import Link from 'next/link';
import {
    Badge,
    Button,
    Card,
    Dropdown
} from 'react-bootstrap';
import {
    BsExclamationOctagonFill,
    BsThreeDotsVertical
} from 'react-icons/bs';
import { FaBookmark, FaCopy, FaShare } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const questions = [
    {
        category: 'Business',
        type: 'Popular question',
        icon: 'fa-solid fa-fire',
        title: 'How does digital marketing impact business growth?',
        date: '05 Nov 2021',
    },
    {
        category: 'Programmer',
        title: 'Explain the concept of object-oriented programming (OOP).',
        date: '12 Nov 2024',
    },
    {
        category: 'Food',
        title: 'What are some healthy cooking for common ingredients?',
        date: '15 Nov 2024',
    },
    {
        category: 'Food',
        title: 'What are some quick and easy recipes for busy days?',
        date: '15 Nov 2024',
    },
];

const QuestionSlider = () => {
    return (
        <>
            <div className="position-relative">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    breakpoints={{
                        576: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                    }}
                >
                    {questions.map((question, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="position-relative">
                                <Card className="p-4">
                                    <div className="position-absolute top-0 end-0 p-3 z-2">
                                        <Dropdown align="end" className="flex-shrink-0 no-after-icon">
                                            <Dropdown.Toggle
                                                as="a"
                                                className="btn btn-sm btn-round btn-light mb-0"
                                                role="button"
                                                id="dropdownShare1"
                                            >
                                                <BsThreeDotsVertical />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="dropdown-w-sm min-w-auto shadow rounded" aria-labelledby="dropdownShare1">
                                                <Dropdown.Item>
                                                    <FaBookmark className="me-2" /> Save
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <FaShare className="me-2" /> Share
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <BsExclamationOctagonFill className="me-2" /> Report
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <FaCopy className="me-2" /> Copy link
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mb-2 z-1 position-relative">
                                        <div className="hstack flex-wrap gap-2">
                                            <Badge bg="primary" className="bg-opacity-10 text-primary">
                                                {question.category}
                                            </Badge>
                                            {question.type && (
                                                <Badge bg="danger" className="bg-opacity-10 text-danger">
                                                    <i className={`${question.icon} me-2`}></i>
                                                    {question.type}
                                                </Badge>
                                            )}
                                        </div>
                                    </div>

                                    <div className="position-relative z-1">
                                        <Card.Title>
                                            <Link
                                                href="/answer-detail-minimal"
                                                className="stretched-link text-decoration-none"
                                            >
                                                {question.title}
                                            </Link>
                                        </Card.Title>
                                        <small>Asked: {question.date}</small>

                                        <div className="mt-3">
                                            <Button variant="dark" size="sm">
                                                Answer
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="swiper-pagination swiper-pagination-primary position-relative text-center mt-3 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
        </>
    );
};

export default QuestionSlider;
