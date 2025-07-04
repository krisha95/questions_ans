"use client"
import avatar from "@/assets/images/avatar/01.jpg"
import LogoLight from "@/assets/images/logo-light.svg"
import logo from "@/assets/images/logo.svg"
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { BiInfoCircle } from 'react-icons/bi'
import { BsGear, BsPerson, BsPower } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'


const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const profileMenus = [
        { label: "Edit Profile", link: "/profile", icon: <BsPerson /> },
        { label: "Account Settings", link: "/settings", icon: <BsGear /> },
        { label: "Help", link: "/help-center/index", icon: <BiInfoCircle /> },
        { label: "Sign Out", link: "/auth/signin", icon: <BsPower />, danger: true }
    ]

    useEffect(() => {
        const isDesktop = () => window.innerWidth >= 992

        const handleMouseEnter = (dropdown: Element) => {
            const toggle = dropdown.querySelector('.dropdown-toggle')
            const menu = dropdown.querySelector('.dropdown-menu')

            dropdown.classList.add('show')
            toggle?.classList.add('show')
            menu?.classList.add('show')
            menu?.setAttribute('data-bs-popper', 'static')
        }

        const handleMouseLeave = (dropdown: Element) => {
            const toggle = dropdown.querySelector('.dropdown-toggle')
            const menu = dropdown.querySelector('.dropdown-menu')

            dropdown.classList.remove('show')
            toggle?.classList.remove('show')
            menu?.classList.remove('show')
            menu?.removeAttribute('data-bs-popper')
        }

        const dropdowns = document.querySelectorAll('.dropdown')

        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle')

            if (isDesktop()) {
                dropdown.addEventListener('mouseenter', () => handleMouseEnter(dropdown))
                dropdown.addEventListener('mouseleave', () => handleMouseLeave(dropdown))
            }

            toggle?.addEventListener('click', (e) => {
                if (isDesktop()) return

                e.preventDefault()
                const menu = dropdown.querySelector('.dropdown-menu')
                const isOpen = dropdown.classList.contains('show')

                const siblings = Array.from(dropdown.parentElement?.children || []).filter(
                    el => el !== dropdown && el.classList.contains('dropdown')
                )

                siblings.forEach(sibling => {
                    sibling.classList.remove('show')
                    sibling.querySelector('.dropdown-toggle')?.classList.remove('show')
                    sibling.querySelector('.dropdown-menu')?.classList.remove('show')
                })

                if (!isOpen) {
                    dropdown.classList.add('show')
                    toggle?.classList.add('show')
                    menu?.classList.add('show')
                    menu?.setAttribute('data-bs-popper', 'static')
                } else {
                    dropdown.classList.remove('show')
                    toggle?.classList.remove('show')
                    menu?.classList.remove('show')
                    menu?.removeAttribute('data-bs-popper')
                }
            })
        })

        return () => {
            dropdowns.forEach(dropdown => {
                dropdown.replaceWith(dropdown.cloneNode(true))
            })
        }
    }, [])

    return (
        <header className="header-sticky header-absolute bg-mode">
            <nav className="navbar navbar-expand-xl">
                <Container>
                    <Link className="navbar-brand me-5" href="/">
                        <Image className="light-mode-item navbar-brand-item" src={logo} alt="logo" width={100} />
                        <Image className="dark-mode-item navbar-brand-item" src={LogoLight} alt="logo" />
                    </Link>

                    <div className={`navbar-collapse collapse ${openMenu ? 'show' : ''}`} id="navbarCollapse">
                        <ul className="navbar-nav navbar-nav-scroll dropdown-hover">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" data-bs-auto-close="outside" data-bs-toggle="dropdown">Demos</Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" href="/que-ans/index">Home q&a v1</Link></li>
                                    <li><Link className="dropdown-item" href="/que-ans/index-v2">Home q&a v2</Link></li>
                                    <li><Link className="dropdown-item" href="/que-ans/index-v3">Home q&a v3</Link></li>
                                    <li><Link className="dropdown-item" href="/forum/index-forum">Home Forum</Link></li>
                                    <li><Link className="dropdown-item active" href="/help-center/index">Home Help-center</Link></li>
                                    <li><Link className="dropdown-item" href="/help-center/index-v2">Home Help-center v2</Link></li>
                                    <li><Link className="dropdown-item" href="/tickets/index-ticket">Home Ticket</Link></li>
                                    <li><Link className="dropdown-item" href="/index-discussion">Home Discussion</Link></li>
                                    <li className="dropdown-divider"></li>
                                    <li><Link className="dropdown-item" href="https://q&a.webestica.com/rtl/" target="_blank">RTL demo</Link></li>
                                    <li><Link className="dropdown-item" href="https://support.webestica.com/" target="_blank">Support</Link></li>
                                    <li><Link className="dropdown-item" href="docs/index" target="_blank">Documentation</Link></li>
                                    <li><Link className="dropdown-item" href="https://themes.getbootstrap.com/store/webestica/" target="_blank">Buy Q&A!</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item"><Link className="nav-link" href="/help-center/detail">Detail</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/help-center/faqs">Faqs</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/help-center/support">Support</Link></li>
                        </ul>

                        <div className="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center ms-auto">
                            <div className="nav-item w-100 input-bg-light">
                                <form className="position-relative">
                                    <input className="form-control pe-5" type="search" placeholder="Type search words" aria-label="Search" />
                                    <button className="btn btn-link py-0 position-absolute top-50 end-0 translate-middle-y" type="submit">
                                        <FaSearch className="fs-6 heading-color" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <ul className="nav align-items-center dropdown-hover ms-auto">
                        <li className="nav-item dropdown dropdown-animation">
                            <button className="btn btn-light btn-round mb-0 lh-1" id="bd-theme"
                                type="button"
                                aria-expanded="false"
                                data-bs-toggle="dropdown"
                                data-bs-display="static">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-circle-half theme-icon-active fa-fw fill-mode" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                                    <use href="#"></use>
                                </svg>
                            </button>
                            <ul className="dropdown-menu min-w-auto dropdown-menu-end" aria-labelledby="bd-theme">
                                <li className="mb-1">
                                    <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="light">
                                        <svg width="16" height="16" fill="currentColor" className="bi bi-brightness-high-fill fa-fw mode-switch me-1" viewBox="0 0 16 16">
                                            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                                            <use href="#"></use>
                                        </svg>Light
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="dark">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-stars-fill fa-fw mode-switch me-1" viewBox="0 0 16 16">
                                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                                            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                                            <use href="#"></use>
                                        </svg>Dark
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle-half fa-fw mode-switch me-1" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                                            <use href="#"></use>
                                        </svg>Auto
                                    </button>
                                </li>
                            </ul>
                        </li>

                        <li className="dropdown d-flex justify-content-center ms-3">
                            <Link className="avatar avatar-sm p-0" href="#" data-bs-toggle="dropdown">
                                <Image className="avatar-img rounded-circle" src={avatar} alt="avatar" width={40} />
                            </Link>
                            <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3">
                                <li className="px-3">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar me-3">
                                            <Image className="avatar-img rounded-circle shadow" src={avatar} alt="avatar" width={40} />
                                        </div>
                                        <div>
                                            <Link className="h6" href="#">Lori Ferguson</Link>
                                            <p className="small m-0">example@gmail.com</p>
                                        </div>
                                    </div>
                                    <hr />
                                </li>
                                {profileMenus.map((item, i) => (
                                    <li key={i}>
                                        <Link className={`dropdown-item ${item.danger ? "bg-danger-soft-hover" : ""}`} href={item.link}>
                                            <span className="me-2">{item.icon}</span> {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        <li className="nav-item ms-2">
                            <button className="navbar-toggler ms-sm-3 p-2" type="button" onClick={() => setOpenMenu(!openMenu)}>
                                <span className="navbar-toggler-animation">
                                    <span></span><span></span><span></span>
                                </span>
                            </button>
                        </li>
                    </ul>
                </Container>
            </nav>
        </header>
    )
}

export default NavBar
