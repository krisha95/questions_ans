'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { BsBellFill } from 'react-icons/bs'
import avatar01 from '@/assets/images/avatar/01.jpg'
import avatar05 from '@/assets/images/avatar/05.jpg'
import avatar08 from '@/assets/images/avatar/08.jpg'

type NotificationAction = { label: string; className: string }

type NotificationItem =
    | {
        type: 'avatar'
        name: string
        message: string
        time: string
        avatar: StaticImageData
        actions?: NotificationAction[]
    }
    | {
        type: 'initials'
        name: string
        message: string
        time: string
        initials: string
        bgColor: string
    }

const notifications: NotificationItem[] = [
    {
        type: 'avatar',
        name: 'Judy Nguyen',
        message: 'started following you.',
        time: 'Just now',
        avatar: avatar01,
        actions: [
            { label: 'Confirm', className: 'btn-primary me-2' },
            { label: 'Delete', className: 'btn-outline-light' }
        ]
    },
    {
        type: 'avatar',
        name: 'Frances Guerrero',
        message: 'who you might know is on, Q&A.',
        time: '1h ago',
        avatar: avatar05,
        actions: [{ label: 'Follow', className: 'btn-primary me-2' }]
    },
    {
        type: 'initials',
        name: 'Webestica',
        message: 'mention 😍 you in creative page',
        time: '1h ago',
        initials: 'WB',
        bgColor: 'bg-success'
    },
    {
        type: 'avatar',
        name: 'Billy Vasquez',
        message: 'accept your follow request',
        time: '2h ago',
        avatar: avatar08
    }
]

const Notification = () => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLLIElement>(null)

    useEffect(() => {
        const closeDropdown = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', closeDropdown)
        return () => document.removeEventListener('mousedown', closeDropdown)
    }, [])

    return (
        <li
            ref={dropdownRef}
            className={`nav-item dropdown dropdown-animation ms-2 ms-xl-3 ${isOpen ? 'show' : ''}`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <Link
                href="#"
                className={`nav-link ps-0 ${isOpen ? 'show' : ''}`}
                id="notifDropdown"
                role="button"
                onClick={(e) => {
                    e.preventDefault()
                    setIsOpen(!isOpen)
                }}
                aria-expanded={isOpen}
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
            >
                <span className="badge-notif animation-blink"></span>
                <BsBellFill className="fs-4" />
            </Link>

            <div
                className={`dropdown-menu dropdown-menu-end dropdown-menu-size-md p-0 ${isOpen ? 'show' : ''}`}
                aria-labelledby="notifDropdown"
                data-bs-popper={isOpen ? 'static' : undefined}
            >
                <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center border-bottom">
                        <h6 className="m-0">
                            Notifications
                            <span className="badge bg-danger bg-opacity-10 text-danger ms-2">{notifications.length} new</span>
                        </h6>
                        <Link href="#" className="small">Clear all</Link>
                    </div>

                    <div className="card-body p-0">
                        <ul className="list-group list-group-flush list-unstyled p-2">
                            {notifications.map((noti, index) => (
                                <li key={index}>
                                    {noti.type === 'avatar' ? (
                                        <div className="list-group-item list-group-item-action rounded badge-unread d-flex border-0 mb-1 p-3">
                                            <div className="avatar avatar-sm status-online text-center flex-shrink-0">
                                                <Image className="avatar-img rounded-circle" src={noti.avatar} alt={noti.name} />
                                            </div>
                                            <div className="ms-2 ms-sm-3">
                                                <p className="small mb-2">
                                                    <b>{noti.name}</b> {noti.message}
                                                    <span className="ms-2 text-secondary">({noti.time})</span>
                                                </p>
                                                {noti.actions && (
                                                    <div className="d-flex">
                                                        {noti.actions.map((action, idx) => (
                                                            <button key={idx} className={`btn btn-xs mb-0 ${action.className}`}>
                                                                {action.label}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link href="#" className="list-group-item list-group-item-action rounded d-flex border-0 mb-1 p-3">
                                            <div className="avatar avatar-sm flex-shrink-0 text-center">
                                                <div className={`avatar-img rounded-circle ${noti.bgColor}`}>
                                                    <span className="text-white position-absolute top-50 start-50 translate-middle fw-bold">
                                                        {noti.initials}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="ms-2 ms-sm-3">
                                                <p className="small mb-2">
                                                    <b>{noti.name}</b> {noti.message}
                                                    <span className="ms-2 text-secondary">({noti.time})</span>
                                                </p>
                                            </div>
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card-footer text-center border-top">
                        <Link href="notification.html" className="btn btn-sm btn-link mb-0 p-0">
                            See all incoming activity
                        </Link>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Notification
