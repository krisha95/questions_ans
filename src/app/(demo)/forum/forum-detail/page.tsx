import React from 'react'
import Hero from './component/Hero'
import { Container, Row } from 'react-bootstrap'
import Content from './component/Content'
import RightSide from './component/RightSide'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'

const page = () => {
    return (
        <>
            <NavBar />
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
            <Footer />
        </>
    )
}

export default page