"use client"
import React, { useRef, useState, useEffect } from 'react'

type MenuItem = {
    label: string
    icon: React.ReactNode
    onClick?: () => void
    href?: string
    divider?: boolean
}

interface CustomDropdownProps {
    icon: React.ReactNode
    menuItems: MenuItem[]
    align?: 'start' | 'end'
    className?: string
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
    icon,
    menuItems,
    align = 'end',
    className = '',
}) => {
    const [show, setShow] = useState(false)
    const menuRef = useRef<HTMLUListElement>(null)
    const toggleRef = useRef<HTMLSpanElement>(null)

    const handleClickOutside = (event: MouseEvent) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target as Node) &&
            toggleRef.current &&
            !toggleRef.current.contains(event.target as Node)
        ) {
            setShow(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div className={`dropdown ${className} position-relative`}>
            <span
                ref={toggleRef}
                className="btn btn-sm btn-round btn-light mb-0 flex-shrink-0"
                onClick={() => setShow((prev) => !prev)}
                role="button"
                aria-expanded={show}
            >
                {icon}
            </span>

            <ul
                ref={menuRef}
                className={`dropdown-menu dropdown-w-sm dropdown-menu-start min-w-auto shadow rounded ${show ? 'show' : ''}`}
                style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    zIndex: 999,
                    transform: 'translateY(8px)',
                }}
            > 
                {menuItems.map((item, index) =>
                    item.divider ? (
                        <li key={`divider-${index}`} className="dropdown-divider" />
                    ) : (
                        <li key={index}>
                            <a
                                className="dropdown-item d-flex align-items-center gap-2"
                                href={item.href || '#'}
                                onClick={(e) => {
                                    e.preventDefault()
                                    item.onClick?.()
                                    setShow(false)
                                }}
                            >
                                {item.icon}
                                {item.label}
                            </a>
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}

export default CustomDropdown
