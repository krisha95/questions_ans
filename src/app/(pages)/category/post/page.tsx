import { Container, Row } from 'react-bootstrap'
import LeftSide from './component/LeftSide'
import Posts from './component/Posts'
import RightSide from './component/RightSide'

const page = () => {
    return (
        <section className="pt-8">
            <Container>
                <Row className='g-4'>
                    <LeftSide />
                    <Posts />
                    <RightSide />
                </Row>
            </Container>
        </section>

    )
}

export default page