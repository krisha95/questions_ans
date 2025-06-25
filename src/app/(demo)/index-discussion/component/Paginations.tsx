import Link from 'next/link'
import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa6'

const Paginations = () => {
    return (
        <nav className="d-flex justify-content-center" aria-label="navigation">
            <ul className="pagination pagination-primary-soft bg-mode flex-wrap rounded mb-0">
                <li className="page-item"><Link className="page-link" href="#" tabIndex={-1}><FaAngleLeft /> Previous</Link></li>
                <li className="page-item active"><Link className="page-link" href="#">1</Link></li>
                <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                <li className="page-item "><Link className="page-link" href="#">3</Link></li>
                <li className="page-item"><Link className="page-link" href="#">..</Link></li>
                <li className="page-item"><Link className="page-link" href="#">6</Link></li>
                <li className="page-item"><Link className="page-link" href="#">Next <FaAngleRight /></Link></li>
            </ul>
        </nav>
    )
}

export default Paginations