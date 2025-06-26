"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import post1 from "@/assets/images/post/4by3/01.jpg";
import post2 from "@/assets/images/post/4by3/02.jpg";
import post3 from "@/assets/images/post/4by3/03.jpg";
import post4 from "@/assets/images/post/4by3/04.jpg";
import avatar5 from "@/assets/images/avatar/05.jpg";
import avatar8 from "@/assets/images/avatar/08.jpg";
import avatar9 from "@/assets/images/avatar/09.jpg";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Col, Container, Row } from "react-bootstrap";

type PostType = {
    id: number;
    image: StaticImageData;
    title: string;
    link: string;
    badgeLeft?: string;
    badgeRight?: string;
    avatar?: StaticImageData;
    authorName: string;
    initials?: string;
};

const getBadgeClass = (text: string): string => {
    const badgeMap: Record<string, string> = {
        Live: "bg-success",
        "Q&A": "bg-orange",
        Post: "bg-info",
        News: "bg-danger",
    };
    return badgeMap[text] || "bg-secondary";
};

const posts: PostType[] = [
    {
        id: 1,
        image: post1,
        title: "What can I do to add this count, and make the right data frame?",
        link: "/answer-detail-minimal",
        badgeLeft: "Live",
        badgeRight: "Q&A",
        avatar: avatar9,
        authorName: "Lori Stevens",
    },
    {
        id: 2,
        image: post2,
        title: "Find highest/lowest value by the data of two different tables in SQL?",
        link: "/answer-detail-minimal",
        badgeRight: "Post",
        initials: "Bv",
        authorName: "Billy Vasquez",
    },
    {
        id: 3,
        image: post3,
        title: "What are some effective time management life hacks?",
        link: "/answer-detail-minimal",
        badgeRight: "Post",
        avatar: avatar8,
        authorName: "Larry Lawson",
    },
    {
        id: 4,
        image: post4,
        title: "What is the importance of customer feedback in business?",
        link: "/answer-detail-minimal",
        badgeLeft: "Live",
        badgeRight: "News",
        avatar: avatar5,
        authorName: "Carolyn Ortiz",
    },
    {
        id: 5,
        image: post1,
        title: "What can I do to add this count, and make the right data frame?",
        link: "/answer-detail-minimal",
        badgeLeft: "Live",
        badgeRight: "Q&A",
        avatar: avatar9,
        authorName: "Lori Stevens",
    },
];

const Banner = () => {
    return (
        <section className="pt-8">
            <Container>
                <h1 className="h3 mb-4">Today's Top Trending Questions And Posts</h1>

                <Row>
                    <Col xs={12}>
                        <div className="position-relative">
                            <Swiper
                                modules={[Navigation]}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                }}
                                loop={false}
                                spaceBetween={30}
                                breakpoints={{
                                    576: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    992: { slidesPerView: 3 },
                                    1200: { slidesPerView: 4 },
                                }}
                            >
                                {posts.map((post) => (
                                    <SwiperSlide key={post.id}>
                                        <div className="card overflow-hidden">
                                            <Image src={post.image} className="card-img" alt="course image" />

                                            <div className="bg-overlay bg-dark opacity-7" />

                                            <div className="card-img-overlay d-flex flex-column">
                                                <div className="d-flex justify-content-between">
                                                    {post.badgeLeft && (
                                                        <span className={`badge ${getBadgeClass(post.badgeLeft)}`}>
                                                            {post.badgeLeft}
                                                        </span>
                                                    )}
                                                    {post.badgeRight && (
                                                        <span className={`badge ${getBadgeClass(post.badgeRight)}`}>
                                                            {post.badgeRight}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="w-100 mt-auto">
                                                    <h6 className="card-title mb-1 text-truncate-2">
                                                        <Link href={post.link} className="text-white stretched-link">
                                                            {post.title}
                                                        </Link>
                                                    </h6>

                                                    <div className="hstack gap-2 align-items-center mt-1">
                                                        <div className="avatar avatar-xs">
                                                            {post.avatar ? (
                                                                <Image
                                                                    src={post.avatar}
                                                                    className="avatar-img rounded-circle"
                                                                    alt="avatar"
                                                                />
                                                            ) : (
                                                                <div className="avatar-img rounded-circle bg-white position-relative">
                                                                    <span className="text-info position-absolute top-50 start-50 translate-middle">
                                                                        {post.initials}
                                                                    </span>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <h6 className="mb-0 text-white fw-light">{post.authorName}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <div className="d-flex justify-content-between position-absolute top-50 start-0 w-100 px-2">
                                <button className="btn btn-white btn-icon rounded-circle mb-0 swiper-button-prev">
                                    <BiLeftArrowAlt />
                                </button>
                                <button className="btn btn-white btn-icon rounded-circle mb-0 swiper-button-next">
                                    <BiRightArrowAlt />
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;
