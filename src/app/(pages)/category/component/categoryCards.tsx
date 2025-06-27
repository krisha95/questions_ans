import Image, { StaticImageData } from 'next/image';
import { Button, Card, CardBody, CardFooter, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';

import element01 from "@/assets/images/elements/category/01.svg";
import element02 from "@/assets/images/elements/category/02.svg";
import element04 from "@/assets/images/elements/category/04.svg";
import element05 from "@/assets/images/elements/category/05.svg";
import element06 from "@/assets/images/elements/category/06.svg";
import element07 from "@/assets/images/elements/category/07.svg";
import element08 from "@/assets/images/elements/category/08.svg";
import element09 from "@/assets/images/elements/category/09.svg";
import element11 from "@/assets/images/elements/category/11.svg";

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
import avatar11 from "@/assets/images/avatar/11.jpg";
import avatar12 from "@/assets/images/avatar/12.jpg";
import Link from 'next/link';
import { BsExclamationOctagonFill, BsFilePost, BsFillPersonPlusFill, BsMicMute, BsPencilSquare } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa6';
import { BiDotsVerticalRounded } from 'react-icons/bi';

type categoriesType = {
    id: number,
    title: string,
    image: StaticImageData,
    followers: string,
    posts: string,
    avatars: StaticImageData[]
}

const categories: categoriesType[] = [
    {
        id: 1,
        title: "Technology",
        image: element11,
        followers: "1.2K",
        posts: "215",
        avatars: [avatar02, avatar03, avatar04, avatar05],
    },
    {
        id: 2,
        title: "Maths & Arithmetics",
        image: element01,
        followers: "80K",
        posts: "385",
        avatars: [avatar09, avatar08, avatar07, avatar06],
    },
    {
        id: 3,
        title: "Business & Finance",
        image: element02,
        followers: "1M",
        posts: "1.5K",
        avatars: [avatar04, avatar10, avatar08, avatar05],
    },
    {
        id: 4,
        title: "Health",
        image: element04,
        followers: "500",
        posts: "38",
        avatars: [avatar12, avatar06, avatar09, avatar01],
    },
    {
        id: 5,
        title: "Tax Accountants",
        image: element05,
        followers: "5K",
        posts: "185",
        avatars: [avatar02, avatar11, avatar09, avatar07],
    },
    {
        id: 6,
        title: "Law & Legal Issue",
        image: element06,
        followers: "3.2K",
        posts: "105",
        avatars: [avatar08, avatar12, avatar05, avatar09],
    },
    {
        id: 7,
        title: "TV & News",
        image: element07,
        followers: "4M",
        posts: "220",
        avatars: [avatar01, avatar04, avatar08, avatar12],
    },
    {
        id: 8,
        title: "Mechanics",
        image: element08,
        followers: "2K",
        posts: "42",
        avatars: [avatar08, avatar02, avatar08, avatar12],
    },
    {
        id: 9,
        title: "History",
        image: element09,
        followers: "6M",
        posts: "18K",
        avatars: [avatar10, avatar11, avatar08, avatar05],
    },
];

const categoryCards = () => {
    return (
        <Row className="g-4 mb-4">
            {categories.map((cat) => (
                <Col md={6} lg={4} key={cat.id}>
                    <Card className="border h-100">
                        <Dropdown className="position-absolute end-0 top-0 m-3">
                            <DropdownToggle
                                as="a"
                                className="btn btn-sm btn-round btn-light mb-0 flex-shrink-0 popup-after"
                                id={`dropdownbutton${cat.id}`}
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <BiDotsVerticalRounded />
                            </DropdownToggle>
                            <DropdownMenu align="end" className="dropdown-w-sm min-w-auto" aria-labelledby={`dropdownbutton${cat.id}`}>
                                <DropdownItem href="#"><BsExclamationOctagonFill className="me-1" />Report</DropdownItem>
                                <DropdownItem href="#"><BsMicMute className="me-1" />Mute</DropdownItem>
                                <DropdownItem href="#"><BsPencilSquare className="me-1" />Manage</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <CardBody>
                            <div className="avatar avatar-sm mb-3">
                                <Image className="avatar-img" src={cat.image} alt="" width={48} height={48} />
                            </div>
                            <h5 className="card-title">
                                <Link href="/category/post">{cat.title}</Link>
                            </h5>
                            <ul className="nav nav-divider small mt-2">
                                <li className="nav-item"><BsFillPersonPlusFill className="me-1" />{cat.followers} Followers</li>
                                <li className="nav-item"><BsFilePost className="me-1" />{cat.posts} Total Post</li>
                            </ul>
                        </CardBody>
                        <CardFooter className="d-flex justify-content-between align-items-center pt-2">
                            <ul className="avatar-group list-unstyled mb-0">
                                {cat.avatars.map((avatar, i) => (
                                    <li className="avatar avatar-xs" key={i}>
                                        <Image className="avatar-img rounded-circle" src={avatar} alt="avatar" width={32} height={32} />
                                    </li>
                                ))}
                            </ul>
                            <Button variant="primary-soft" size="sm" className="mb-0 mt-auto">
                                <FaPlus className="me-2" />Follow
                            </Button>
                        </CardFooter>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default categoryCards;