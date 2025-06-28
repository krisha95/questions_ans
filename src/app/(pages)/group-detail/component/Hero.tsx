import avatar01 from "@/assets/images/avatar/01.jpg";
import avatar02 from "@/assets/images/avatar/02.jpg";
import avatar03 from "@/assets/images/avatar/03.jpg";
import avatar04 from "@/assets/images/avatar/04.jpg";
import avatar05 from "@/assets/images/avatar/05.jpg";
import avatar06 from "@/assets/images/avatar/06.jpg";
import avatar07 from "@/assets/images/avatar/07.jpg";
import avatar08 from "@/assets/images/avatar/08.jpg";
import avatar09 from "@/assets/images/avatar/09.jpg";
import avatar10 from "@/assets/images/avatar/10.jpg";
import logo01 from "@/assets/images/elements/logo/01.svg";
import Image from 'next/image';
import { Button, Card, Dropdown, DropdownDivider, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap';
import { BiBookmark, BiDotsHorizontalRounded, BiGlobe, BiLock } from "react-icons/bi";
import { BsFileEarmarkPdf, BsFillPatchCheckFill, BsFillPersonPlusFill, BsGear } from "react-icons/bs";

const group = {
    name: "Mountain movers",
    logo: logo01,
    isVerified: true,
    type: "Public Group",
    followers: "4K",
    created: "Aug 26, 2021",
    members: "2.5K",
    questions: "365",
    posts: "256",
    avatars: [
        avatar01, avatar02, avatar03, avatar04, avatar05, avatar06, avatar07, avatar08, avatar09, avatar10
    ],
    moreCount: 19,
    joinedText: "Carolyn Ortiz, Frances Guerrero, and 20 joined the group"
};

const Hero = () => {
    return (
        <Card className="card-body p-4">
            <div className="d-lg-flex justify-content-lg-between text-center text-lg-start">
                <div className="d-lg-flex mb-3 mb-lg-0">
                    <div className="avatar avatar-xl flex-shrink-0">
                        <Image className="avatar-img rounded-circle border-2 bg-white" src={group.logo} alt="" width={64} height={64} />
                    </div>
                    <div className="ms-0 ms-lg-4">
                        <h1 className="card-title mb-0 h3">
                            {group.name}
                            {group.isVerified && <BsFillPatchCheckFill className="small text-info ms-2" />}
                        </h1>
                        <ul className="nav nav-divider justify-content-center justify-content-lg-start mb-0 mt-1">
                            <li className="nav-item"><BiGlobe className="pe-1" size={20} />{group.type}</li>
                            <li className="nav-item">{group.followers} Followers</li>
                            <li className="nav-item">Created {group.created}</li>
                        </ul>
                    </div>
                </div>
                <div className="hstack gap-2 justify-content-center justify-content-lg-start align-items-start">
                    <Button variant="primary" className="mb-0 me-2">
                        <BsFillPersonPlusFill className="me-2" />Join now
                    </Button>
                    <Dropdown align="end" className="no-after-icon">
                        <DropdownToggle as={Button} variant="light" className="btn-icon mb-0">
                            <BiDotsHorizontalRounded />
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href="#"><BiBookmark className="pe-2" size={24} />Share profile in a message</DropdownItem>
                            <DropdownItem href="#"><BsFileEarmarkPdf className="pe-2" size={24} />Save your profile to PDF</DropdownItem>
                            <DropdownItem href="#"><BiLock className="pe-2" size={24} />Lock profile</DropdownItem>
                            <DropdownDivider />
                            <DropdownItem href="#"><BsGear className="pe-2" size={24} />Profile settings</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            <div className="d-md-flex justify-content-md-between mt-4">
                <ul className="avatar-group list-unstyled align-items-center justify-content-center justify-content-md-start mb-3 mb-sm-0 flex-wrap">
                    {group.avatars.map((avatar, idx) => (
                        <li className="avatar avatar-xs" key={idx}>
                            <Image className="avatar-img rounded-circle" src={avatar} alt="avatar" width={32} height={32} />
                        </li>
                    ))}
                    <li className="avatar avatar-xs me-2">
                        <div className="avatar-img rounded-circle bg-dark position-relative" style={{ width: 32, height: 32 }}>
                            <span className="smaller text-white position-absolute top-50 start-50 translate-middle">+{group.moreCount}</span>
                        </div>
                    </li>
                    <li className="small text-center mt-2 mt-lg-0">
                        {group.joinedText}
                    </li>
                </ul>
                <div className="hstack gap-3 justify-content-center justify-content-md-end mt-4 mt-md-0">
                    <div>
                        <h6 className="mb-0">{group.members}</h6>
                        <small>Members</small>
                    </div>
                    <div className="vr"></div>
                    <div>
                        <h6 className="mb-0">{group.questions}</h6>
                        <small>Questions</small>
                    </div>
                    <div className="vr"></div>
                    <div>
                        <h6 className="mb-0">{group.posts}</h6>
                        <small>Post</small>
                    </div>
                </div>
            </div>
        </Card>
    );
};
export default Hero