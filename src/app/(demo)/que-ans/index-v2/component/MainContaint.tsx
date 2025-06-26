"use client"
import { Col, Nav, NavItem, NavLink, TabContainer } from 'react-bootstrap'
import QuestionsCards from './questions-card/QuestionsCards'
import PollCard from './questions-card/PollCard'
import QuestionSlider from './questions-card/QuestionSlider'
import Sponsor from './questions-card/Sponsor'
import Profile from './questions-card/Profile'
import Link from 'next/link'

const MainContaint = () => {
    return (
        <Col xl={8} xxl={7} className="vstack gap-4">
            <TabContainer defaultActiveKey="tab-1">
                <div className="bg-mode rounded p-3 py-0">
                    <Nav variant="tabs" className="nav-bottom-line nav-responsive justify-content-between mb-0 border-0">
                        <NavItem>
                            <NavLink eventKey="tab-1">Question & Answer</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey="tab-2">Posts</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey="tab-3">Polls</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey="tab-4">News</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </TabContainer>
            <QuestionsCards />
            <PollCard />
            <QuestionSlider />
            <Sponsor />
            <Profile />
            <Link href="#" className="btn btn-primary-soft mb-0">Load More Questions</Link>
        </Col>

    )
}

export default MainContaint