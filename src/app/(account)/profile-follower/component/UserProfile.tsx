"use client"
import React, { useState } from 'react'
import avatar06 from "@/assets/images/avatar/06.jpg"
import { Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap'
import Image from 'next/image'
import { BiBlock, BiDotsHorizontalRounded, BiFlag, BiXCircle } from 'react-icons/bi'
import Link from 'next/link'
import { BsBookmark, BsFillPatchCheckFill, BsFillPersonPlusFill } from 'react-icons/bs'
import QuestionModal from './QuestionModal'

const UserProfile = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Card className="p-0">
                <Dropdown className="position-absolute top-0 end-0 p-3 no-after-icon">
                    <DropdownToggle variant="light" size="sm" className="btn-icon mb-0">
                        <BiDotsHorizontalRounded />
                    </DropdownToggle>

                    <DropdownMenu className="dropdown-menu-end min-w-auto">
                        <DropdownItem href="#"><BsBookmark className="pe-2" size={24} /> Save</DropdownItem>
                        <DropdownItem href="#"><BiXCircle className="pe-2" size={24} /> Hide</DropdownItem>
                        <DropdownItem href="#"><BiBlock className="pe-2" size={24} /> Block</DropdownItem>
                        <DropdownItem href="#"><BiFlag className="pe-2" size={24} /> Report</DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                <CardBody className="p-4">

                    <div className="d-sm-flex">

                        <div className="avatar avatar-xxl flex-shrink-0">
                            <Image className="avatar-img rounded-circle bg-white shadow border border-white border-3" src={avatar06} alt="" />
                        </div>


                        <div className="ms-0 ms-sm-4">

                            <h1 className="card-title mb-0 h4">Frances Guerrero<BsFillPatchCheckFill className="text-info ms-2" /></h1>
                            <small>Created Aug 26, 2019</small>
                            <p className="mb-0 mt-2">Professor of Computer Science Departure defective arranging rapturous did believe him all had supported.</p>


                            <div className="d-md-flex justify-content-md-between mt-3">

                                <div className="hstack gap-2 gap-xl-3">

                                    <div>
                                        <h6 className="mb-0">2.5K</h6>
                                        <small>Followers</small>
                                    </div>

                                    <div className="vr"></div>

                                    <div>
                                        <h6 className="mb-0">365</h6>
                                        <small>Following</small>
                                    </div>

                                    <div className="vr"></div>

                                    <div>
                                        <h6 className="mb-0">256</h6>
                                        <small>Post</small>
                                    </div>
                                </div>


                                <div className="d-grid d-sm-flex flex-wrap gap-2 mt-3 mt-md-0">
                                    <button className="btn btn-success-soft mb-0" type="button"><BsFillPersonPlusFill className="me-2" />Follow</button>
                                    <button onClick={() => setShowModal(true)} className="btn btn-dark mb-0" type="button" data-bs-toggle="modal" data-bs-target="#modalLabelQuestion">Ask Question</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </CardBody>

                <div className="card-footer border-top pb-0">
                    <ul className="nav nav-bottom-line nav-responsive align-items-center gap-2 mb-0 border-0">
                        <li className="nav-item"> <Link className="nav-link" href="/profile" >Profile</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" href="/profile-post">15 Posts</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" href="/profile-question">7 Questions </Link></li>
                        <li className="nav-item"> <Link className="nav-link active" href="/profile-follower">2.5K Followers</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" href="/profile-achievement">Achievement</Link> </li>
                    </ul>
                </div>
            </Card>
            <QuestionModal show={showModal} onHide={() => setShowModal(false)} />
        </>
    )
}

export default UserProfile