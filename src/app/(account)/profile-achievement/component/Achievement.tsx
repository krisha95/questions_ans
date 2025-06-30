import bronz from "@/assets/images/elements/bronz.svg"
import gold from "@/assets/images/elements/gold.svg"
import silver from "@/assets/images/elements/silver.svg"
import Image, { StaticImageData } from 'next/image'
import Link from "next/link"
import { Col, Row } from "react-bootstrap"

type badgeType = {
    img: StaticImageData,
    title: string,
    badges: number,
    posts: string
}

type TopTagType = {
    name: string,
    score: number,
    posts: number
}

const badges: badgeType[] = [
    {
        img: bronz,
        title: "Bronze Badge",
        badges: 546,
        posts: "15K"
    },
    {
        img: silver,
        title: "Silver Badge",
        badges: 204,
        posts: "15K"
    },
    {
        img: gold,
        title: "Gold Badge",
        badges: 124,
        posts: "15K"
    }
]

const topTags: TopTagType[] = [
    {
        name: "Biopython",
        score: 126,
        posts: 186
    },
    {
        name: "Python",
        score: 81,
        posts: 135
    },
    {
        name: "JAVA",
        score: 245,
        posts: 108
    },
    {
        name: "Javascript",
        score: 256,
        posts: 199
    }
]

const Achievement = () => {
    return (
        <div className="card p-0">
            <div className="card-header border-bottom">
                <h4 className="card-title mb-0">Achievement	</h4>
            </div>

            <div className="card-body">

                <Row className="g-4">
                    {badges.map((badge, idx) => (
                        <Col md={4} key={badge.title}>
                            <div className="card card-body border text-center p-3">
                                <Image src={badge.img} className="h-50px mb-2" alt="" />
                                <h5 className="card-title mb-4">{badge.title}</h5>
                                <div className="hstack gap-2 gap-xl-3 justify-content-center">
                                    <div>
                                        <h6 className="mb-0">{badge.badges}</h6>
                                        <small>Badges</small>
                                    </div>
                                    <div className="vr"></div>
                                    <div>
                                        <h6 className="mb-0">{badge.posts}</h6>
                                        <small>Total post</small>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

                <ul className="list-group mt-4">
                    <li className="list-group-item py-3">
                        <h5 className="mb-0">Top tags</h5>
                    </li>
                    {topTags.map((tag) => (
                        <li className="list-group-item d-sm-flex justify-content-between align-items-center py-3" key={tag.name}>
                            <Link href="#" className="badge text-bg-light">{tag.name}</Link>
                            <ul className="nav nav-divider align-items-center mt-2 mt-sm-0">
                                <li className="nav-item">{tag.score} Score</li>
                                <li className="nav-item">{tag.posts} Posts</li>
                            </ul>
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    )
}

export default Achievement