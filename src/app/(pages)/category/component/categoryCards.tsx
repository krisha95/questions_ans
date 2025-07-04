import Image from 'next/image'
import { Button, Card, CardBody, CardFooter, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'

import catMath from '@/assets/images/elements/category/01.svg'
import catBusiness from '@/assets/images/elements/category/02.svg'
import catHealth from '@/assets/images/elements/category/04.svg'
import catTax from '@/assets/images/elements/category/05.svg'
import catLaw from '@/assets/images/elements/category/06.svg'
import catTV from '@/assets/images/elements/category/07.svg'
import catMechanics from '@/assets/images/elements/category/08.svg'
import catHistory from '@/assets/images/elements/category/09.svg'
import catTech from '@/assets/images/elements/category/11.svg'

import avatar01 from '@/assets/images/avatar/01.jpg'
import avatar02 from '@/assets/images/avatar/02.jpg'
import avatar03 from '@/assets/images/avatar/03.jpg'
import avatar04 from '@/assets/images/avatar/04.jpg'
import avatar05 from '@/assets/images/avatar/05.jpg'
import avatar06 from '@/assets/images/avatar/06.jpg'
import avatar07 from '@/assets/images/avatar/07.jpg'
import avatar08 from '@/assets/images/avatar/08.jpg'
import avatar09 from '@/assets/images/avatar/09.jpg'
import avatar10 from '@/assets/images/avatar/10.jpg'
import avatar11 from '@/assets/images/avatar/11.jpg'
import avatar12 from '@/assets/images/avatar/12.jpg'
import Link from 'next/link'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsExclamationOctagon, BsFilePost, BsFillMicMuteFill, BsPencilSquare, BsPersonPlusFill } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa6'

const categories = [
    {
        name: "Technology",
        image: catTech,
        followers: "1.2K",
        posts: 215,
        avatars: [avatar02, avatar03, avatar04, avatar05],
    },
    {
        name: "Maths & Arithmetics",
        image: catMath,
        followers: "80K",
        posts: 385,
        avatars: [avatar09, avatar08, avatar07, avatar06],
    },
    {
        name: "Business & Finance",
        image: catBusiness,
        followers: "1M",
        posts: 1500,
        avatars: [avatar04, avatar10, avatar08, avatar05],
    },
    {
        name: "Health",
        image: catHealth,
        followers: "500",
        posts: 38,
        avatars: [avatar12, avatar06, avatar09, avatar01],
    },
    {
        name: "Tax Accountants",
        image: catTax,
        followers: "5K",
        posts: 185,
        avatars: [avatar02, avatar11, avatar09, avatar07],
    },
    {
        name: "Law & Legal Issue",
        image: catLaw,
        followers: "3.2K",
        posts: 105,
        avatars: [avatar08, avatar12, avatar05, avatar09],
    },
    {
        name: "TV & News",
        image: catTV,
        followers: "4M",
        posts: 220,
        avatars: [avatar01, avatar04, avatar08, avatar12],
    },
    {
        name: "Mechanics",
        image: catMechanics,
        followers: "2K",
        posts: 42,
        avatars: [avatar08, avatar02, avatar08, avatar12],
    },
    {
        name: "History",
        image: catHistory,
        followers: "6M",
        posts: 18000,
        avatars: [avatar10, avatar11, avatar08, avatar05],
    },
]

const CategoryCards = () => {
    return (
        <Row className="g-4 mb-4">
            {categories.map((cat) => (
                <Col md={6} lg={4} key={cat.name}>
                    <Card border="secondary" className="h-100 position-relative">
                        <Dropdown align="end" className="position-absolute end-0 top-0 m-3 no-after-icon">
                            <DropdownToggle as={Button} variant="light" size="sm" className="btn-round mb-0 flex-shrink-0">
                                <BiDotsHorizontalRounded />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-w-sm min-w-auto">
                                <DropdownItem href="#"><BsExclamationOctagon className="fa-fw me-1" />Report</DropdownItem>
                                <DropdownItem href="#"><BsFillMicMuteFill className="fa-fw me-1" />Mute</DropdownItem>
                                <DropdownItem href="#"><BsPencilSquare className="fa-fw me-1" />Manage</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <CardBody>
                            <div className="avatar avatar-sm mb-3 mx-auto">
                                <Image className="avatar-img" src={cat.image} alt={cat.name} width={48} height={48} />
                            </div>
                            <h5 className="card-title">
                                <Link href="/category/post">{cat.name}</Link>
                            </h5>
                            <ul className="nav nav-divider small mt-2">
                                <li className="nav-item"><BsPersonPlusFill className="me-1" />{cat.followers} Followers</li>
                                <li className="nav-item"><BsFilePost className="me-1" />{cat.posts} Total Post</li>
                            </ul>
                        </CardBody>
                        <CardFooter className="d-flex justify-content-between align-items-center pt-2">
                            <ul className="avatar-group list-unstyled mb-0">
                                {cat.avatars.map((avt, i) => (
                                    <li className="avatar avatar-xs" key={i}>
                                        <Image className="avatar-img rounded-circle" src={avt} alt="avatar" width={28} height={28} />
                                    </li>
                                ))}
                            </ul>
                            <Button variant="primary" size="sm" className="mb-0 mt-auto btn-primary-soft">
                                <FaPlus className="me-2" />Follow
                            </Button>
                        </CardFooter>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default CategoryCards