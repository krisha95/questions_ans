"use client"
import RightSide from "@/app/(demo)/que-ans/index-v3/component/RightSide"
import avatar1 from "@/assets/images/avatar/01.jpg"
import logoLight from "@/assets/images/logo-light.svg"
import logo from "@/assets/images/logo.svg"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react"
import {
    Button,
    Container,
    Dropdown,
    Form,
    FormControl,
    OverlayTrigger,
    Tooltip
} from 'react-bootstrap'
import {
    BiInfoCircle
} from "react-icons/bi"
import {
    BsBellFill,
    BsFillHouseDoorFill,
    BsFillPatchQuestionFill,
    BsGear,
    BsGlobe2,
    BsPerson,
    BsPower,
    BsReceiptCutoff,
    BsSearch
} from 'react-icons/bs'

const Navbar2 = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    const [expanded, setExpanded] = useState(false)

    return (
        <header className="header-sticky header-absolute bg-mode">
            <nav className="navbar navbar-expand-lg">
                <Container>

                    <div>
                        <button
                            className="navbar-toggler p-2"
                            type="button"
                            onClick={() => setExpanded(!expanded)}
                            aria-expanded={expanded}
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-animation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            <span className="text-body small d-none d-sm-inline-block ms-2">Menu</span>
                        </button>

                        <div className={`navbar-collapse collapse ${expanded ? 'show' : ''}`} id="navbarCollapse">
                            <ul className="navbar-nav navbar-nav-scroll text-center">
                                <li className="nav-item">
                                    <OverlayTrigger placement='bottom' overlay={<Tooltip>Home</Tooltip>}>
                                        <Link className="nav-link active" href="/que-ans/index-v3">
                                            <BsFillHouseDoorFill className="fs-4" />
                                            <span className="nav-text"> Home </span>
                                        </Link>
                                    </OverlayTrigger>
                                </li>

                                <li className="nav-item">
                                    <OverlayTrigger placement='bottom' overlay={<Tooltip>Follow</Tooltip>}>
                                        <Link className="nav-link" href="/profile-follower">
                                            <BsReceiptCutoff className="fs-4" />
                                            <span className="nav-text"> Follow </span>
                                        </Link>
                                    </OverlayTrigger>
                                </li>

                                <li className="nav-item">
                                    <OverlayTrigger placement='bottom' overlay={<Tooltip>Ask Questions</Tooltip>}>
                                        <Link className="nav-link" href="/que-ans/ask-question">
                                            <BsFillPatchQuestionFill className="fs-4" />
                                            <span className="nav-text"> Ask Questions </span>
                                        </Link>
                                    </OverlayTrigger>
                                </li>

                                <li className="nav-item">
                                    <OverlayTrigger placement='bottom' overlay={<Tooltip>Language</Tooltip>}>
                                        <Link className="nav-link" href="#">
                                            <BsGlobe2 className="fs-4" />
                                            <span className="nav-text"> Language </span>
                                        </Link>
                                    </OverlayTrigger>
                                </li>

                                <li className="nav-item">
                                    <OverlayTrigger placement='bottom' overlay={<Tooltip>Notifications</Tooltip>}>
                                        <Link className="nav-link" href="/notification">
                                            <div className="notif-blink position-relative d-inline-block">
                                                <span className="badge-notif animation-blink end-0"></span>
                                                <BsBellFill className="fs-4" />
                                            </div>
                                            <span className="nav-text"> Notifications </span>
                                        </Link>
                                    </OverlayTrigger>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="d-flex text-center">
                        <Link className="navbar-brand" href="/que-ans/index">
                            <Image className="navbar-brand-item light-mode-item" src={logo} alt="logo" width={100} />
                            <Image className="navbar-brand-item dark-mode-item" src={logoLight} alt="logo" width={100} />
                        </Link>
                    </div>

                    <ul className="nav ms-sm-3 flex-nowrap align-items-center">
                        <li className="nav-item dropdown nav-search">
                            <Dropdown autoClose="outside" align="end" className="no-after-icon">
                                <Dropdown.Toggle as={Link} href="#" className="nav-link" id="navSearch">
                                    <BsSearch className="fs-4" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="shadow rounded p-2">
                                    <Form className="input-group">
                                        <FormControl
                                            type="search"
                                            placeholder="Search..."
                                            className="border-primary"
                                            aria-label="Search"
                                        />
                                        <Button type="submit" className="btn-primary m-0">
                                            Search
                                        </Button>
                                    </Form>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>

                        <li className="dropdown dropdown-animation d-flex ms-1 ms-sm-3">
                            <Dropdown autoClose="outside" align="end" className="no-after-icon">
                                <Dropdown.Toggle as={Link} href="#" className="avatar avatar-sm p-0" id="profileDropdown">
                                    <Image className="avatar-img rounded-circle" src={avatar1} alt="avatar" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-animation shadow pt-3">
                                    <li className="px-3">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar me-3">
                                                <Image className="avatar-img rounded-circle shadow" src={avatar1} alt="avatar" />
                                            </div>
                                            <div>
                                                <Link className="h6" href="#">Lori Ferguson</Link>
                                                <p className="small m-0">example@gmail.com</p>
                                            </div>
                                        </div>
                                        <hr />
                                    </li>
                                    <li><Link className="dropdown-item" href="/profile"><BsPerson className="fa-fw me-2" />Edit Profile</Link></li>
                                    <li><Link className="dropdown-item" href="/settings"><BsGear className="fa-fw me-2" />Account Settings</Link></li>
                                    <li><Link className="dropdown-item" href="/help-center/index"><BiInfoCircle className="fa-fw me-2" />Help</Link></li>
                                    <li><Link className="dropdown-item bg-danger-soft-hover" href="/auth/signin"><BsPower className="fa-fw me-2" />Sign Out</Link></li>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>

                        <li className="nav-item d-none d-md-block">
                            <Button
                                className="btn-sm mb-0 ms-3"
                                variant="primary"
                                onClick={() => setShowSidebar(true)}
                            >
                                Ask Question
                            </Button>
                        </li>
                    </ul>
                </Container>
            </nav>

            <RightSide show={showSidebar} handleClose={() => setShowSidebar(false)} />
        </header>
    )
}

export default Navbar2
