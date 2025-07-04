"use client";
import Conversation from "./Conversation";
import Sidebar from "./Sidebar";

type TicketReplyProps = {
    activeChatId: string;
    setActiveChatId: (id: string) => void;
    showChatSidebar: boolean;
    onHideChatSidebar: () => void;
};

const TicketReply = ({
    activeChatId,
    setActiveChatId,
    showChatSidebar,
    onHideChatSidebar,
}: TicketReplyProps) => {
    return (
        <>
            <Sidebar
                activeChatId={activeChatId}
                setActiveChatId={setActiveChatId}
                show={showChatSidebar}
                onHide={onHideChatSidebar}
            />
            <Conversation activeChatId={activeChatId} />
        </>
    );
};

export default TicketReply;
