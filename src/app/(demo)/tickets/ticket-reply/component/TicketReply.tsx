"use client"
import { useState } from "react";
import Conversation from "./Conversation";
import Sidebar from "./Sidebar";
import { Row } from "react-bootstrap";

const TicketReply = () => {
    const [activeChatId, setActiveChatId] = useState("chat-1");

    return (
        // <Row>
        <>
            <Sidebar activeChatId={activeChatId} setActiveChatId={setActiveChatId} />
            <Conversation activeChatId={activeChatId} />
        </>
        // </Row>
    );
};

export default TicketReply;