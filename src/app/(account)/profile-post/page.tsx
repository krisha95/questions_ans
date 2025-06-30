import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserProfile from './component/UserProfile'
import TitlePost from './component/TitlePost'
import Post from './component/Post'
import RighSide from './component/RighSide'

const page = () => {
    return (
        <main>
            <section className='pt-8'>
                <Container>
                    <Row className='g-4'>
                        <Col xl={8}>
                            <div className="vstack gap-4">
                                <UserProfile />
                                <TitlePost />
                                <Post />
                            </div>
                        </Col>
                        <RighSide />
                    </Row>
                </Container>
            </section>
        </main>

    )
}

export default page