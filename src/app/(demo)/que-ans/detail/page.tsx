import HomeNavbar from '@/component/navbar/HomeNavbar'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../index/components/Footer'
import AnswerCard from './componet/AnswerCard'
import AnswerDetail2 from './componet/AnswerDetail2'
import AnswerDetail3 from './componet/AnswerDetail3'
import AnswerDetails from './componet/AnswerDetails'
import LeftSide from './componet/LeftSide'
import QuestionsCard from './componet/QuestionsCard'
import RightSideBar from './componet/RightSideBar'
import Tabes from './componet/Tabes'

const Page = () => {
    return (
        <>
            <HomeNavbar />
            <main>
                <section className="pt-8">
                    <Container>
                        <Row className='g-4'>
                            <LeftSide />
                            <Col xl={8} xxl={7}>
                                <div className="vstack gap-4">
                                    <QuestionsCard />
                                    <AnswerCard />
                                    <Tabes />
                                    <AnswerDetails />
                                    <AnswerDetail2 />
                                    <AnswerDetail3 />
                                    <p className="mb-0">Not the answer you're looking for? Browse other questions tagged
                                        <span className="badge bg-primary bg-opacity-10 text-primary">angular</span>
                                        <span className="badge bg-primary bg-opacity-10 text-primary">javascript</span>
                                        or <a href="#" className="text-decoration-underline">ask your own question</a>.
                                    </p>
                                </div>
                            </Col>
                            <RightSideBar />
                        </Row>
                    </Container>
                </section>
            </main >
            <Footer />

           
        </>
    )
}

export default Page