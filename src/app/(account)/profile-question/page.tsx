import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserProfile from './component/UserProfile'
import Title from './component/Title'
import Questions from './component/Questions'
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
                                <Title />
                                <Questions />
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