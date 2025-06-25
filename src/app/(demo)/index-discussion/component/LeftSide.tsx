import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ads2 from "@/assets/images/advertisement/02.jpg";

import {
    BsChatSquareDots,
    BsChatLeftDotsFill,
    BsFire,
    BsPatchQuestionFill,
    BsBarChart,
    BsLifePreserver,
} from 'react-icons/bs';
import { Col } from 'react-bootstrap';

const categories = [
    { label: "View all discussion", icon: <BsChatSquareDots />, href: "#", active: true },
    { label: "Forum", icon: <BsChatLeftDotsFill />, href: "#" },
    { label: "General", icon: <BsFire />, href: "#" },
    { label: "Q&A", icon: <BsPatchQuestionFill />, href: "#" },
    { label: "Polls", icon: <BsBarChart />, href: "#" },
    { label: "Help center", icon: <BsLifePreserver />, href: "#" },
];

const LeftSide = () => {
    return (
        <Col xl={3}>
            <nav className="navbar navbar-light navbar-expand-xl mx-0">
                <div
                    className="offcanvas offcanvas-end p-3 p-xl-0 show"
                    tabIndex={-1}
                    id="offcanvasNavbar"
                    style={{ visibility: 'visible' }}
                >
                    <div className="offcanvas-header justify-content-end pt-0 pe-0">
                        <button
                            type="button"
                            className="btn-close text-reset"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div className="offcanvas-body p-0 d-block">
                        <div className="card p-0">
                            <div className="card-header border-bottom">
                                <h5 className="mb-0">Categories</h5>
                            </div>

                            <div className="card-body">
                                <ul className="nav nav-link-sidebar nav-sidebar-bg-light flex-column gap-2">
                                    {categories.map((cat, index) => (
                                        <li className="nav-item" key={index}>
                                            <Link
                                                className={`nav-link d-flex align-items-center ${cat.active ? 'active' : ''}`}
                                                href={cat.href}
                                            >
                                                <span className="me-2">{cat.icon}</span>
                                                {cat.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="card bg-transparent mt-4 border-0">
                            <Link href="#" className="position-relative">
                                <Image src={ads2} className="card-img" alt="Advertisement" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title text-white">Advertisement</h5>
                                </div>
                            </Link>
                            <div className="text-end text-body small mt-1">
                                ads via <Link href="#" className="text-primary-hover"><u>Bootstrap</u></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Col>
    );
};

export default LeftSide;
