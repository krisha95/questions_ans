import React from 'react'
import Banner from './component/Banner'
import { Container, Row } from 'react-bootstrap'
import LeftSideBar from './component/LeftSideBar'
import Content from './component/Content'

const page = () => {
    return (
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
    )
}

export default page