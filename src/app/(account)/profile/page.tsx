import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Profile from './component/Profile'
import UserProfile from './component/UserProfile'
import RighSide from './component/RighSide'
import Category from './component/Category'

const Page = () => {
    return (
        <section className='pt-8'>
            <Container>
                <Row className='g-4'>
                    <Col xl={8}>
                        <div className="vstack gap-4">
                            <UserProfile />
                            <Profile />
                            <Category />
                        </div>
                    </Col>
                    <RighSide />
                </Row>

            </Container>

        </section>
    )
}

export default Page