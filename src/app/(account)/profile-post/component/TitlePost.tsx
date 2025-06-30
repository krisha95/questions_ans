"use client"
import { Col, Row } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa6'
import PostModal from './PostModal'
import { useState } from 'react';

const TitlePost = () => {
    const [showPostModal, setShowPostModal] = useState(false);

    return (
        <div className="bg-mode px-4 py-3 rounded">
            <Row className="g-2 align-items-center">
                <Col md={3}>

                    <h1 className="h4 mb-lg-0">15 Posts</h1>
                </Col>
                <Col sm={6} md={3} className="ms-sm-auto">

                    <select className="form-select js-choice" data-placeholder-val="Sort by" data-search-enabled="false">
                        <option value="AB">Most Recent</option>
                        <option value="NG">All time views</option>
                    </select>
                </Col>
                <Col sm={6} md={3}>
                    <button onClick={() => setShowPostModal(true)} className="btn btn-primary-soft ms-auto w-100 mb-0" data-bs-toggle="modal" data-bs-target="#modalPost"> <FaPlus className="me-1" /> Create post</button>
                </Col>
            </Row>
            <PostModal show={showPostModal} onHide={() => setShowPostModal(false)} />
        </div>
    )
}

export default TitlePost