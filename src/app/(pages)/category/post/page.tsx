import { Container, Row } from 'react-bootstrap'
import LeftSide from './component/LeftSide'
import Posts from './component/Posts'
import RightSide from './component/RightSide'
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
                            <Posts />
                            <RightSide />
                        </Row>
                    </Container>
                </section>
            </main>
        </>

    )
}

export default page