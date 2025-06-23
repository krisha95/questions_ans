"use client";
import avtar4 from "@/assets/images/avatar/04.jpg";
import avtar5 from "@/assets/images/avatar/05.jpg";
import avtar12 from "@/assets/images/avatar/12.jpg";
import Image from "next/image";
import Link from "next/link";
import { BiArrowToLeft, BiLeftArrowAlt, BiRightArrowAlt, BiX } from "react-icons/bi";
import { FaAward, FaCheckCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type ProfileType = {
    id: number;
    name: string;
    avatar?: any;
    initials?: string;
    profileUrl: string;
    isGroup?: boolean;
    isVerified?: boolean;
    awards: { type: "bronze" | "silver" | "gold"; value: string }[];
    followers: string;
    posts: string;
};

const profiles: ProfileType[] = [
    {
        id: 1,
        name: "Dennis Barrett",
        avatar: avtar4,
        profileUrl: "my-profile.html",
        awards: [
            { type: "bronze", value: "550+" },
            { type: "silver", value: "250+" },
            { type: "gold", value: "120+" },
        ],
        followers: "77.5K",
        posts: "256",
    },
    {
        id: 2,
        name: "Frances Guerrero",
        avatar: avtar5,
        profileUrl: "my-profile.html",
        isVerified: true,
        awards: [
            { type: "bronze", value: "1.3k" },
            { type: "silver", value: "586" },
            { type: "gold", value: "120" },
        ],
        followers: "99.5K",
        posts: "874",
    },
    {
        id: 3,
        name: "Creative Group",
        initials: "CG",
        profileUrl: "group-detail.html",
        isGroup: true,
        awards: [
            { type: "bronze", value: "2.5K" },
            { type: "silver", value: "686+" },
            { type: "gold", value: "358+" },
        ],
        followers: "1.4M",
        posts: "1258",
    },
    {
        id: 4,
        name: "Samuel Bishop",
        avatar: avtar12,
        profileUrl: "my-profile.html",
        awards: [
            { type: "bronze", value: "550+" },
            { type: "silver", value: "250+" },
            { type: "gold", value: "120+" },
        ],
        followers: "9.6K",
        posts: "458",
    },
];

const Profile = () => {
    return (
        <div className="card p-3 p-sm-4">
            <div className="card-header d-sm-flex justify-content-sm-between text-center text-sm-start p-0">
                <h5 className="mb-2 mb-sm-0">People, You May Know</h5>
                <Link href="#" className="btn btn-link p-0 mb-0">
                    See all
                </Link>
            </div>
            <div className="card-body px-0 pb-0 position-relative">
                <Swiper
                    spaceBetween={24}
                    slidesPerView={1}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }}
                    modules={[Navigation]}
                    breakpoints={{
                        576: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                    }}
                >

                    {profiles.map((profile) => (
                        <SwiperSlide key={profile.id}>
                            <div className="card border text-center p-3 h-100">
                                <div className="position-absolute end-0 top-0 p-2">
                                    <button
                                        type="button"
                                        className="btn btn-link btn-lg text-primary-hover mb-0 p-0"
                                    >
                                        <BiX size={20} />
                                    </button>
                                </div>
                                <div className="card-body p-0">
                                    <div className="avatar avatar-xl">
                                        {profile.avatar ? (
                                            <Link href="#!">
                                                <Image
                                                    className="avatar-img rounded-circle"
                                                    src={profile.avatar}
                                                    alt={profile.name}
                                                />
                                            </Link>
                                        ) : (
                                            <a href="#!">
                                                <div
                                                    className="avatar-img rounded-circle bg-info position-relative"
                                                    style={{ width: 64, height: 64 }}
                                                >
                                                    <span className="text-white position-absolute top-50 start-50 translate-middle fw-bold">
                                                        {profile.initials}
                                                    </span>
                                                </div>
                                            </a>
                                        )}
                                    </div>
                                    <h6 className="card-title mb-0 mt-2">
                                        <a href={profile.profileUrl}>
                                            {profile.name}
                                            {profile.isVerified && (
                                                <FaCheckCircle className="ms-1 text-info" />
                                            )}
                                        </a>
                                    </h6>
                                    <div className="hstack gap-3 mt-2 justify-content-center small">
                                        {profile.awards.map((award, idx) => (
                                            <span className="mb-0" key={idx}>
                                                <FaAward className={`me-1 text-${award.type}`} />
                                                {award.value}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="d-flex justify-content-between mt-2">
                                        <div>
                                            <small>Followers</small>
                                            <h6 className="mb-0">{profile.followers}</h6>
                                        </div>
                                        <div>
                                            <small>Post</small>
                                            <h6 className="mb-0">{profile.posts}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer p-0 pt-2 border-0">
                                    <button className="btn btn-sm btn-primary-soft w-100 mb-0">
                                        Follow
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="d-flex justify-content-between position-absolute top-50 start-0 w-100">
                    <button className="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-prev">
                        <BiLeftArrowAlt />
                    </button>
                    <button className="btn btn-dark btn-icon rounded-circle mb-0 swiper-button-next">
                        <BiRightArrowAlt />
                    </button>
                </div>
            </div>

        </div >
    );
};

export default Profile;