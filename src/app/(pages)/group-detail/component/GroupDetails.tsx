import React from 'react'
import { Col } from 'react-bootstrap'
import Hero from './Hero'
import AddPost from './AddPost'
import Tabes from './Tabes'

const GroupDetails = () => {
    return (
        <Col xxl={10}>
            <div className="vstack gap-4">
                <Hero />
                <AddPost />
                <Tabes />
            </div>
        </Col>
    )
}

export default GroupDetails