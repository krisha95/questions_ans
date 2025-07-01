'use client'
import React from 'react'
import Link from 'next/link'
import { Col } from 'react-bootstrap'

type Props = {
    activeTab: string
    setActiveTab: (tab: string) => void
}

const tabList = [
    { key: 'account', label: 'Account' },
    { key: 'privacy', label: 'Privacy' },
    { key: 'email', label: 'Email & Notification' },
    { key: 'display', label: 'Display' },
    { key: 'deactivate', label: 'Deactivate Account' },
]

const footerLinks = [
    { href: "/about", label: "About" },
    { href: "/index-ticket", label: "Ticket" },
    { href: "#", label: "Terms" },
    { href: "/forum/index-forum", label: "Forum" },
    { href: "/help-center/detail", label: "Help center" },
    { href: "/index-discussion", label: "Discussion" },
    { href: "/blog", label: "Blog" },
]

const LeftSide = ({ activeTab, setActiveTab }: Props) => {
    return (
        <Col lg={4} xl={3}>
            <nav className="navbar navbar-light navbar-expand-lg mx-0">
                <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Setting tabs</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body p-0">
                        <div className="card card-body">
                            <ul className="nav nav-tabs nav-pills nav-pills-primary-soft flex-column gap-2 border-0">
                                {tabList.map(tab => (
                                    <li className="nav-item" key={tab.key}>
                                        <button
                                            className={`nav-link mb-0${activeTab === tab.key ? ' active' : ''}`}
                                            style={{border: 'none', textAlign: 'left', width: '100%' }}
                                            onClick={() => setActiveTab(tab.key)}
                                            type="button"
                                        >
                                            {tab.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <ul className="nav justify-content-center mt-4">
                        {footerLinks.map(link => (
                            <li className="nav-item" key={link.href}>
                                <Link className="nav-link small" href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="text-primary-hover text-center small mt-2">
                        Copyrights <Link href="#" className="text-body">©{new Date().getFullYear()} Q&amp;A</Link>.
                    </div>
                </div>
            </nav>
        </Col>
    )
}

export default LeftSide
