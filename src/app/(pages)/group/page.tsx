import React from 'react'
import { Container, Row } from 'react-bootstrap'
import LeftSide from './component/LeftSide'
import RightSideBar from './component/RightSideBar'
import Group from './component/Group'
import HomeNavbar from '@/component/navbar/HomeNavbar'

const Page = () => {
    return (
        <>
            <HomeNavbar />
            <main>
                <section className="pt-8">
                    <Container>
                        <Row className='g-4'>
                            <LeftSide />
                            <Group />
                            <RightSideBar />
                        </Row>
                    </Container>
                </section>
            </main>
        </>
    )
}

export default Page