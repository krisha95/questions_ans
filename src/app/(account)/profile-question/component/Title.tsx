import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Title = () => {
    return (
        <div className="bg-mode px-4 py-3 rounded">
            <Row className="g-2 align-items-center">
                <Col md={3}>
                    <h1 className="h4 mb-lg-0">7 Questions</h1>
                </Col>
                <Col sm={6} md={3} className="ms-sm-auto">
                    <select className="form-select js-choice" data-placeholder-val="Sort by" data-search-enabled="false">
                        <option value="AB">Most Recent</option>
                        <option value="NG">All time views</option>
                        <option value="NG">Top voted</option>
                        <option value="NG">Most popular</option>
                    </select>
                </Col>
            </Row>
        </div>
    )
}

export default Title