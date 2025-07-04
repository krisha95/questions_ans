import React from 'react'
import Banner from './component/Banner'
import { Container, Row } from 'react-bootstrap'
import LeftSideBar from './component/LeftSideBar'
import Content from './component/Content'
import NavBar from '../component/NavBar'
import Footer from '../../que-ans/index/components/Footer'

const page = () => {
    return (
        <>
            <NavBar />
            <main>
                <Banner />
                <section className="pt-0">
                    <Container>
                        <Row>
                            <LeftSideBar />
                            <Content />
                        </Row>
                    </Container>

                </section>
            </main>
            <Footer />
        </>
    )
}

export default page