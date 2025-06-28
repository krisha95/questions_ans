import Link from 'next/link'
import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'

const Paginations = () => {
    return (
        <nav className="d-flex justify-content-center" aria-label="navigation">
            <ul className="pagination pagination-primary-soft rounded mb-0">
                <li className="page-item mb-0"><Link className="page-link" href="#" tabIndex={-1}><FaAngleLeft /></Link></li>
                <li className="page-item mb-0"><Link className="page-link" href="#">1</Link></li>
                <li className="page-item mb-0 active"><Link className="page-link" href="#">2</Link></li>
                <li className="page-item mb-0"><Link className="page-link" href="#">..</Link></li>
                <li className="page-item mb-0"><Link className="page-link" href="#">6</Link></li>
                <li className="page-item mb-0"><Link className="page-link" href="#"><FaAngleRight /></Link></li>
            </ul>
        </nav>
    )
}

export default Paginations