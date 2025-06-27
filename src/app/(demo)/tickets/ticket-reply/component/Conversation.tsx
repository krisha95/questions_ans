import React from 'react';
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import avatar10 from "@/assets/images/avatar/10.jpg"
import avatar11 from "@/assets/images/avatar/11.jpg"
import avatar12 from "@/assets/images/avatar/12.jpg"
import avatar05 from "@/assets/images/avatar/05.jpg"
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { BiDotsVerticalRounded, BiPaperclip, BiSend } from 'react-icons/bi';
import { Col, Dropdown } from 'react-bootstrap';
import { BsArchive, BsCheckLg, BsMicMute, BsPersonCheck, BsTrash } from 'react-icons/bs';
import QuillTool from '@/component/QuillTool';

type Message = {
    id: number;
    sender: 'me' | 'other';
    avatar?: StaticImageData;
    content: React.ReactNode;
    time: string;
    type?: 'text' | 'image' | 'code';
    imageUrl?: StaticImageData;
    statusIcon?: React.ReactNode;
};

type ConversationTab = {
    id: string;
    title: string;
    avatar?: StaticImageData;
    messages: Message[];
    newMessages?: number;
};

const conversationTabs: ConversationTab[] = [
    {
        id: 'chat-1',
        title: 'Is this in React Bootstrap?',
        avatar: avatar10,
        messages: [
            {
                id: 1,
                sender: 'other',
                avatar: avatar10,
                content: <>Applauded no discovery in newspaper allowance am northward😊</>,
                time: '6:15 AM',
            },
            {
                id: 2,
                sender: 'me',
                content: <>With pleasure</>,
                time: '6:20 AM',
                statusIcon: <i className="fa-solid fa-check-double text-info ms-2"></i>,
            },
            {
                id: 3,
                sender: 'other',
                avatar: avatar10,
                content: <>Please find the attached updated files</>,
                time: '12:16 PM',
            },
            {
                id: 4,
                sender: 'other',
                avatar: avatar10,
                content: <>How promotion excellent curiosity yet attempted happiness Gay prosperous impression😮</>,
                time: '3:22 PM',
            },
            {
                id: 5,
                sender: 'me',
                content: <>And sir dare view but over man So at within mr to simple assure Mr disposing.</>,
                time: '5:35 PM',
                statusIcon: <i className="fa-solid fa-check ms-2"></i>,
            },
            {
                id: 6,
                sender: 'me',
                type: 'image',
                imageUrl: avatar05,
                content: null,
                time: '5:36 PM',
            },
            {
                id: 7,
                sender: 'other',
                avatar: avatar10,
                content: <>Traveling alteration impression 🤐 six all uncommonly Chamber hearing inhabit joy highest private.</>,
                time: '7:22 PM',
            },
        ],
        newMessages: 1,
    },
    {
        id: 'chat-2',
        title: 'Can i remove node from template?',
        avatar: avatar11,
        messages: [
            {
                id: 1,
                sender: 'other',
                avatar: avatar11,
                content: <>Night signs creeping yielding green Seasons.</>,
                time: '6:15 AM',
            },
            {
                id: 2,
                sender: 'me',
                content: <>Creeping earth under was You're without which image.</>,
                time: '6:20 AM',
            },
            {
                id: 3,
                sender: 'other',
                avatar: avatar11,
                content: <>Thank you for prompt response</>,
                time: '12:16 PM',
            },
            {
                id: 4,
                sender: 'me',
                content: <>Moving living second beast Over fish place beast.</>,
                time: '5:35 PM',
            },
            {
                id: 5,
                sender: 'me',
                type: 'code',
                content: (
                    <div className="d-grid">
                        <pre>
                            <code className="language-markup" data-lang="html">{`<ul class="avatar-group">
  <li className="avatar">
    <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
  </li>
  <li className="avatar">
    <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" />
  </li>
  <li className="avatar">
    <div className="avatar-img rounded-circle bg-primary">
      <i className="fas fa-plus text-white position-absolute top-50 start-50 translate-middle"></i>
    </div>
  </li>
</ul>`}</code>
                        </pre>
                    </div>
                ),
                time: '5:35 PM',
            },
            {
                id: 6,
                sender: 'other',
                avatar: avatar11,
                content: <>Thing they're fruit together forth day.</>,
                time: '12:16 PM',
            },
            {
                id: 7,
                sender: 'other',
                avatar: avatar11,
                content: <>Fly replenish third to said void life night yielding for heaven give blessed spirit</>,
                time: '12:16 PM',
            },
        ],
        newMessages: 2,
    },
    {
        id: 'chat-3',
        title: 'How i get my refund?',
        avatar: avatar12,
        messages: [
            {
                id: 1,
                sender: 'me',
                content: <>Hello, <br />Made and For saw Creepeth place shall Moving.</>,
                time: '5:35 PM',
            },
            {
                id: 2,
                sender: 'other',
                avatar: avatar12,
                content: <>Thank you for prompt response</>,
                time: '12:16 PM',
            },
        ],
    },
];

type ConversationProps = {
    activeChatId: string;
};

const Conversation = ({ activeChatId }: ConversationProps) => {
    const tab = conversationTabs.find(t => t.id === activeChatId);
    if (!tab) return <Col lg={8} xl={6} xxl={8}>No conversation found.</Col>;

    return (
        <Col lg={8} xl={6} xxl={8}>
            <div className="card card-chat rounded-0 border-end">
                <div className="card-body h-100 pb-0">
                    <div className="tab-content py-0 mb-0 h-100" id="chatTabsContent">
                        <div
                            className="fade tab-pane h-100 show active"
                            id={tab.id}
                            role="tabpanel"
                            aria-labelledby={`${tab.id}-tab`}
                            style={{ minHeight: 400 }}
                        >
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="mb-0">{tab.title}</h5>
                                <div className="d-flex align-items-center">
                                    <Dropdown className="dropdown">
                                        <Dropdown.Toggle
                                            as="a"
                                            className="btn btn-sm btn-icon btn-light btn-round mb-0 popup-after"
                                        >
                                            <BiDotsVerticalRounded />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu align="end">
                                            <Dropdown.Item href="#">
                                                <BsCheckLg className="me-2 fw-icon" /> Mark as read
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                <BsMicMute className="me-2 fw-icon" /> Mute conversation
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                <BsPersonCheck className="me-2 fw-icon" /> View profile
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                <BsTrash className="me-2 fw-icon" /> Delete chat
                                            </Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#">
                                                <BsArchive className="me-2 fw-icon" /> Archive chat
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <hr />
                            <OverlayScrollbarsComponent
                                className="chat-conversation-content custom-scrollbar"
                                style={{ maxHeight: 600, height: 600 }}
                                options={{
                                    scrollbars: {
                                        autoHide: 'leave',
                                        autoHideDelay: 200
                                    }
                                }}
                            >
                                <div className="text-center small my-2">Jul 16, 2022, 06:15 am</div>
                                {tab.messages.map((msg, idx) => (
                                    <React.Fragment key={msg.id}>
                                        {/* Left message */}
                                        {msg.sender === 'other' && (
                                            <div className="d-flex mb-3 mb-sm-1">
                                                <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                    {msg.avatar && (
                                                        <Image className="avatar-img rounded-circle" src={msg.avatar} alt="" />
                                                    )}
                                                </div>
                                                <div className="flex-grow-1">
                                                    <div className="d-inline-block element-hover w-md-40 w-xl-60 w-xxl-40">
                                                        {/* Message */}
                                                        {msg.type === 'code' ? (
                                                            msg.content
                                                        ) : msg.type === 'image' ? (
                                                            <div className="d-flex flex-column align-items-end">
                                                                {msg.imageUrl && (
                                                                    <Link href="#"><Image className="rounded h-200px" src={msg.imageUrl} alt="" /></Link>
                                                                )}
                                                                <div className="small my-2">{msg.time}</div>
                                                            </div>
                                                        ) : (
                                                            <div className="bg-light heading-color p-2 px-3 rounded-2 mb-1">{msg.content}</div>
                                                        )}
                                                        {/* Actions */}
                                                        {msg.type !== 'image' && (
                                                            <div className="d-sm-flex justify-content-between align-items-center">
                                                                <div className="small">{msg.time}</div>
                                                                <div className="element-hover-item small ms-auto">
                                                                    <a href="#" className="text-primary-hover me-2">Edit comment</a>
                                                                    <a href="#" className="text-danger">Delete comment</a>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {/* Right message */}
                                        {msg.sender === 'me' && (
                                            msg.type === 'image' ? (
                                                <div className="d-flex justify-content-end text-end mb-3 me-2">
                                                    <div className="w-100">
                                                        <div className="d-flex flex-column align-items-end">
                                                            {msg.imageUrl && (
                                                                <Link href="#"><Image className="rounded h-200px" src={msg.imageUrl} alt="" /></Link>
                                                            )}
                                                            <div className="small my-2">{msg.time}{msg.statusIcon}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="d-flex justify-content-end mb-3 me-2">
                                                    <div className="w-md-40 w-xl-60 w-xxl-40">
                                                        <div className="bg-light heading-color p-2 px-3 rounded-2">{msg.content}</div>
                                                        <div className="small text-secondary my-2 text-end">{msg.time}{msg.statusIcon}</div>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                        {tab.newMessages && idx === tab.messages.length - tab.newMessages && (
                                            <div className="text-center small my-3">{tab.newMessages} New Messages</div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </OverlayScrollbarsComponent>
                        </div>
                    </div>
                </div>
                <form className="card-footer border-0 border-top z-index-9">
                    <QuillTool className='bg-mode border rounded-bottom rounded-top py-2 h-150px overflow-hidden' />
                    <div className="d-flex gap-3 mt-3">
                        <button className="btn btn-primary mb-0"><BiSend className="me-2" />Reply</button>
                        <button className="btn btn-light mb-0"><BiPaperclip className="me-1" />Attachment</button>
                    </div>
                </form>
            </div>
        </Col>
    );
};

export default Conversation;