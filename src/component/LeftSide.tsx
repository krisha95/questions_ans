"use client"

import Link from "next/link";
import { useState } from "react";
import { Button, Collapse, Nav, NavLink } from "react-bootstrap"
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const LeftSide = () => {
    const [openCategory, setOpenCategory] = useState(false);

    return (
        <div className="col-xxl-2">
            <nav className="navbar navbar-light navbar-expand-xxl mx-0">
                <div className="offcanvas offcanvas-end p-3 p-xxl-0" tabIndex={-1} id="offcanvasNavbar">
                    <div className="offcanvas-header justify-content-end pt-0 pe-0">

                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div className="offcanvas-body p-0 d-block">

                        <ul className="nav nav-link-sidebar flex-column gap-2">


                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center active" href="/que-ans/index">
                                    <span className="nav-icon">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 13.2L5 11.6M21 13.2L19 11.6M3 9.7L9.7511 4.29912C10.7055 3.53562 11.1827 3.15387 11.7309 3.07943C11.9095 3.05519 12.0905 3.05519 12.2691 3.07943C12.8173 3.15387 13.2945 3.53562 14.2489 4.29912L21 9.7M5 11.6L5.33333 11.3333L9.7511 7.79912C10.7055 7.03562 11.1827 6.65387 11.7309 6.57943C11.9095 6.55519 12.0905 6.55519 12.2691 6.57943C12.8173 6.65387 13.2945 7.03562 14.2489 7.79912L18.6667 11.3333L19 11.6M5 11.6V18.625C5 19.9367 6.06332 21 7.375 21V21C8.68668 21 9.75 19.9367 9.75 18.625V17.5357C9.75 16.2931 10.7574 15.2857 12 15.2857V15.2857C13.2426 15.2857 14.25 16.2931 14.25 17.5357V18.625C14.25 19.9367 15.3133 21 16.625 21V21C17.9367 21 19 19.9367 19 18.625V11.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    Home
                                </Link>
                            </li>


                            <div className="nav-item">
                                <Button
                                    onClick={() => setOpenCategory(!openCategory)}
                                    aria-controls="category-collapse"
                                    aria-expanded={openCategory}
                                    variant="link"
                                    className="nav-link d-flex align-items-center text-start w-100"
                                >
                                    <span className="nav-icon me-2">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 4C3 3.44772 3.44772 3 4 3H9.5C10.0523 3 10.5 3.44772 10.5 4V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H4C3.44772 10.5 3 10.0523 3 9.5V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                            <path d="M3 14.5C3 13.9477 3.44772 13.5 4 13.5H9.5C10.0523 13.5 10.5 13.9477 10.5 14.5V20C10.5 20.5523 10.0523 21 9.5 21H4C3.44772 21 3 20.5523 3 20V14.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                            <path d="M13.5 4C13.5 3.44772 13.9477 3 14.5 3H20C20.5523 3 21 3.44772 21 4V9.5C21 10.0523 20.5523 10.5 20 10.5H14.5C13.9477 10.5 13.5 10.0523 13.5 9.5V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                            <path d="M13.5 14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H20C20.5523 13.5 21 13.9477 21 14.5V20C21 20.5523 20.5523 21 20 21H14.5C13.9477 21 13.5 20.5523 13.5 20V14.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span className="me-4">Categories</span>
                                    <span>{openCategory ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}</span>
                                </Button>

                                <Collapse in={openCategory}>
                                    <Nav className="sidebar-submenu flex-column flex-nowrap ps-3" id="category-collapse">
                                        <NavLink href="/category">Graphics</NavLink>
                                        <NavLink href="/category">Design</NavLink>
                                        <NavLink href="/category">Social media</NavLink>
                                        <NavLink href="/category">Development</NavLink>
                                        <NavLink href="/category">Finance</NavLink>
                                    </Nav>
                                </Collapse>
                            </div>


                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center" href="index-forum.html">
                                    <span className="nav-icon">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 19V10.2C5 7.20021 5 5.70032 5.76393 4.64886C6.01065 4.30928 6.30928 4.01065 6.64886 3.76393C7.70032 3 9.20021 3 12.2 3H17.2C17.9499 3 18.3249 3 18.5878 3.19098C18.6727 3.25266 18.7473 3.32732 18.809 3.41221C19 3.67508 19 4.05005 19 4.8V19M9 7H15M9 10H13M6.5 21H17.5C17.9659 21 18.1989 21 18.3827 20.9239C18.6277 20.8224 18.8224 20.6277 18.9239 20.3827C19 20.1989 19 19.9659 19 19.5V19.5C19 19.0341 19 18.8011 18.9239 18.6173C18.8224 18.3723 18.6277 18.1776 18.3827 18.0761C18.1989 18 17.9659 18 17.5 18H6.5C5.67157 18 5 18.6716 5 19.5V19.5C5 20.3284 5.67157 21 6.5 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    Forum
                                </Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center" href="index-discussion.html">
                                    <span className="nav-icon">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 17V17C4.79086 17 3 15.2091 3 13V10.5C3 8.16537 3 6.99805 3.47231 6.11441C3.84525 5.4167 4.4167 4.84525 5.11441 4.47231C5.99805 4 7.16537 4 9.5 4H14.5C16.8346 4 18.0019 4 18.8856 4.47231C19.5833 4.84525 20.1548 5.4167 20.5277 6.11441C21 6.99805 21 8.16537 21 10.5V10.5C21 12.8346 21 14.0019 20.5277 14.8856C20.1548 15.5833 19.5833 16.1548 18.8856 16.5277C18.0019 17 16.8346 17 14.5 17H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7 17L6 20L12 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6 10.5C6 9.80964 6.55964 9.25 7.25 9.25C7.94036 9.25 8.5 9.80964 8.5 10.5C8.5 11.1904 7.94036 11.75 7.25 11.75C6.55964 11.75 6 11.1904 6 10.5Z" fill="currentColor" />
                                            <path d="M10.75 10.5C10.75 9.80964 11.3096 9.25 12 9.25C12.6904 9.25 13.25 9.80964 13.25 10.5C13.25 11.1904 12.6904 11.75 12 11.75C11.3096 11.75 10.75 11.1904 10.75 10.5Z" fill="currentColor" />
                                            <path d="M15.5 10.5C15.5 9.80964 16.0596 9.25 16.75 9.25C17.4404 9.25 18 9.80964 18 10.5C18 11.1904 17.4404 11.75 16.75 11.75C16.0596 11.75 15.5 11.1904 15.5 10.5Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                    Discussion
                                </Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center" href="answer-detail-v2.html">
                                    <span className="nav-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 5C15.2414 5 18.0852 7.35234 19.9031 9.32973C20.7101 10.2075 21.1136 10.6464 21.2498 11.5556C21.2831 11.7782 21.2831 12.2218 21.2498 12.4444C21.1136 13.3536 20.7101 13.7925 19.9031 14.6703C18.0852 16.6477 15.2414 19 12 19C8.75865 19 5.91481 16.6477 4.09687 14.6703C3.28988 13.7925 2.88639 13.3536 2.7502 12.4444C2.71686 12.2218 2.71686 11.7782 2.7502 11.5556C2.88639 10.6464 3.28988 10.2075 4.09687 9.32973C5.91482 7.35234 8.75865 5 12 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                            <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    Most Visited
                                </Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center" href="#">
                                    <span className="nav-icon">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.4188 7.3279C10.2547 8.21884 10.0989 9.92369 10.0989 10.8298C10.0989 11.7359 10.1401 13.47 10.4188 14.3317M10.4188 7.3279L12.2392 5.73296C14.5032 3.74923 15.6352 2.75737 16.6023 2.95C16.9031 3.00992 17.1861 3.13822 17.4294 3.32498C18.2116 3.9254 18.2116 5.43048 18.2116 8.44064V13.1981C18.2116 16.164 18.2116 17.647 17.4367 18.2475C17.1957 18.4343 16.9145 18.5637 16.6159 18.6254C15.6557 18.8235 14.53 17.8598 12.2784 15.9324C11.2442 15.0471 10.4756 14.3869 10.4188 14.3317M10.4188 7.3279C10.0205 7.30003 8.23114 7.29948 6.50966 7.30616C5.08315 7.31169 4.3699 7.31446 3.85881 7.66956C3.66166 7.80655 3.48933 7.97954 3.35312 8.17722C3 8.68969 3 9.40572 3 10.8378V10.8378C3 12.2766 3 12.9959 3.35526 13.5094C3.49231 13.7075 3.66554 13.8806 3.86376 14.0174C4.37762 14.3722 5.0944 14.3714 6.52794 14.37C8.2438 14.3682 10.0219 14.3594 10.4188 14.3317M5.02851 14.3659L5.00646 19.496C5.0029 20.3255 5.67454 20.9996 6.50401 20.9992V20.9992C7.33035 20.9988 8 20.3288 8 19.5024V14.3664M20.2398 6.75412C21.2539 9.81086 21.2539 11.8487 20.2398 14.9054" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    Polls
                                </Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center" href="group.html">
                                    <span className="nav-icon">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0042 17.7195V17.7195C9.63874 18.7034 10.3665 19.75 11.416 19.75H18.0397C18.5872 19.75 18.8609 19.75 19.0645 19.7162C20.4518 19.4855 21.376 18.1564 21.1091 16.7756C21.07 16.573 20.9747 16.3164 20.784 15.8031V15.8031C20.6253 15.3759 20.546 15.1623 20.4537 14.9759C19.8451 13.7459 18.6484 12.9139 17.2836 12.7716C17.0767 12.75 16.8488 12.75 16.3931 12.75H14.6075C14.3945 12.75 14.288 12.75 14.1821 12.7556C13.9157 12.7697 13.6513 12.8105 13.393 12.8773C13.2904 12.9038 13.1889 12.9358 12.9857 13V13M8.33008 8.25C7.22551 8.25 6.33008 7.35457 6.33008 6.25C6.33008 5.14543 7.22551 4.25 8.33008 4.25C9.43465 4.25 10.3301 5.14543 10.3301 6.25C10.3301 7.35457 9.43465 8.25 8.33008 8.25ZM15.8301 10.25C14.7255 10.25 13.8301 9.35457 13.8301 8.25C13.8301 7.14543 14.7255 6.25 15.8301 6.25C16.9346 6.25 17.8301 7.14543 17.8301 8.25C17.8301 9.35457 16.9346 10.25 15.8301 10.25ZM5.96032 17.75H10.5397C11.0872 17.75 11.3609 17.75 11.5645 17.7162C12.9518 17.4855 13.876 16.1564 13.6091 14.7756C13.57 14.573 13.4747 14.3164 13.284 13.8031V13.8031C13.1253 13.3759 13.046 13.1623 12.9537 12.9759C12.3451 11.7459 11.1484 10.9139 9.78358 10.7716C9.5767 10.75 9.34883 10.75 8.89307 10.75H7.60693C7.15117 10.75 6.9233 10.75 6.71642 10.7716C5.35155 10.9139 4.15492 11.7459 3.54627 12.9759C3.45401 13.1623 3.37467 13.3759 3.21598 13.8031V13.8031C3.02535 14.3164 2.93003 14.573 2.89087 14.7756C2.62401 16.1564 3.54819 17.4855 4.9355 17.7162C5.13908 17.75 5.41283 17.75 5.96032 17.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    Groups
                                </Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center" href="#">
                                    <span className="nav-icon">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.1987 18.8783L18.1154 12.9615C18.4375 12.6394 18.5986 12.4784 18.7181 12.2885C18.7578 12.2255 18.7939 12.1603 18.8264 12.0932C18.924 11.8912 18.9752 11.6693 19.0776 11.2254L19.0776 11.2254L19.6716 8.65156C20.1839 6.43182 20.44 5.32195 19.9681 4.6064C19.819 4.38029 19.6256 4.18682 19.3995 4.03772C18.6839 3.56588 17.574 3.82201 15.3543 4.33425L12.7804 4.92822C12.3366 5.03065 12.1147 5.08186 11.9127 5.1795C11.8456 5.21192 11.7804 5.24806 11.7174 5.28776C11.5275 5.40732 11.3664 5.56836 11.0444 5.89045L5.12762 11.8072L5.12761 11.8072C4.06703 12.8678 3.53674 13.3981 3.43508 14.0399C3.40225 14.2472 3.40225 14.4584 3.43508 14.6656C3.53674 15.3075 4.06703 15.8378 5.12761 16.8983L5.12762 16.8984L7.10751 18.8783C8.1681 19.9388 8.69839 20.4691 9.34023 20.5708C9.54752 20.6036 9.75868 20.6036 9.96597 20.5708C10.6078 20.4691 11.1381 19.9388 12.1987 18.8783Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                            <path d="M13.955 10.045C14.5408 10.6308 15.4905 10.6308 16.0763 10.045C16.6621 9.45925 16.6621 8.5095 16.0763 7.92371C15.4905 7.33793 14.5408 7.33793 13.955 7.92371C13.3692 8.5095 13.3692 9.45925 13.955 10.045Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    Tags
                                </Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center" href="my-profile.html">
                                    <span className="nav-icon">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.7083 18C20.1334 16.4077 21 14.3051 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 14.3051 3.86656 16.4077 5.29168 18M18.7083 18C17.0604 19.8412 14.6655 21 12 21C9.3345 21 6.93964 19.8412 5.29168 18M18.7083 18L18.2426 17.3122C16.8401 15.2408 14.5015 14 12 14V14C9.49848 14 7.15987 15.2408 5.75738 17.3122L5.29168 18M12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    Users
                                </Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center" href="index-help-center.html">
                                    <span className="nav-icon">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                            <path d="M13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16Z" fill="currentColor" />
                                            <path d="M9.75 9.91274C9.75 8.71829 10.7574 7.75 12 7.75C13.2426 7.75 14.25 8.71829 14.25 9.91274C14.25 10.634 13.8827 11.2728 13.3181 11.6657C13.005 11.8836 12.629 12.0131 12.3645 12.2879C12.04 12.625 11.9931 13.0515 12 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    Helps
                                </Link>
                            </li>
                        </ul>

                    </div>

                </div>
            </nav>

        </div>
    )
}

export default LeftSide