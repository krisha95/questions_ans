import { Col, Container, Row } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import LeftSide from './LeftSide'
import QueAnsContent from './QueAnsContent'

const Content = () => {
    return (

        <section className="pt-0">
            <Container>
                <Row className="g-4 mb-4">
                    <Col md={8}>
                        <form className="rounded position-relative">
                            <input className="form-control form-control-lg" type="search" placeholder="Search" aria-label="Search" />
                            <button className="bg-transparent border-0 text-primary-hover position-absolute top-50 end-0 translate-middle-y px-3" type="submit">
                                <FaSearch />
                            </button>
                        </form>
                    </Col>

                    <Col md={4} className="form-size-lg">
                        <select className="form-select js-choice" data-placeholder-val="Sort by" data-search-enabled="false">
                            <option value="">Sort by</option>
                            <option>Latest activity</option>
                            <option>Date created</option>
                            <option>Top voted</option>
                        </select>
                    </Col>
                </Row>
                <Row>
                    <LeftSide />
                    <QueAnsContent />
                </Row>
            </Container>
        </section>
    )
}

export default Content