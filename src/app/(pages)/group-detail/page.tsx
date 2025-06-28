import React from 'react'
import { Container, Row } from 'react-bootstrap'
import LeftSide from './component/LeftSide'
import GroupDetails from './component/GroupDetails'

const page = () => {
    return (
        <main>
            <section className="pt-8">
                <Container>
                    <Row className='g-4'>
                        <LeftSide />
                        <GroupDetails />
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default page