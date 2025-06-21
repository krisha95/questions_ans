import React from 'react'
import Hero from './components/Hero'
import { Container, Row } from 'react-bootstrap'
import LeftSide from '@/component/LeftSide'
import Qutions from './components/Qutions'
import Hstack from './components/quetions-session/Hstack'

const page = () => {
    return (
        <main>
            <Hero />
            <section className="pt-0">
                <Container>
                    <Row>
                        <LeftSide />
                        <Qutions />
                        
                    </Row>
                </Container>
            </section>

        </main>
    )
}

export default page