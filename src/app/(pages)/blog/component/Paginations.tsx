import React from 'react'

const Paginations = () => {
    return (
        <nav className="d-flex justify-content-center mt-5" aria-label="navigation">
            <ul className="pagination pagination-primary-soft rounded mb-0">
                <li className="page-item mb-0">
                    <a className="page-link" href="#" tabIndex={-1}>
                        <i className="fa-solid fa-angle-left"></i>
                    </a>
                </li>
                <li className="page-item mb-0">
                    <a className="page-link" href="#">
                        1
                    </a>
                </li>
                <li className="page-item mb-0 active">
                    <a className="page-link" href="#">
                        2
                    </a>
                </li>
                <li className="page-item mb-0">
                    <a className="page-link" href="#">
                        ..
                    </a>
                </li>
                <li className="page-item mb-0">
                    <a className="page-link" href="#">
                        6
                    </a>
                </li>
                <li className="page-item mb-0">
                    <a className="page-link" href="#">
                        <i className="fa-solid fa-angle-right"></i>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Paginations