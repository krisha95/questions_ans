"use client"
import { Container, Row } from 'react-bootstrap';
import NavBar2 from '../component/NavBar2';
import Rightsidebar from './component/Rightsidebar';
import TicketReply from './component/TicketReply';
import Titles from './component/Titles';
import { useState } from 'react';

const Page = () => {
    const [showChatSidebar, setShowChatSidebar] = useState(false);
    const [showProfileSidebar, setShowProfileSidebar] = useState(false);
    const [activeChatId, setActiveChatId] = useState("chat-1");

    return (
        <>
            <NavBar2 />
            <main>
                <Titles
                    onOpenChats={() => setShowChatSidebar(true)}
                    onOpenProfile={() => setShowProfileSidebar(true)}
                />
                <Container fluid>
                    <Row className="gx-0">
                        <TicketReply
                            activeChatId={activeChatId}
                            setActiveChatId={setActiveChatId}
                            showChatSidebar={showChatSidebar}
                            onHideChatSidebar={() => setShowChatSidebar(false)}
                        />
                        <Rightsidebar
                            show={showProfileSidebar}
                            onHide={() => setShowProfileSidebar(false)}
                        />
                    </Row>
                </Container>
            </main>
        </>
    );
};

export default Page;
