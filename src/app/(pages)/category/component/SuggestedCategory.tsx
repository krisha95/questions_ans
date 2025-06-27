import React from 'react'
import { Card, Button, CardHeader, CardBody, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { FaUserPlus, FaFileAlt, FaPlus } from 'react-icons/fa'

import catImg1 from '@/assets/images/elements/category/12.svg'
import catImg2 from '@/assets/images/elements/category/05.svg'
import catImg3 from '@/assets/images/elements/category/04.svg'
import catImg4 from '@/assets/images/elements/category/08.svg'
import avatar01 from '@/assets/images/avatar/01.jpg'
import avatar02 from '@/assets/images/avatar/02.jpg'
import avatar05 from '@/assets/images/avatar/05.jpg'
import avatar07 from '@/assets/images/avatar/07.jpg'
import avatar08 from '@/assets/images/avatar/08.jpg'
import avatar09 from '@/assets/images/avatar/09.jpg'
import avatar10 from '@/assets/images/avatar/10.jpg'
import avatar11 from '@/assets/images/avatar/11.jpg'
import avatar12 from '@/assets/images/avatar/12.jpg'
import Image, { StaticImageData } from 'next/image'

type categoriesType = {
    id: number,
    title: string,
    image: StaticImageData,
    followers: string,
    posts: string,
    avatars: StaticImageData[],
    description: string
}


const categories: categoriesType[] = [
    {
        id: 1,
        title: 'Language & Literature',
        image: catImg1,
        description: 'Defective arranging rapturous did believe him all had supported.',
        followers: '4M',
        posts: '220',
        avatars: [avatar02, avatar11, avatar09, avatar07],
    },
    {
        id: 2,
        title: 'Tax Accountants',
        image: catImg2,
        description: 'Defective arranging rapturous did believe him all had supported.',
        followers: '215',
        posts: '51',
        avatars: [avatar08, avatar02, avatar08, avatar12],
    },
    {
        id: 3,
        title: 'Health',
        image: catImg3,
        description: 'Family months lasted simple set nature vulgar him. Picture for attempt joy excited.',
        followers: '1M',
        posts: '10K',
        avatars: [avatar01, avatar12, avatar10, avatar05],
    },
    {
        id: 4,
        title: 'Mechanics',
        image: catImg4,
        description: 'Family months lasted simple set nature vulgar him. Picture for attempt joy excited.',
        followers: '2K',
        posts: '125',
        avatars: [avatar10, avatar11, avatar08, avatar05],
    },
]
const SuggestedCategory = () => {
    return (
        <Card className="p-0">
            <CardHeader className="p-4 pb-0">
                <h4 className="mb-0">Suggested Categories</h4>
            </CardHeader>

            <CardBody className="p-4">
                <Row className="g-4">
                    {categories.map((cat) => (
                        <Col xl={6} key={cat.id}>
                            <Card className="p-4 border">
                                <Row className="g-4 g-md-5">
                                    <Col sm={3} md={2}>
                                        <div className="avatar avatar-lg">
                                            <Link href="#">
                                                <Image className="avatar-img" src={cat.image} alt={cat.title} />
                                            </Link>
                                        </div>
                                    </Col>

                                    <Col sm={9} md={10}>
                                        <CardBody className="p-0">
                                            <h5 className="card-title mb-2">
                                                <Link href="/category-post">{cat.title}</Link>
                                            </h5>
                                            <p className="mb-2">{cat.description}</p>

                                            <ul className="nav nav-divider small">
                                                <li className="nav-item">
                                                    <FaUserPlus className="me-1" /> {cat.followers} Followers
                                                </li>
                                                <li className="nav-item">
                                                    <FaFileAlt className="me-1" /> {cat.posts} Total Post
                                                </li>
                                            </ul>

                                            <div className="hstack gap-3 flex-wrap mt-4">
                                                <ul className="avatar-group list-unstyled mb-0 d-flex">
                                                    {cat.avatars.map((avatar, index) => (
                                                        <li className="avatar avatar-xs" key={index}>
                                                            <Image className="avatar-img rounded-circle" src={avatar} alt="avatar" />
                                                        </li>
                                                    ))}
                                                </ul>

                                                <Button className="btn-sm btn-primary-soft mb-0 ms-sm-auto">
                                                    <FaPlus className="me-2" />
                                                    Follow
                                                </Button>
                                            </div>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </CardBody>
        </Card>
    )
}

export default SuggestedCategory
