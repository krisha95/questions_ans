import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserProfile from './component/UserProfile'
import RighSide from './component/RighSide'
import Achievement from './component/Achievement'
import Statistics from './component/Statistics'

const page = () => {
    return (
        <main>
            <section className='pt-8'>
                <Container>
                    <Row className='g-4'>
                        <Col xl={8}>
                            <div className="vstack gap-4">
                                <UserProfile />
                                <Achievement />
                                <Statistics />
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