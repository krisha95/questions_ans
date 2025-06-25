import React from 'react'
import Hero from './component/Hero'
import Category from './component/Category'
import { Container, Row } from 'react-bootstrap'
import Activity from './component/Activity'
import RightSide from './component/RightSide'

const page = () => {
    return (
        <main>
            <Hero />
            <Category />
            <section className="pt-0 pt-lg-5">
                <Container>
                    <Row className='g-4'>
                        <Activity />
                        <RightSide />
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default page