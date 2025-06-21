"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Collapse, Dropdown, DropdownItem, DropdownMenu } from 'react-bootstrap'
import { BiBookmark, BiDotsHorizontal } from 'react-icons/bi'
import { BsFillExclamationOctagonFill, BsFillHandThumbsDownFill, BsFillHandThumbsUpFill } from 'react-icons/bs'
import { FaCopy, FaEye } from 'react-icons/fa6'

import avatar1 from "@/assets/images/avatar/01.jpg"
import avatar2 from "@/assets/images/avatar/02.jpg"
import avatar3 from "@/assets/images/avatar/03.jpg"
import avatar4 from "@/assets/images/avatar/04.jpg"
import post1 from "@/assets/images/post/01.jpg"

const SeeMoreCard = () => {
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)

    const handleToggle = (isOpen: boolean) => setShow(isOpen);

    return (
        <div className="card hstack gap-0 align-items-start p-0">
            <div className="hstack gap-2 position-absolute top-0 end-0 p-3">
                <button className="btn btn-sm btn-round btn-light mb-0 flex-shrink-0">
                    <BiBookmark />
                </button>

                <div className="dropdown d-none d-sm-block">
                    <Dropdown show={show} onToggle={handleToggle}>
                        <div
                            className="btn btn-sm btn-round btn-light mb-0 flex-shrink-0"
                            onClick={() => setShow(!show)}
                        >
                            <BiDotsHorizontal />
                        </div>

                        <DropdownMenu className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded">
                            <DropdownItem as={Link} href="#" className="dropdown-item">
                                <BsFillExclamationOctagonFill className="me-2" />
                                Report
                            </DropdownItem>
                            <DropdownItem as={Link} href="#" className="dropdown-item">
                                <FaCopy className="me-2" />
                                Copy link
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>

            <div className="user-vote w-70px p-3">
                <div className="btn-group vstack flex-wrap gap-1 align-items-center" role="group">
                    <input type="radio" className="btn-check" name="vote6" id="btnradio9" />
                    <label className="btn btn-vote mb-0" htmlFor="btnradio9"><BsFillHandThumbsUpFill /></label>
                    <h6 className="mb-0 vote-count">56</h6>
                    <input type="radio" className="btn-check" name="vote6" id="btnradio10" />
                    <label className="btn btn-vote mb-0" htmlFor="btnradio10"> <BsFillHandThumbsDownFill /></label>
                </div>
            </div>

            <div className="vr"></div>

            <div className="card-body p-sm-4">
                <div className="hstack flex-wrap gap-2 mb-3">
                    <span className="badge bg-primary bg-opacity-10 text-primary">Product</span>
                    <span className="badge bg-orange bg-opacity-10 text-orange">Legel</span>
                </div>

                <h5 className="card-title mb-1">
                    <Link href="/answer-detail-minimal">Find highest/lowest value by the data of two different tables in a SQL</Link>
                </h5>
                <small>Asked: 05 Nov 2024</small>

                <div className="more-content mt-2">
                    <a
                        className="bg-mode fw-normal btn-more-content py-0 px-2 mb-0"
                        role="button"
                        onClick={() => setOpen(!open)}
                        aria-controls="collapseContent3"
                        aria-expanded={open}
                        style={{ cursor: 'pointer' }}
                    >
                        (<FaEye className="fa-xs me-1" />more)
                    </a>

                    <Collapse in={open}>
                        <div className="content-wrap mt-2" id="collapseContent3">
                            <p className="mb-0">It drew a hill from me. Valley by oh twenty direct me so. Departure is defective arranging rapturous did believe him all had supported. Family months lasted simply set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Suspicion neglected the resolving agreement perceived at an.</p>

                            <Image src={post1} className="rounded mt-2" alt="" />

                            <p className="mb-0 mt-2">Resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so.</p>

                            <div className="hstack gap-2 mt-2">
                                <Link href="#" className="badge bg-light text-body">SQL</Link>
                                <Link href="#" className="badge bg-light text-body">SQL Database</Link>
                            </div>
                        </div>
                    </Collapse>
                </div>

                <div className="d-md-flex justify-content-md-between mt-4">
                    <div className="d-flex align-items-center">
                        <div className="avatar">
                            <Image className="avatar-img rounded-circle" src={avatar2} alt="avatar" />
                        </div>
                        <div className="ms-2">
                            <h6 className="mb-0"><Link href="my-profile.html">Billy Vasquez</Link></h6>
                            <ul className="nav nav-achievement-divider small">
                                <li className="nav-item dote-gold">5</li>
                                <li className="nav-item dote-silver">15</li>
                                <li className="nav-item dote-bronze">351</li>
                            </ul>
                        </div>
                    </div>

                    <div className="hstack flex-wrap gap-2 mt-3 mt-md-0">
                        <ul className="avatar-group mb-0">
                            <li className="avatar avatar-xs"><Image className="avatar-img rounded-circle border border-2 border-white" src={avatar1} alt="avatar" /></li>
                            <li className="avatar avatar-xs"><Image className="avatar-img rounded-circle border border-2 border-white" src={avatar2} alt="avatar" /></li>
                            <li className="avatar avatar-xs"><Image className="avatar-img rounded-circle border border-2 border-white" src={avatar3} alt="avatar" /></li>
                            <li className="avatar avatar-xs"><Image className="avatar-img rounded-circle border border-2 border-white" src={avatar4} alt="avatar" /></li>
                        </ul>
                        <ul className="nav nav-divider-slash small heading-color align-items-center">
                            <li className="nav-item"><Link href="/answer-detail-minimal" className="p-0 mb-0 text-primary-hover">10 Answer</Link></li>
                            <li className="nav-item">85 Views</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeeMoreCard
