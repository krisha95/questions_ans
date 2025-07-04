"use client"
import logoLight from "@/assets/images/logo-light.svg"
import logo from "@/assets/images/logo.svg"
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BsCardText, BsCloudDownloadFill, BsLifePreserver } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import { FaToggleOff } from 'react-icons/fa6'
import CustomeTheme from '../CustomeTheme'
import AskQuestionModal from './component/AskQuestionModal'
import Notification from './component/Notification'
import { Container, NavbarCollapse } from "react-bootstrap"

const HomeNavbar = () => {
    const [showAskModal, setShowAskModal] = useState(false)
    const [openMenu, setopenMenu] = useState(false)

    useEffect(() => {
        const isDesktop = () => window.innerWidth >= 992;

        const handleMouseEnter = (dropdown: Element) => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            const menu = dropdown.querySelector('.dropdown-menu');

            dropdown.classList.add('show');
            toggle?.classList.add('show');
            menu?.classList.add('show');
            menu?.setAttribute('data-bs-popper', 'static');
        };

        const handleMouseLeave = (dropdown: Element) => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            const menu = dropdown.querySelector('.dropdown-menu');

            dropdown.classList.remove('show');
            toggle?.classList.remove('show');
            menu?.classList.remove('show');
            menu?.removeAttribute('data-bs-popper');
        };

        const dropdowns = document.querySelectorAll('.dropdown');

        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');

            if (isDesktop()) {
                dropdown.addEventListener('mouseenter', () => handleMouseEnter(dropdown));
                dropdown.addEventListener('mouseleave', () => handleMouseLeave(dropdown));
            }

            toggle?.addEventListener('click', (e) => {
                if (isDesktop()) return;

                e.preventDefault();
                const menu = dropdown.querySelector('.dropdown-menu');
                const isOpen = dropdown.classList.contains('show');

                const siblings = Array.from(dropdown.parentElement?.children || []).filter(
                    el => el !== dropdown && el.classList.contains('dropdown')
                );

                siblings.forEach(sibling => {
                    sibling.classList.remove('show');
                    sibling.querySelector('.dropdown-toggle')?.classList.remove('show');
                    sibling.querySelector('.dropdown-menu')?.classList.remove('show');
                });

                if (!isOpen) {
                    dropdown.classList.add('show');
                    toggle.classList.add('show');
                    menu?.classList.add('show');
                    menu?.setAttribute('data-bs-popper', 'static');
                } else {
                    dropdown.classList.remove('show');
                    toggle.classList.remove('show');
                    menu?.classList.remove('show');
                    menu?.removeAttribute('data-bs-popper');
                }
            });
        });

        return () => {
            dropdowns.forEach(dropdown => {
                dropdown.replaceWith(dropdown.cloneNode(true));
            });
        };
    }, []);
    const demoDropdownItems = [
        {
            title: "Q&A",
            items: [
                { name: "Home Q&A v1", link: "/que-ans/index" },
                { name: "Home Q&A v2", link: "/que-ans/index-v2" },
                { name: "Home Q&A v3", link: "/que-ans/index-v3" },
                { name: "Answer Detail", link: "/que-ans/detail" },
                { name: "Answer Detail v2", link: "/que-ans/detail-v2" },
                { name: "Answer Detail Minimal", link: "/que-ans/detail-minimal" },
                { name: "Ask Question", link: "/que-ans/ask-question" },
            ],
        },
        {
            title: "Forum",
            items: [
                { name: "Home Forum", link: "/forum/index-forum" },
                { name: "Forum Category", link: "/forum/forum-category" },
                { name: "Forum Details", link: "/forum/forum-detail" },
            ],
        },
        {
            title: "Help Center",
            items: [
                { name: "Home Help Center", link: "/help-center/index" },
                { name: "Home Help Center v2", link: "/help-center/index-v2" },
                { name: "Help Details", link: "/help-center/detail" },
                { name: "Help Details v2", link: "/help-center/detail-v2" },
                { name: "Support", link: "/help-center/support" },
                { name: "FAQs", link: "/help-center/faqs" },
            ],
        },
        {
            title: "Support Ticket",
            items: [
                { name: "Home Ticket", link: "/tickets/index-ticket" },
                { name: "Ticket List", link: "/tickets/ticket-list" },
                { name: "Ticket Reply", link: "/tickets/ticket-reply" },
                { name: "Create Ticket", link: "/tickets/ticket-create" },
            ],
        },
    ];

    const accountDropdownItems = [
        {
            name: "Profile",
            position: "dropstart",
            subItems: [
                { name: "About", link: "/profile" },
                { name: "Post", link: "/profile-post" },
                { name: "Question", link: "/profile-question" },
                { name: "Follower", link: "/profile-follower" },
                { name: "Achievement", link: "/profile-achievement" }
            ]
        },
        {
            name: "Authentication",
            position: "dropstart",
            subItems: [
                { name: "Sign in", link: "/auth/signin" },
                { name: "Sing up", link: "/auth/signup" },
                { name: "Forgot password", link: "/auth/forgot-password" }
            ]
        },
        { name: "Error 404", link: "/error" },
        { name: "Coming soon", link: "/coming-soon" },
        { name: "Settings", link: "/settings" },
        { name: "Terms & Condition", link: "/terms-and-condition" }
    ];

    const pagesDropdownItems = [
        { name: "About", link: "/about" },
        { name: "Contact Us", link: "/contact" },
        {
            name: "Category",
            subItems: [
                { name: "Category", link: "/category" },
                { name: "Category Detail", link: "/category/detail" },
                { name: "Category Post", link: "/category-post" },
                { name: "Category Question", link: "/category-question" }
            ]
        },
        { name: "Group", link: "/group" },
        { name: "Group Detail", link: "/group-detail" },
        { name: "Communities", link: "/communities" },
        { name: "Notification", link: "/notification" },
        { name: "Blog", link: "/blog" },
        { name: "Blog Detail", link: "/blog-detail" }
    ];


    return (
        <header className="header-sticky header-absolute bg-mode">
            <nav className="navbar navbar-expand-xl">
                <Container>
                    <Link className="navbar-brand me-0" href="/que-ans/index">
                        <Image className="light-mode-item navbar-brand-item" src={logo} alt="logo" width={100} />
                        <Image className="dark-mode-item navbar-brand-item" src={logoLight} alt="logo" width={100} />
                    </Link>

                    <NavbarCollapse id="navbarCollapse" className={openMenu ? "show" : ""}>
                        <div className="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
                            <div className="nav-item w-100 input-bg-light">
                                <form className="position-relative">
                                    <input className="form-control pe-5" type="search" placeholder="Type search words" aria-label="Search" />
                                    <button className="btn btn-link py-0 position-absolute top-50 end-0 translate-middle-y" type="submit">
                                        <FaSearch className="fas fs-6 heading-color" />
                                    </button>
                                </form>
                            </div>
                        </div>

                        <ul className="navbar-nav navbar-nav-scroll dropdown-hover ms-auto ">

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" data-bs-auto-close="outside" data-bs-toggle="dropdown">
                                    Demos
                                </Link>

                                <ul className="dropdown-menu">
                                    {demoDropdownItems.map((section, index) => (
                                        <li className="dropdown dropend" key={index}>
                                            <Link
                                                className="dropdown-item dropdown-toggle"
                                                data-bs-auto-close="outside"
                                                data-bs-toggle="dropdown"
                                                href="#"
                                            >
                                                {section.title}
                                            </Link>
                                            <ul className="dropdown-menu">
                                                {section.items.map((item, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link className="dropdown-item" href={item.link}>
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}

                                    <li><Link className="dropdown-item" href="/index-discussion">Index Discussion</Link></li>
                                    <li className="dropdown-divider"></li>
                                    <li>
                                        <Link className="dropdown-item" href="https://q&a.webestica.com/rtl/" target="_blank">
                                            <FaToggleOff className="me-2" />RTL demo
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="https://support.webestica.com/" target="_blank">
                                            <BsLifePreserver className="me-2" />Support
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="docs/index.html" target="_blank">
                                            <BsCardText className="me-2" />Documentation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="https://themes.getbootstrap.com/store/webestica/" target="_blank">
                                            <BsCloudDownloadFill className="text-success fa-fw  me-2" />Buy Q&A!
                                        </Link>
                                    </li>

                                </ul>

                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                    Pages
                                </Link>
                                <ul className="dropdown-menu">
                                    {pagesDropdownItems.map((item, index) => {
                                        if (item.subItems) {
                                            return (
                                                <li className="dropdown dropend" key={index}>
                                                    <Link className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                                        {item.name}
                                                    </Link>
                                                    <ul className="dropdown-menu">
                                                        {item.subItems.map((subItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                <Link className="dropdown-item" href={subItem.link}>
                                                                    {subItem.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            );
                                        } else {
                                            return (
                                                <li key={index}>
                                                    <Link className="dropdown-item" href={item.link}>
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            );
                                        }
                                    })}
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                    Account
                                </Link>
                                <ul className="dropdown-menu">
                                    {accountDropdownItems.map((item, index) => {
                                        if (item.subItems) {
                                            return (
                                                <li className={`dropdown ${item.position}`} key={index}>
                                                    <Link className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                                        {item.name}
                                                    </Link>
                                                    <ul className="dropdown-menu">
                                                        {item.subItems.map((subItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                <Link className="dropdown-item" href={subItem.link}>
                                                                    {subItem.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            );
                                        }
                                        return (
                                            <li key={index}>
                                                <Link className="dropdown-item" href={item.link}>
                                                    {item.name}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" href="/contact">Contact us</Link>
                            </li>
                        </ul>
                    </NavbarCollapse>

                    <ul className="nav align-items-center dropdown-hover ms-sm-2">
                        <CustomeTheme />
                        <Notification />
                        <li className="nav-item ms-2 d-none d-sm-block">
                            <button onClick={() => setShowAskModal(true)} className="btn btn-sm btn-primary mb-0">
                                Ask question
                            </button>
                        </li>
                        <li className="nav-item ms-2">
                            <button onClick={() => setopenMenu(true)} className="navbar-toggler ms-sm-3 p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-animation">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </button>
                        </li>
                    </ul>
                </Container>
            </nav>
            <AskQuestionModal show={showAskModal} onHide={() => setShowAskModal(false)} />
        </header>
    )
}

export default HomeNavbar