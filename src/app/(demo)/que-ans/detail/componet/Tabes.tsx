"use client"
import { useState } from 'react';
import { Card, Nav, NavItem, NavLink, TabContainer } from 'react-bootstrap';

const Tabes = () => {
    const [activeKey, setActiveKey] = useState<string>('recent');

    return (
        <Card className="card-body">
            <TabContainer activeKey={activeKey} onSelect={(v) => v && setActiveKey(v)}>
                <div className="d-sm-flex justify-content-sm-between align-items-center">
                    <h5 className="mb-sm-0">15 Answers</h5>
                    <Nav variant="pills" className="nav-pills-primary-soft">
                        <NavItem>
                            <NavLink eventKey="recent">Recent</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey="oldest">Oldest</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey="voted">Voted</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </TabContainer>
        </Card>
    );
};

export default Tabes;
