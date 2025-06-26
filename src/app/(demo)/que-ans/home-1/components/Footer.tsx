"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaPinterest, FaXTwitter } from 'react-icons/fa6'
import AppStore from "@/assets/images/elements/app-store.svg"
import GooglePlay from "@/assets/images/elements/google-play.svg"
import logo from "@/assets/images/logo-light.svg"
import { Col, Row } from 'react-bootstrap'

type FooterLink = {
    label: string
    href: string
}

type FooterColumn = {
    title: string
    links: FooterLink[]
}

const socialLinks = [
    { icon: <FaFacebook />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaXTwitter />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
    { icon: <FaPinterest />, href: "#" },
    { icon: <FaGithub />, href: "#" },
]

const footerColumns: FooterColumn[] = [
    {
        title: "Company",
        links: [
            { label: "About", href: "/about" },
            { label: "Contact us", href: "/contact-us" },
            { label: "News and Blogs", href: "/blog" },
            { label: "Community", href: "/communities" },
        ]
    },
    {
        title: "Pages",
        links: [
            { label: "Questions", href: "/index-v2" },
            { label: "Forum", href: "/index-forum" },
            { label: "Help center", href: "/index-help-center" },
            { label: "Support ticket", href: "/index-ticket" },
            { label: "Discussion", href: "/index-discussion" },
        ]
    },
    {
        title: "Legal",
        links: [
            { label: "Terms of Use", href: "/terms-and-condition" },
            { label: "Privacy Policy", href: "/terms-and-condition" },
            { label: "Setting", href: "/settings" },
            { label: "Error 404", href: "/error" },
            { label: "Cookies", href: "/terms-and-condition" },
        ]
    }
]

const Footer = () => {
    return (
        <footer className="bg-dark py-5" data-bs-theme="dark">
            <div className="container">
                <Row className="g-4 pt-3 pb-4">
                    <Col md={3}>
                        <Link href="/index">
                            <Image className="h-40px" src={logo} alt="logo" />
                        </Link>
                    </Col>

                    <Col md={5}>
                        <p className="mb-0">Q&A Comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper up its enjoyment agreeable depending</p>
                    </Col>

                    <Col md={4}>
                        <ul className="list-inline mb-0 text-lg-end text-primary-hover">
                            {socialLinks.map((item, idx) => (
                                <li key={idx} className="list-inline-item me-3 fs-4">
                                    <Link href={item.href}>{item.icon}</Link>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>

                <hr className="mt-0 mb-4" />

                <Row className="g-4">
                    <Col lg={8}>
                        <Row className="g-4">
                            {footerColumns.map((col, i) => (
                                <Col key={i} className="col-6 col-sm-4">
                                    <h5 className="mb-2 mb-md-4 text-white">{col.title}</h5>
                                    <ul className="nav flex-column text-primary-hover">
                                        {col.links.map((link, j) => (
                                            <li key={j} className="nav-item">
                                                <Link href={link.href} className="nav-link">{link.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </Col>
                            ))}
                        </Row>
                    </Col>

                    <Col lg={4} className="ms-auto">
                        <h5 className="mb-2 mb-md-4 text-white">Get an application</h5>
                        <Row className="g-3">
                            <Col xs={6} sm={4} md={3} lg={4}>
                                <Link href="#!">
                                    <Image src={GooglePlay} className="border rounded" alt="Play-store" />
                                </Link>
                            </Col>
                            <Col xs={6} sm={4} md={3} lg={4}>
                                <Link href="#!">
                                    <Image src={AppStore} className="border rounded" alt="app-store" />
                                </Link>
                            </Col>
                        </Row>
                        <p className="text-primary-hover mt-4">
                            Copyrights <Link href="#" className="heading-color">© {new Date().getFullYear()} Q&A</Link>. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}

export default Footer
