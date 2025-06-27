import React from 'react'
import { FaSlidersH } from 'react-icons/fa'

const Titles = () => {
    return (
        <div className="container d-sm-flex justify-content-between mb-4 pt-5 pt-xl-3">
            <div className="d-flex justify-content-between gap-2 align-items-center">
                <button className="btn btn-primary d-lg-none mb-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Close">
                    <FaSlidersH /> Chats
                </button>
                <button className="btn btn-primary d-xl-none mb-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvassidebar" aria-controls="offcanvassidebar" aria-label="Close">
                    <FaSlidersH /> Profile
                </button>
            </div>
        </div>
    )
}

export default Titles