import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "@/assets/images/logo.svg"
import logoLight from "@/assets/images/logo-light.svg"
import avatar1 from "@/assets/images/avatar/01.jpg"

const Navbar2 = () => {
    return (
        <header className="header-sticky header-absolute bg-mode">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div>
                        <button className="navbar-toggler p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-animation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            <span className="text-body small d-none d-sm-inline-block ms-2">Menu</span>
                        </button>


                        <div className="navbar-collapse collapse" id="navbarCollapse">
                            <ul className="navbar-nav navbar-nav-scroll text-center">

                                <li className="nav-item">
                                    <a className="nav-link active" href="index-v3.html" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Home">
                                        <i className="bi bi-house-door-fill fs-4"></i>
                                        <span className="nav-text"> Home </span>
                                    </a>
                                </li>


                                <li className="nav-item">
                                    <a className="nav-link" href="my-profile-follower.html" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Follow">
                                        <i className="bi bi-receipt-cutoff fs-4"></i>
                                        <span className="nav-text"> Follow </span>
                                    </a>
                                </li>


                                <li className="nav-item">
                                    <a className="nav-link" href="ask-question.html" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ask Questions">
                                        <i className="bi bi-patch-question-fill fs-4"></i>
                                        <span className="nav-text"> Ask Questions </span>
                                    </a>
                                </li>


                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Language">
                                        <i className="bi bi-globe2 fs-4"></i>
                                        <span className="nav-text"> Language </span>
                                    </a>
                                </li>


                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="notification.html" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Notifications">
                                        <div className="notif-blink position-relative d-inline-block">
                                            <span className="badge-notif animation-blink end-0"></span>
                                            <i className="bi bi-bell-fill fs-4"> </i>
                                        </div>
                                        <span className="nav-text"> Notifications </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="d-flex text-center">
                        <Link className="navbar-brand" href="index.html" >
                            <Image className="navbar-brand-item light-mode-item" src={logo} alt="logo" />
                            <Image className="navbar-brand-item dark-mode-item" src={logoLight} alt="logo" />
                        </Link>
                    </div>


                    <ul className="nav ms-sm-3 flex-nowrap align-items-center">

                        <li className="nav-item dropdown nav-search">
                            <a className="nav-link" role="button" href="#" id="navSearch" data-bs-toggle="dropdown" aria-expanded="true" data-bs-auto-close="outside" data-bs-display="static">
                                <i className="bi bi-search fs-4"> </i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end shadow rounded p-2" aria-labelledby="navSearch" data-bs-popper="none">
                                <form className="input-group">
                                    <input className="form-control border-primary" type="search" placeholder="Search..." aria-label="Search" />
                                    <button className="btn btn-primary m-0" type="submit">Search</button>
                                </form>
                            </div>
                        </li>


                        <li className="dropdown dropdown-animation d-flex ms-1 ms-sm-3">
                            <a className="avatar avatar-sm p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                                <Image className="avatar-img rounded-circle" src={avatar1} alt="avatar" />
                            </a>
                            <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">

                                <li className="px-3">
                                    <div className="d-flex align-items-center">

                                        <div className="avatar me-3">
                                            <Image className="avatar-img rounded-circle shadow" src={avatar1} alt="avatar" />
                                        </div>
                                        <div>
                                            <a className="h6" href="#">Lori Ferguson</a>
                                            <p className="small m-0">example@gmail.com</p>
                                        </div>
                                    </div>
                                    <hr />
                                </li>

                                <li><a className="dropdown-item" href="my-profile.html"><i className="bi bi-person fa-fw me-2"></i>Edit Profile</a></li>
                                <li><a className="dropdown-item" href="setting.html"><i className="bi bi-gear fa-fw me-2"></i>Account Settings</a></li>
                                <li><a className="dropdown-item" href="index-help-center.html"><i className="bi bi-info-circle fa-fw me-2"></i>Help</a></li>
                                <li><a className="dropdown-item bg-danger-soft-hover" href="signin.html"><i className="bi bi-power fa-fw me-2"></i>Sign Out</a></li>
                            </ul>
                        </li>


                        <li className="nav-item d-none d-md-block">
                            <button className="btn btn-sm btn-primary mb-0 ms-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Ask Question</button>
                        </li>
                    </ul>
                </div>
            </nav>

        </header >
    )
}

export default Navbar2