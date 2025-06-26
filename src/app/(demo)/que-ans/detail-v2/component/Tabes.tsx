"use client";
import React, { useState } from "react";
import { Nav, NavItem, NavLink, Tab, TabContainer } from "react-bootstrap";

const Tabes = () => {
    const [key, setKey] = useState("older");

    return (
        <div className="d-sm-flex justify-content-sm-between align-items-center">
            <ul className="nav nav-divider align-items-center mb-2 mb-sm-0">
                <li className="nav-item h6 mb-0">2 comments</li>
                <li className="nav-item fw-normal mb-0">1 replies</li>
            </ul>

            <TabContainer activeKey={key} onSelect={(k) => setKey(k || "older")}>
                <Nav variant="pills" className="gap-2 nav-pills-white">
                    <NavItem>
                        <NavLink eventKey="older" className="mb-0">
                            Older
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink eventKey="newest" className="mb-0">
                            Newest
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink eventKey="top" className="mb-0">
                            Top
                        </NavLink>
                    </NavItem>
                </Nav>
            </TabContainer>
        </div>
    );
};

export default Tabes;
