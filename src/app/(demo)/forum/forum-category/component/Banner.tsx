"use client"
import CustomModal from '@/component/CustomModal'
import Link from 'next/link'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { FaCircle, FaPlus } from 'react-icons/fa6'

const Banner = () => {
    const [show, setShow] = useState(false);

    return (
        <section className="pt-8">
            <Container>
                <nav className="mb-4" aria-label="breadcrumb">
                    <ol className="breadcrumb mb-1">
                        <li className="breadcrumb-item"><Link href="/forum/index-forum">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Category</li>
                    </ol>
                </nav>
                <div className="bg-mode d-md-flex justify-content-between align-items-center rounded-2 p-4">
                    <div className="d-flex align-items-center mb-3 mb-md-0">
                        <small className="smaller"><FaCircle className="text-success me-2" /></small>
                        <h1 className="mb-0 h2">Freelance & Jobs</h1>
                    </div>
                    <button onClick={() => setShow(true)} className="btn btn-primary mb-0" data-bs-toggle="modal" data-bs-target="#modalNewtopic">
                        <FaPlus className="me-2" />Start a New Topic
                    </button>
                    <CustomModal show={show} onHide={() => setShow(false)} />
                </div>
            </Container>
        </section>
    )
}

export default Banner