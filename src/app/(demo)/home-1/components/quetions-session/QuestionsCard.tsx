import React from 'react'
import avatar3 from "@/assets/images/avatar/03.jpg"
import Image from 'next/image'
import { BsFillBookmarkFill, BsFillEyeFill, BsFillHandThumbsUpFill, BsFillPatchCheckFill, BsHandThumbsDownFill } from 'react-icons/bs'
import Link from 'next/link'
import { Col, Row } from 'react-bootstrap'
import { BiBookmark } from 'react-icons/bi'
import avatar9 from "@/assets/images/avatar/09.jpg"

const QuestionsCard = () => {
    return (
        <>
            <div className="card dropdown-hover p-4">
                <div className="position-absolute end-0 top-0 p-3">
                    <Link href="#" className="btn btn-sm btn-round btn-light mb-0 ms-2 ms-sm-3 flex-shrink-0"><BsFillBookmarkFill /></Link>
                </div>

                <Row className="g-3 g-lg-0">
                    <Col xs={3} md={2}>
                        <div className="dropdown d-block mb-2">
                            <Link href="#" className="avatar avatar-lg" id="dropdownProfile" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                <Image className="avatar-img rounded-circle" src={avatar3} alt="avatar" />
                            </Link>
                            {/* <div className="dropdown-menu dropdown-menu-size-sm px-3 py-4" aria-labelledby="dropdownProfile">
                            <div className="d-flex align-items-center">
                                <div className="avatar flex-shrink-0">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar">
                                </div>
                                <div className="ms-3">
                                <h6 className="mb-0"><a href="#">Dennis Barrett</a></h6>
                                <small>Join: 2 Years ago</small>
                                </div>
                                </div>
                                
                                <ul className="list-group list-group-borderless small mb-0 mt-2">
                                <li className="list-group-item d-flex mb-0 pt-0">
                                <i className="bi bi-geo me-2"></i>Live in the USA
                                </li>
                                <li className="list-group-item d-flex mb-0 pt-0">
                                <i className="bi bi-patch-check me-2"></i>Active in 10 Categories
                                </li>
                                <li className="list-group-item d-flex mb-0 pt-0">
                                <i className="bi bi-globe2 me-2"></i>Knows English, French, German
                                </li>
                                </ul>
                                
                                <div className="d-flex justify-content-between mt-2">
                                <button className="btn btn-sm btn-primary-soft mb-0"> 15K Follow </button>
                                
                                <div className="hstack gap-2">
                                <a className="btn btn-sm btn-icon btn-light mb-0" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Message"> <i className="bi bi-chat-right-text-fill"></i> </a>

                                    <div className="dropup">
                                    <a href="#" className="btn btn-sm btn-icon btn-light mb-0" id="friendtActionProfile1" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                            <i className="bi bi-three-dots"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end min-w-auto px-0 py-2" aria-labelledby="friendtActionProfile1">
                                        <li><a className="dropdown-item small" href="#"> <i className="bi bi-slash-circle-fill fa-fw pe-2"></i>Block </a></li>
                                            <li><a className="dropdown-item small" href="#"> <i className="bi bi-flag-fill fa-fw pe-2"></i>Report</a></li>
                                            </ul>
                                    </div>
                                    </div>
                            </div>
                            </div> */}
                        </div>

                        <div className="btn-group align-items-center" role="group">
                            <input type="radio" className="btn-check" name="vote2" id="btnradio1" checked />
                            <label className="btn btn-vote mb-0" htmlFor="btnradio1"><BsFillHandThumbsUpFill /></label>
                            <h6 className="mb-0 px-2 vote-count">36</h6>
                            <input type="radio" className="btn-check" name="vote2" id="btnradio12" />
                            <label className="btn btn-vote mb-0" htmlFor="btnradio12"> <BsHandThumbsDownFill /></label>
                        </div>
                    </Col>

                    <Col md={10}>
                        <div className="card-body p-0">
                            <h5 className="card-title mb-2 me-md-5"><Link href="/answer-detail">What is the difference between a compiler and an interpreter?</Link></h5>
                            <div className="d-flex align-items-center gap-2 flex-wrap mb-3">
                                <span className="badge text-bg-dark">Programmer</span>
                                <small>Asked: 07 Nov 2024</small>
                            </div>
                            <p className="mb-0">A compiler translates the entire source code into machine code before execution, while an interpreter translates and executes the code line by line. Object-oriented programming is a programming paradigm that organizes code into.</p>
                            <div className="hstack gap-2 mt-2">
                                <Link href="#" className="badge bg-light text-body">Python</Link>
                                <Link href="#" className="badge bg-light text-body">Biopython</Link>
                                <Link href="#" className="badge bg-light text-body">JAVA</Link>
                            </div>

                            <div className="hstack gap-3 mt-4 flex-wrap justify-content-end">
                                <small><BsFillEyeFill className='me-1' />5K views</small>
                                <a href="answer-detail.html" className="btn btn-dark mb-0">15 Answers</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>



            <div className="card dropdown-hover p-4">

                <div className="position-absolute end-0 top-0 p-3">
                    <Link href="#" className="btn btn-sm btn-round btn-light mb-0 ms-2 ms-sm-3 flex-shrink-0"><BiBookmark /></Link>
                </div>

                <Row className="g-3 g-lg-0">
                    <Col xs={3} md={2}>
                        <div className="dropdown d-block mb-2">
                            <a href="#" className="avatar avatar-lg" id="dropdownProfile2" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                <Image className="avatar-img rounded-circle" src={avatar9} alt="" />
                                <span className="position-absolute top-100 start-100 translate-middle ms-n2 mt-n3 bg-mode rounded-circle lh-1 h-20px">
                                    <BsFillPatchCheckFill className='text-info fs-5' />
                                </span>
                            </a>
                            {/* 
                            <div className="dropdown-menu dropdown-menu-size-sm px-3 py-4" aria-labelledby="dropdownProfile2">
                                <div className="d-flex align-items-center">
                                    <div className="avatar flex-shrink-0">
                                        <Image className="avatar-img rounded-circle" src={avatar9} alt="avatar" />
                                        <span className="position-absolute top-100 start-100 translate-middle ms-n1 mt-n3 bg-mode rounded-circle lh-1">
                                            <BsFillPatchCheckFill className='text-info' />

                                        </span>
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="mb-0"><a href="#">Carolyn Ortiz</a></h6>
                                        <small>Join: 2 Years ago</small>
                                    </div>
                                </div>

                                <ul className="list-group list-group-borderless small mb-0 mt-2">
                                    <li className="list-group-item d-flex mb-0 pt-0">
                                        <i className="bi bi-briefcase me-2"></i>Founder at Facts of business and plans
                                    </li>
                                    <li className="list-group-item d-flex mb-0 pt-0">
                                        <i className="bi bi-geo me-2"></i>Live in the USA
                                    </li>
                                    <li className="list-group-item d-flex mb-0 pt-0">
                                        <i className="bi bi-patch-check me-2"></i>Active in 10 Categories
                                    </li>
                                    <li className="list-group-item d-flex mb-0 pt-0">
                                        <i className="bi bi-globe2 me-2"></i>Knows English, French, German
                                    </li>
                                </ul>

                                <div className="d-flex justify-content-between mt-2">
                                    <button className="btn btn-sm btn-primary-soft mb-0"> 15K Follow </button>

                                    <div className="hstack gap-2">
                                        <a className="btn btn-sm btn-icon btn-light mb-0" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Message"> <i className="bi bi-chat-right-text-fill"></i> </a>

                                        <div className="dropup">
                                            <a href="#" className="btn btn-sm btn-icon btn-light mb-0" id="friendtActionProfile" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                                <i className="bi bi-three-dots"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end min-w-auto px-0 py-2" aria-labelledby="friendtActionProfile">
                                                <li><a className="dropdown-item small" href="#"> <i className="bi bi-slash-circle-fill fa-fw pe-2"></i>Block </a></li>
                                                <li><a className="dropdown-item small" href="#"> <i className="bi bi-flag-fill fa-fw pe-2"></i>Report</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        </div>
                        <div className="btn-group align-items-center" role="group">
                            <input type="radio" className="btn-check" name="vote3" id="btnradio3" />
                            <label className="btn btn-vote mb-0" htmlFor="btnradio3"><BsFillHandThumbsUpFill /></label>

                            <h6 className="mb-0 px-2 vote-count">102</h6>

                            <input type="radio" className="btn-check" name="vote3" id="btnradio4" />
                            <label className="btn btn-vote mb-0" htmlFor="btnradio4"> <BsHandThumbsDownFill /></label>
                        </div>
                    </Col>

                    <Col md={10}>
                        <div className="card-body p-0">
                            <h5 className="card-title mb-2 me-md-5"><a href="answer-detail.html">What is version control, and why is it important in software development?</a></h5>

                            <div className="d-flex align-items-center gap-2 flex-wrap mb-3">
                                <span className="badge text-bg-dark">Developer</span>
                                <small>Asked: 07 Nov 2024</small>
                            </div>

                            <p className="mb-0">Version control is a system that tracks changes to code, allowing multiple developers to collaborate on a project. It helps manage and document changes, reducing errors and facilitating collaboration.</p>

                            <div className="hstack gap-2 mt-2">
                                <Link href="#" className="badge bg-light text-body">Python</Link>
                                <Link href="#" className="badge bg-light text-body">Biopython</Link>
                                <Link href="#" className="badge bg-light text-body">JAVA</Link>
                            </div>

                            <div className="hstack gap-3 mt-4 flex-wrap justify-content-end">
                                <small>
                                    <BsFillEyeFill className='me-1' />
                                    8K views</small>
                                <Link href="/answer-detail" className="btn btn-dark mb-0">08 Answers</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default QuestionsCard