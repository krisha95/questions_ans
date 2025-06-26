"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const slides = [
    [
        {
            badge: "Programmer",
            title: "What is the difference between procedural and object-oriented programming?",
            asked: "50 min ago",
            answers: "10 Answers",
            latest: "Latest answer was 15 min ago",
        },
        {
            badge: "Business",
            title: "What is the role of market segmentation in marketing strategy?",
            asked: "9 hours ago",
            answers: "18 Answers",
            latest: "Latest answer was 7 hours ago",
        },
        {
            badge: "History",
            title: "What were the key events and consequences of the Cold War?",
            asked: "2 hours ago",
            answers: "5 Answers",
            latest: "Latest answer was 9 min ago",
        },
        {
            badge: "Technology",
            title: "What is the significance of cloud computing in modern IT infrastructure?",
            asked: "8 hours ago",
            answers: "25 Answers",
            latest: "Latest answer was 6 hours ago",
        },
    ],
    [
        {
            badge: "Food",
            title: "How does the cooking method affect the nutritional content of food?",
            asked: "9 hours ago",
            answers: "18 Answers",
            latest: "Latest answer was 7 hours ago",
        },
        {
            badge: "Health",
            title: "Explain the importance of regular physical exercise for overall health and well-being.",
            asked: "50 min ago",
            answers: "10 Answers",
            latest: "Latest answer was 15 min ago",
        },
        {
            badge: "History",
            title: "What were the main causes and consequences of the Industrial Revolution?",
            asked: "2 hours ago",
            answers: "5 Answers",
            latest: "Latest answer was 9 min ago",
        },
        {
            badge: "Programmer",
            title: "Product Subtract Button is not working perfectly in the e-commerce app?",
            asked: "50 min ago",
            answers: "10 Answers",
            latest: "Latest answer was 35 min ago",
        },
    ],
];

const QuetionSlider = () => {
    return (
        <section className="pt-0 pt-lg-5">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="mb-0">Recently answered questions</h2>
                    </div>
                </div>

                <div className="row position-relative">
                    <div className="col-xl-10 mx-auto">
                        <Swiper
                            spaceBetween={30}
                            loop={false}
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }}
                            modules={[Navigation]}
                            className="swiper"
                        >
                            {slides.map((slide, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="row g-4">
                                        <div className="col-md-6 d-flex flex-column justify-content-between">
                                            {slide.slice(0, 2).map((question, qIndex) => (
                                                <div key={qIndex} className={qIndex !== 0 ? "mt-4" : ""}>
                                                    <div className="card card-body p-4">
                                                        <div>
                                                            <span className="badge text-bg-dark mb-2">{question.badge}</span>
                                                        </div>
                                                        <h5 className="card-title mb-1">
                                                            <a href="answer-detail.html" className="stretched-link">
                                                                {question.title}
                                                            </a>
                                                        </h5>
                                                        <small>Asked: {question.asked}</small>
                                                        <ul className="list-inline d-sm-flex justify-content-sm-between align-items-center mb-0 mt-3">
                                                            <li className="list-inline-item me-0">
                                                                <a href="#">{question.answers}</a>
                                                            </li>
                                                            <li className="list-inline-item me-0 ms-sm-auto">
                                                                {question.latest}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="col-md-6 d-flex flex-column justify-content-between">
                                            {slide.slice(2, 4).map((question, qIndex) => (
                                                <div key={qIndex} className={qIndex !== 0 ? "mt-4" : ""}>
                                                    <div className="card card-body p-4">
                                                        <div>
                                                            <span className="badge text-bg-dark mb-2">{question.badge}</span>
                                                        </div>
                                                        <h5 className="card-title mb-1">
                                                            <a href="answer-detail.html" className="stretched-link">
                                                                {question.title}
                                                            </a>
                                                        </h5>
                                                        <small>Asked: {question.asked}</small>
                                                        <ul className="list-inline d-sm-flex justify-content-sm-between align-items-center mb-0 mt-3">
                                                            <li className="list-inline-item me-0">
                                                                <a href="#">{question.answers}</a>
                                                            </li>
                                                            <li className="list-inline-item me-0 ms-sm-auto">
                                                                {question.latest}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="d-flex justify-content-between position-absolute top-50 start-0 w-100">
                            <button className="btn btn-outline-dark btn-icon rounded-circle swiper-button-prev">
                                <BiLeftArrowAlt />
                            </button>
                            <button className="btn btn-outline-dark btn-icon rounded-circle swiper-button-next">
                                <BiRightArrowAlt />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuetionSlider;