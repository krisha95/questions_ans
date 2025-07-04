import React from 'react'
import { Container, Row } from 'react-bootstrap'
import LeftSide from './component/LeftSide'
import Communities from './component/Communities'
import RightSideBar from './component/RightSideBar'
import HomeNavbar from '@/component/navbar/HomeNavbar'

const page = () => {
    return (
        <>
            <HomeNavbar />
            <main>
                <section className="pt-8">
                    <Container>
                        <Row className='g-4'>
                            <LeftSide />
                            <Communities />
                            <RightSideBar />
                        </Row>
                    </Container>
                </section>
            </main>
        </>
    )
}

export default page