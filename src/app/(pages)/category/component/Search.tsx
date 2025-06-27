"use client"
import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa6'
import CategoryModal from './categoryModal'

const Search = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <h1 className="mb-4 mb-md-5">Discover Categories</h1>
            <Row className="g-3 g-sm-4 mb-4">

                <Col sm={6} md={7}>
                    <form className="rounded position-relative">
                        <input className="form-control form-control-lg" type="search" placeholder="Search" aria-label="Search" />
                        <button className="bg-transparent border-0 text-primary-hover position-absolute top-50 end-0 translate-middle-y px-3" type="submit">
                            <FaSearch />
                        </button>
                    </form>
                </Col>

                <Col sm={6} md={4} className="d-grid d-sm-block text-end ms-auto">
                    <button onClick={() => setShowModal(true)} className="btn btn-lg btn-primary mb-0" data-bs-toggle="modal" data-bs-target="#createCategory"><FaPlus className="me-2" />Create category</button>
                </Col>
                <CategoryModal show={showModal} handleClose={() => setShowModal(false)} />
            </Row>
        </>
    )
}

export default Search