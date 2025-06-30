import { Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap'
import {
    BiBarChartAlt2,
    BiHeart,
    BiQuestionMark,
    BiStar
} from 'react-icons/bi'
import { BsChat, BsChatLeftText, BsPatchCheck } from 'react-icons/bs'

const statsData = [
    { label: 'Questions', value: 25, icon: <BiQuestionMark /> },
    { label: 'Answers', value: 13, icon: <BsChat /> },
    { label: 'Polls', value: 5, icon: <BiBarChartAlt2 /> },
    { label: 'Points', value: 365, icon: <BiHeart /> },
    { label: 'Comments', value: 12, icon: <BsChatLeftText /> },
    { label: 'Best answers', value: 5, icon: <BsPatchCheck /> },
    { label: 'Favorite Questions', value: 25, icon: <BiStar /> }
]

const Statistics = () => {
    return (
        <Card className="p-0">
            <CardHeader className="border-bottom">
                <h4 className="mb-0">Statistics</h4>
            </CardHeader>

            <CardBody>
                <Row className="g-4">
                    {statsData.map((item, index) => (
                        <Col md={6} key={index}>
                            <div className="bg-light rounded d-flex align-items-center p-2">
                                <div className="icon-md bg-dark text-white fs-5 rounded d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>
                                    {item.icon}
                                </div>
                                <h6 className="mb-0 ms-2">
                                    {item.label} ({item.value.toString().padStart(2, '0')})
                                </h6>
                            </div>
                        </Col>
                    ))}
                </Row>
            </CardBody>
        </Card>
    )
}

export default Statistics
