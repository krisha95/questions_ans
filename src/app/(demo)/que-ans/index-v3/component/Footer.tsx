"use client"
import grFlag from "@/assets/images/flags/gr.svg";
import spFlag from "@/assets/images/flags/sp.svg";
import ukFlag from "@/assets/images/flags/uk.svg";
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import { FaGlobe } from 'react-icons/fa6';

type FooterLink = {
    label: string;
    link: string;
};

type FooterSection = {
    title?: string;
    links: FooterLink[];
};

type Language = {
    name: string;
    image: StaticImageData;
};

const footerSections: FooterSection[] = [
    {
        links: [
            { label: 'News and Blogs', link: '/blog' },
            { label: 'About', link: '/about' },
            { label: 'Contact us', link: '/contact-us' },
            { label: 'Community', link: '/ communities' },
        ],
    },
    {
        links: [
            { label: 'Questions', link: '/index-v2' },
            { label: 'Forum', link: '/index-forum' },
            { label: 'Help center', link: '/index-help-center' },
            { label: 'Support ticket', link: '/index-ticket' },
            { label: 'Discussion', link: '/index-discussion' },
        ],
    },
];

const languages: Language[] = [
    { name: 'English', image: ukFlag },
    { name: 'German', image: grFlag },
    { name: 'French', image: spFlag },
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark pt-5" data-bs-theme="dark">
            <Container>
                <Row className="g-4 justify-content-between">
                    <Col md={7} lg={6}>
                        <Row className="g-4 g-lg-5">
                            {footerSections.map((section, i) => (
                                <Col xs={6} sm={4} key={i}>
                                    <ul className="nav flex-column">
                                        {section.links.map((link, idx) => (
                                            <li className="nav-item" key={idx}>
                                                <Link className="nav-link" href={link.link}>{link.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </Col>
                            ))}
                        </Row>
                    </Col>

                    <Col md={5} lg={4}>
                        <h5 className="text-white">Sign up For All Latest Update</h5>
                        <p className="mb-0">Receive all notifications on our new releases.</p>
                        <form className="mt-3">
                            <div className="input-group input-border">
                                <input
                                    className="form-control form-control-lg"
                                    type="email"
                                    placeholder="Your email address"
                                />
                                <button type="button" className="btn btn-white mb-0">Subscribe!</button>
                            </div>
                        </form>
                    </Col>
                </Row>

                <hr className="my-4" />

                <Row>
                    <Col xs={12}>
                        <div className="d-lg-flex justify-content-between align-items-center text-center pb-4">
                            <p className="text-primary-hover small mb-0">
                                Copyrights <Link href="#" className="text-reset">© {new Date().getFullYear()} Q&A</Link>. All rights reserved.
                            </p>
                            <ul className="nav text-reset justify-content-center justify-content-lg-start mb-0 mt-3 mt-lg-0">
                                <li className="nav-item">
                                    <div className="dropup mt-0 text-center text-sm-end">

                                        <Dropdown drop="up" className="mt-0 text-center text-sm-end">
                                            <Dropdown.Toggle variant="link" className="nav-link small p-0 text-white border-0">
                                                <FaGlobe className="me-2" />
                                                Language
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="min-w-auto">
                                                {languages.map((lang, index) => (
                                                    <Dropdown.Item key={index} href="#" className="d-flex align-items-center">
                                                        <Image
                                                            src={lang.image}
                                                            alt={lang.name}
                                                            width={16}
                                                            height={12}
                                                            className="me-2"
                                                        />
                                                        {lang.name}
                                                    </Dropdown.Item>
                                                ))}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </li>
                                <li className="nav-item"><Link className="nav-link small" href="#">Terms of use</Link></li>
                                <li className="nav-item"><Link className="nav-link small pe-0" href="#">Privacy policy</Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
