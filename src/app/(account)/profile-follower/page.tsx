import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserProfile from './component/UserProfile'
import RighSide from './component/RighSide'
import Follwers from './component/Follwers'
import HomeNavbar from '@/component/navbar/HomeNavbar'

const page = () => {
    return (
        <>
            <HomeNavbar />
            <main>
                <section className='pt-8'>
                    <Container>
                        <Row className='g-4'>
                            <Col xl={8}>
                                <div className="vstack gap-4">
                                    <UserProfile />
                                    <Follwers />
                                </div>
                            </Col>
                            <RighSide />
                        </Row>
                    </Container>
                </section>
            </main >
        </>
    )
}

export default page