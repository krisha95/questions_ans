import React from 'react'
import Hero from './component/Hero'
import { Container, Row } from 'react-bootstrap'
import Content from './component/Content'
import RightSide from './component/RightSide'

const page = () => {
    return (
        <main>
            <Hero />
            <section>
                <Container>
                    <Row className='g-4'>
                        <Content />
                        <RightSide />
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default page