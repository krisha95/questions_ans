import { Container, Row } from 'react-bootstrap'
import TicketReply from './component/TicketReply'
import Titles from './component/Titles'
import Rightsidebar from './component/Rightsidebar'

const Page = () => {
    return (
        <main>
            <section>
                <Titles />
                <Container fluid>
                    <Row className='gx-0'>
                        <TicketReply />
                        <Rightsidebar />
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default Page