import React from 'react'
import Banner from './component/Banner'
import { Container, Row } from 'react-bootstrap'
import LeftSide from './component/LeftSide'
import MainContaint from './component/MainContaint'
import RightSideBar from './component/RightSideBar'
import HomeNavbar from '@/component/navbar/HomeNavbar'

const page = () => {
    return (
        <>
            <HomeNavbar />
            <main>
                <Banner />
                <section className="pt-0">
                    <Container>
                        <Row className='g-4'>
                            <LeftSide />
                            <MainContaint />
                            <RightSideBar />
                        </Row>
                    </Container>
                </section>
            </main>
        </>
    )
}

export default page