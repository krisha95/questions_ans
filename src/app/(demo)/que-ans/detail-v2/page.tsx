import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import QuestionsBox from './component/QuestionsBox'
import Tabes from './component/Tabes'
import AnswerCard from './component/AnswerCard'
import AnswerCard2 from './component/AnswerCard2'

const page = () => {
    
    return (
        <main>
            <section className="pt-8">
                <Container>
                    <Row className='g-4'>
                        <Col xl={9}>
                            <div className="vstack gap-4">
                                <QuestionsBox />
                                <Tabes />
                                <AnswerCard />
                                <AnswerCard2 />
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
        </main>
    )
}

export default page