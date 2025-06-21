import LeftSide from '@/component/LeftSide'
import { Container, Row } from 'react-bootstrap'
import Hero from './components/Hero'
import Qutions from './components/Qutions'

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