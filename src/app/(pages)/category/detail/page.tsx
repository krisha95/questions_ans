import { Container, Row } from 'react-bootstrap'
import LeftSide from './component/LeftSide'
import RightSide from './component/RightSide'
import Technology from './component/Technology'

const Page = () => {
    return (
        <main>
            <section className="pt-8">
                <Container>
                    <Row className='g-4'>
                        <LeftSide />
                        <Technology />
                        <RightSide />
                    </Row>
                </Container>
            </section>
        </main>

    )
}

export default Page