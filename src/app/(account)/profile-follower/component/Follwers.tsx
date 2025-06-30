import React from 'react'
import avatar1 from "@/assets/images/avatar/01.jpg"
import avatar2 from "@/assets/images/avatar/02.jpg"
import avatar3 from "@/assets/images/avatar/03.jpg"
import avatar4 from "@/assets/images/avatar/04.jpg"
import avatar5 from "@/assets/images/avatar/05.jpg"
import avatar6 from "@/assets/images/avatar/06.jpg"
import avatar7 from "@/assets/images/avatar/07.jpg"
import avatar9 from "@/assets/images/avatar/09.jpg"
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { BsFillPersonCheckFill } from 'react-icons/bs'

type Follower = {
    id: number
    avatar: StaticImageData
    name: string
    desc?: string
    followers: string
    posts: string
}

const followersData: Follower[] = [
    {
        id: 1,
        avatar: avatar1,
        name: "Lori Ferguson",
        desc: "Former Self Employee",
        followers: "4K Followers",
        posts: "235 Posts"
    },
    {
        id: 2,
        avatar: avatar2,
        name: "Louis Ferguson",
        desc: "Full Stack Web Developer",
        followers: "15K Followers",
        posts: "356 Posts"
    },
    {
        id: 3,
        avatar: avatar3,
        name: "Samuel Bishop",
        desc: "former Intern at Microsoft (2021-2024)",
        followers: "845 Followers",
        posts: "25 Posts"
    },
    {
        id: 4,
        avatar: avatar4,
        name: "Dennis Barrett",
        followers: "260 Followers",
        posts: "5 Posts"
    },
    {
        id: 5,
        avatar: avatar5,
        name: "Amanda Reed",
        desc: "Digital Marketing Executive at folio.com (2024-present)",
        followers: "65K Followers",
        posts: "856 Posts"
    },
    {
        id: 6,
        avatar: avatar6,
        name: "Judy Nguyen",
        desc: "Digital Marketing Executive at folio.com (2024-present)",
        followers: "2K Followers",
        posts: "101 Posts"
    },
    {
        id: 7,
        avatar: avatar7,
        name: "Bryan Knight",
        followers: "586 Followers",
        posts: "25 Posts"
    },
    {
        id: 8,
        avatar: avatar9,
        name: "Joan Wallace",
        desc: "Digital Marketing Executive at qanda.com",
        followers: "1M Followers",
        posts: "2K Posts"
    },
]

const Follwers = () => {
    return (
        <div className="card p-0">
            <div className="card-header border-bottom">
                <h4 className="card-title mb-0">Followers</h4>
            </div>
            <div className="card-body">
                {followersData.map((user, idx) => (
                    <React.Fragment key={user.id}>
                        <div className="d-md-flex align-items-center">
                            <div className="avatar me-3 mb-2 mb-md-0 flex-shrink-0">
                                <Link href="#!">
                                    <Image className="avatar-img rounded-circle" src={user.avatar} alt="" />
                                </Link>
                            </div>
                            <div>
                                <div className="d-sm-flex">
                                    <h6 className="mb-0"><Link href="#!">{user.name}</Link></h6>
                                    {user.desc && <p className="small ms-sm-2 mb-0">{user.desc}</p>}
                                </div>
                                <ul className="nav nav-divider small mb-2 mb-md-0">
                                    <li className="nav-item">{user.followers}</li>
                                    <li className="nav-item">{user.posts}</li>
                                </ul>
                            </div>
                            <div className="ms-md-auto">
                                <button className="btn btn-sm btn-success mb-0"><BsFillPersonCheckFill className="me-2" />Followed</button>
                            </div>
                        </div>
                        {idx !== followersData.length - 1 && <hr />}
                    </React.Fragment>
                ))}
                <div className="d-grid mt-3">
                    <Link href="#!" role="button" className="btn btn-primary-soft mb-0">Load more users</Link>
                </div>
            </div>
        </div>
    )
}

export default Follwers