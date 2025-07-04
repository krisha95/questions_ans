"use client"
import React, { useState } from 'react'
import tech from '@/assets/images/elements/category/11.svg'
import finance from '@/assets/images/elements/category/02.svg'
import language from '@/assets/images/elements/category/12.svg'
import tax from '@/assets/images/elements/category/05.svg'
import news from '@/assets/images/elements/category/07.svg'
import history from '@/assets/images/elements/category/09.svg'
import Image from 'next/image'
import { Col, Offcanvas, Button, ListGroup, OffcanvasHeader, OffcanvasBody, ListGroupItem } from 'react-bootstrap'
import { FaSlidersH } from 'react-icons/fa'
import Link from 'next/link'
import { FaPlus } from 'react-icons/fa6'
import CategoryModal from '../../component/categoryModal'

const categories = [
    { name: "Technology", image: tech },
    { name: "Business & Finance", image: finance },
    { name: "Language & Literature", image: language },
    { name: "Tax Accountants", image: tax },
    { name: "TV & News", image: news },
    { name: "History", image: history },
]

const LeftSide = () => {
    const [showModal, setShowModal] = useState(false)
    const [show, setShow] = useState(false)

    return (
        <Col xxl={2}>
            <div className="text-center">
                <Button onClick={() => setShow(true)} className="mb-0 d-xxl-none" variant="primary">
                    <FaSlidersH className="me-2" />Show category menu
                </Button>
            </div>

            <nav className="navbar navbar-expand-xxl mx-0">
                <Offcanvas
                    placement="end"
                    responsive="lg"
                    className="p-3 p-xxl-0"
                    tabIndex={-1}
                    id="offcanvasNavbar"
                    show={show}
                    onHide={() => setShow(false)}
                >
                    <OffcanvasHeader closeButton className="justify-content-end pt-0 pe-0" />
                    <OffcanvasBody className="p-0 d-block">
                        <ListGroup variant="flush" className="nav nav-link-sidebar flex-column gap-2">
                            {categories.map((cat, idx) => (
                                <ListGroupItem key={cat.name} className="nav-item p-0 border-0 bg-transparent">
                                    <Link className={`nav-link ps-2 small${idx === 0 ? " active" : ""}`} href="#">
                                        <Image className="me-2 fa-fw" src={cat.image} alt={cat.name} width={24} height={24} />
                                        {cat.name}
                                    </Link>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                        <hr />
                        <Button
                            variant="link"
                            className="ps-2 text-decoration-none"
                            onClick={() => setShowModal(true)}
                        >
                            <FaPlus className="me-2" />Create category
                        </Button>
                        <CategoryModal show={showModal} handleClose={() => setShowModal(false)} />
                    </OffcanvasBody>
                </Offcanvas>
            </nav>
        </Col>
    )
}

export default LeftSide