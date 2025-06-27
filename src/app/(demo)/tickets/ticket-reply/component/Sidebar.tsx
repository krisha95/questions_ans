import avatar1 from "@/assets/images/avatar/01.jpg";
import avatar4 from "@/assets/images/avatar/04.jpg";
import avatar10 from "@/assets/images/avatar/10.jpg";
import avatar11 from "@/assets/images/avatar/11.jpg";
import avatar12 from "@/assets/images/avatar/12.jpg";
import Image from 'next/image';
import Link from 'next/link';
import { Card, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap';
import { BiDotsVerticalRounded, BiPlus, BiSearch } from 'react-icons/bi';

type SidebarProps = {
    activeChatId: string;
    setActiveChatId: (id: string) => void;
};

const chats = [
    {
        id: 'chat-1',
        name: 'Frances Guerrero',
        avatar: avatar10,
        message: 'Is this in react bootstrap?',
        time: '2 days ago',
        status: 'online',
    },
    {
        id: 'chat-2',
        name: 'Bryan Knight',
        avatar: avatar11,
        message: 'Can I remove node from template?',
        time: '5 days ago',
        status: 'offline',
    },
    {
        id: 'chat-3',
        name: 'Billy Vasquez',
        avatar: avatar12,
        message: 'How I get my refund?',
        time: '1 week ago',
        status: '',
    },
    {
        id: 'chat-4',
        name: 'Carolyn Ortiz',
        avatar: avatar1,
        message: 'How implement gulp in SAAS',
        time: '1 week ago',
        status: '',
    },
    {
        id: 'chat-5',
        name: 'Larry Lawson',
        avatar: avatar4,
        message: 'Choices plugin not work properly',
        time: '2 week ago',
        status: '',
    },
];

const Sidebar = ({ activeChatId, setActiveChatId }: SidebarProps) => {
    return (
        <Col lg={4} xl={3} xxl={2} id="chatTabs" role="tablist">
            <Card className="card-body border-bottom border-end rounded-0">
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="h5 mb-0">Active chats</h1>
                    <Dropdown>
                        <DropdownToggle
                            variant="light"
                            size="sm"
                            className="btn-icon btn-round mb-0 popup-after"
                        >
                            <BiDotsVerticalRounded />
                        </DropdownToggle>
                        <DropdownMenu align="end">
                            <DropdownItem className="d-flex justify-content-between">
                                My ticket <span className="icon-sm text-bg-dark rounded-circle">01</span>
                            </DropdownItem>
                            <DropdownItem className="d-flex justify-content-between">
                                Close
                            </DropdownItem>
                            <DropdownItem className="d-flex justify-content-between">
                                Open <span className="icon-sm text-bg-success rounded-circle">02</span>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </Card>
            <div className="offcanvas-lg offcanvas-start" tabIndex={-1} id="offcanvasNavbar">
                <div className="offcanvas-header">
                    <button
                        type="button"
                        className="btn-close text-reset ms-auto"
                        data-bs-target="#offcanvasNavbar"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body flex-column p-0">
                    <div className="card card-body card-chat-list overflow-hidden rounded-0 border-end pb-3">
                        <form className="position-relative">
                            <input className="form-control py-2" type="search" placeholder="Search for chats" aria-label="Search" />
                            <button className="btn bg-transparent text-primary-hover px-2 py-0 position-absolute top-50 end-0 translate-middle-y" type="submit">
                                <BiSearch />
                            </button>
                        </form>
                        <div className="mt-4 h-100">
                            <div className="chat-tab-list custom-scrollbar">
                                <ul className="nav flex-column nav-pills nav-pills-light">
                                    {chats.map((chat) => (
                                        <li key={chat.id} data-bs-dismiss="offcanvas">
                                            <Link
                                                href={`#${chat.id}`}
                                                className={`nav-link text-start ${activeChatId === chat.id ? 'active' : ''}`}
                                                id={`${chat.id}-tab`}
                                                data-bs-toggle="pill"
                                                role="tab"
                                                onClick={e => { e.preventDefault(); setActiveChatId(chat.id); }}
                                            >
                                                <div className="d-flex">
                                                    <div className={`flex-shrink-0 avatar avatar-sm me-2 ${chat.status ? `status-${chat.status}` : ''}`}>
                                                        <Image className="avatar-img rounded-circle" src={chat.avatar} alt={chat.name} />
                                                    </div>
                                                    <div className="flex-grow-1 d-block">
                                                        <h6 className="mb-0 mt-1">{chat.name}</h6>
                                                        <div className="text-truncate small text-body w-150px">{chat.message}</div>
                                                        <div className="small text-secondary mt-1">{chat.time}</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="mt-auto d-grid">
                            <Link href="#" className="btn btn-primary mb-0">
                                <BiPlus className="me-2" />Create ticket
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default Sidebar;