import React from 'react'

const LeftSide = () => {
    return (
        <div className="col-lg-4 col-xl-3">
            <nav className="navbar navbar-light navbar-expand-lg mx-0">
                <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Setting tabs</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body p-0">
                        <div className="card card-body">
                            <ul className="nav nav-tabs nav-pills nav-pills-primary-soft flex-column gap-2 border-0">
                                <li className="nav-item">
                                    <a className="nav-link mb-0 active" href="#nav-setting-tab-1" data-bs-toggle="tab">Account</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mb-0" href="#nav-setting-tab-2" data-bs-toggle="tab">Privacy</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mb-0" href="#nav-setting-tab-3" data-bs-toggle="tab">Email & Notification</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mb-0" href="#nav-setting-tab-4" data-bs-toggle="tab">Display</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mb-0" href="#nav-setting-tab-5" data-bs-toggle="tab">Deactivate Account</a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <ul className="nav justify-content-center mt-4">
                        <li className="nav-item">
                            <a className="nav-link small" href="about.html">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link small" href="index-ticket.html">Ticket</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link small" href="#">Terms</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link small" href="index-forum.html">Forum</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link small" href="index-help-center.html">Help center</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link small" href="index-discussion.html">Discussion</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link small" href="blog.html">Blog</a>
                        </li>
                    </ul>


                    <div className="text-primary-hover text-center small mt-2"> Copyrights <a href="#" className="text-body">©2025 Q&A</a>. </div>
                </div>
            </nav>
        </div>)
}

export default LeftSide