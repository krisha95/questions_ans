"use client"
import avatar1 from "@/assets/images/avatar/01.jpg"
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { ReactNode, useState } from 'react'
import { Collapse, Dropdown, DropdownItem, DropdownMenu } from 'react-bootstrap'
import { BiBookmark, BiDotsHorizontal } from 'react-icons/bi'
import { BsFillExclamationOctagonFill, BsFillHandThumbsDownFill, BsFillHandThumbsUpFill } from 'react-icons/bs'
import { FaCopy, FaFire } from 'react-icons/fa6'


type Category = {
    label: string;
    hot?: boolean;
    color?: 'info' | 'danger' | 'orange';  
}
type User = {
    avatar: StaticImageData
    name: string
    gold: number
    silver: number
    bronze: number
}

type Stats = {
    answers: string
    views: number
}

type CommonCardProps = {
    voteCount?: number
    categories?: Category[]
    title?: string
    date?: string
    content?: string | ReactNode
    tags?: string[]
    user?: User
    stats?: Stats
    showExpand?: boolean
    expandedContent?: string | ReactNode
    avatars?: StaticImageData[] 
}

const CommonCard = ({
    voteCount = 0,
    categories = [],
    title = "",
    date = "",
    content = "",
    tags = [],
    user = {
        avatar: avatar1,
        name: "Anonymous",
        gold: 0,
        silver: 0,
        bronze: 0
    },
    stats = {
        answers: "",
        views: 0
    },
    showExpand = false,
    expandedContent = "",
    avatars = []
}: CommonCardProps) => {
    const [expanded, setExpanded] = useState(false)
    const [show, setShow] = useState(false)

    const handleToggle = (isOpen: boolean) => setShow(isOpen);

    return (
        <div className="card hstack gap-0 align-items-start p-0">
            <div className="hstack gap-2 position-absolute top-0 end-0 p-3">
                <button className="btn btn-sm btn-round btn-light mb-0 flex-shrink-0">
                    <BiBookmark />
                </button>

                <div className="dropdown d-none d-sm-block">
                    <Dropdown show={show} onToggle={handleToggle}>
                        <div
                            className="btn btn-sm btn-round btn-light mb-0 flex-shrink-0"
                            onClick={() => setShow(!show)}
                        >
                            <BiDotsHorizontal />
                        </div>

                        <DropdownMenu className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded">
                            <DropdownItem as={Link} href="#" className="dropdown-item">
                                <BsFillExclamationOctagonFill className="me-2" />
                                Report
                            </DropdownItem>
                            <DropdownItem as={Link} href="#" className="dropdown-item">
                                <FaCopy className="me-2" />
                                Copy link
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>

            <div className="user-vote w-70px p-3">
                <div className="btn-group vstack flex-wrap gap-1 align-items-center" role="group">
                    <input type="radio" className="btn-check" name={`vote-${title}`} id={`upvote-${title}`} />
                    <label className="btn btn-vote mb-0" htmlFor={`upvote-${title}`}>
                        <BsFillHandThumbsUpFill />
                    </label>

                    <h6 className="mb-0 vote-count">{voteCount}</h6>

                    <input type="radio" className="btn-check" name={`vote-${title}`} id={`downvote-${title}`} />
                    <label className="btn btn-vote mb-0" htmlFor={`downvote-${title}`}>
                        <BsFillHandThumbsDownFill />
                    </label>
                </div>
            </div>
            <div className="vr"></div>

            <div className="card-body p-sm-4">
                <div className="d-block d-sm-flex flex-wrap gap-2 mb-3">
                    {categories.map((cat, i) => {
                        const badgeStyle = cat.hot
                            ? 'bg-danger bg-opacity-10 text-danger'
                            : cat.color
                                ? `bg-${cat.color} bg-opacity-10 text-${cat.color}`
                                : 'bg-info bg-opacity-10 text-info';

                        return (
                            <span key={i} className={`badge ${badgeStyle}`}>
                                {cat.hot && <FaFire className="me-2" />}
                                {cat.label}
                            </span>
                        )
                    })}
                </div>

                <h5 className="card-title mb-1">
                    <Link href="/answer-detail">{title}</Link>
                </h5>
                <small>Asked: {date}</small>

                <div className="mt-2">
                    {showExpand ? (
                        <>
                            <p className="mb-0">
                                {content}
                                <span
                                    className="text-primary cursor-pointer ms-1"
                                    onClick={() => setExpanded(!expanded)}
                                >
                                    ({expanded ? 'less' : 'more'})
                                </span>
                            </p>
                            <Collapse in={expanded}>
                                <div>
                                    <p className="mb-0 mt-2">{expandedContent}</p>
                                </div>
                            </Collapse>
                        </>
                    ) : (
                        <p className="mb-0">{content}</p>
                    )}
                </div>

                <div className="hstack gap-2 mt-2">
                    {tags.map((tag, i) => (
                        <Link key={i} href="#" className="badge bg-light text-body">{tag}</Link>
                    ))}
                </div>

                <div className="d-md-flex justify-content-md-between mt-4">
                    <div className="d-flex align-items-center">
                        <div className="avatar">
                            <Image
                                className="avatar-img rounded-circle"
                                src={user.avatar}
                                alt={user.name}
                                width={40}
                                height={40}
                            />
                        </div>
                        <div className="ms-2">
                            <h6 className="mb-0"><Link href="/profile">{user.name}</Link></h6>
                            <ul className="nav nav-achievement-divider small">
                                <li className="nav-item dote-gold">{user.gold}</li>
                                <li className="nav-item dote-silver">{user.silver}</li>
                                <li className="nav-item dote-bronze">{user.bronze}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="hstack flex-wrap gap-2 mt-3 mt-md-0">
                        <ul className="avatar-group mb-0">
                            {avatars.slice(0, 4).map((avatar, i) => (
                                <li key={i} className="avatar avatar-xs">
                                    <Image
                                        className="avatar-img rounded-circle border border-2 border-white"
                                        src={avatar}
                                        alt={`avatar-${i}`}
                                        width={24}
                                        height={24}
                                    />
                                </li>
                            ))}
                        </ul>
                        <ul className="nav nav-divider-slash small heading-color align-items-center">
                            <li className="nav-item">
                                <Link href="/answer-detail" className="p-0 mb-0 text-primary-hover">
                                    {stats.answers} Answer{stats.answers !== "1" ? 's' : ''}
                                </Link>
                            </li>
                            <li className="nav-item">{stats.views} Views</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommonCard