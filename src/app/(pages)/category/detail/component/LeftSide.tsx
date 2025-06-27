"use client"
import React, { useState } from 'react'
import tech from '@/assets/images/elements/category/11.svg'
import finance from '@/assets/images/elements/category/02.svg'
import language from '@/assets/images/elements/category/12.svg'
import tax from '@/assets/images/elements/category/05.svg'
import news from '@/assets/images/elements/category/07.svg'
import history from '@/assets/images/elements/category/09.svg'
import Image from 'next/image'
import { Col } from 'react-bootstrap'
import { FaSlidersH } from 'react-icons/fa'
import Link from 'next/link'
import { FaPlus } from 'react-icons/fa6'
import CategoryModal from '../../component/categoryModal'

const LeftSide = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <Col xxl={2}>

            <div className="text-center">
                <button className="btn btn-primary mb-0 d-xxl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <FaSlidersH className="me-2" />Show category menu
                </button>
            </div>

            <nav className="navbar navbar-expand-xxl mx-0">
                <div className="offcanvas offcanvas-end p-3 p-xxl-0" tabIndex={-1} id="offcanvasNavbar">

                    <div className="offcanvas-header justify-content-end pt-0 pe-0">
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div className="offcanvas-body p-0 d-block">

                        <ul className="nav nav-link-sidebar flex-column gap-2">
                            <li className="nav-item">
                                <Link className="nav-link ps-2 small active" href="#"> <Image className="me-2 fa-fw" src={tech} alt="" />Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ps-2 small" href="#"> <Image className="me-2 fa-fw" src={finance} alt="" />Business & Finance</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ps-2 small" href="#"> <Image className="me-2 fa-fw" src={language} alt="" />Language & Literature</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ps-2 small" href="#"> <Image className="me-2 fa-fw" src={tax} alt="" />Tax Accountants</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ps-2 small" href="#"> <Image className="me-2 fa-fw" src={news} alt="" />TV & News</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ps-2 small" href="#"> <Image className="me-2 fa-fw" src={history} alt="" />History</Link>
                            </li>
                        </ul>
                        <hr />

                        <Link href="#" onClick={() => setShowModal(true)} data-bs-toggle="modal" data-bs-target="#createCategory"><FaPlus className="me-2" />Create category</Link>
                        <CategoryModal show={showModal} handleClose={() => setShowModal(false)} />

                    </div>

                </div>
            </nav>
        </Col>
    )
}

export default LeftSide