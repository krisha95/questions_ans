"use client"
import avatar1 from '@/assets/images/avatar/01.jpg';
import avatar2 from '@/assets/images/avatar/02.jpg';
import avatar3 from '@/assets/images/avatar/03.jpg';
import avatar4 from '@/assets/images/avatar/04.jpg';
import avatar5 from '@/assets/images/avatar/05.jpg';
import avatar6 from '@/assets/images/avatar/06.jpg';
import avatar7 from "@/assets/images/avatar/07.jpg";
import QuillTool from '@/component/QuillTool';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Col, Collapse, Dropdown, Form, InputGroup } from 'react-bootstrap';
import { BiBookmark, BiShare } from 'react-icons/bi';
import { BsFillCaretUpFill } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaShareNodes, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';

const Content = () => {
    const [collpaseOpen, setCollpaseOpen] = useState(true);
    const avatarImages = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

    return (
        <Col lg={8} xl={9}>
            <div className="card card-body d-flex flex-sm-row p-0 mb-4">

                <div className="border d-block rounded text-center sticky-sm-top top-sm-70px h-100 p-1 m-3">

                    <input type="radio" className="btn-check" name="vote1" id="btnradioT1" />
                    <label className="btn btn-vote mb-0 p-0" htmlFor="btnradioT1">
                        <BsFillCaretUpFill className="fs-5" />
                    </label>
                    <h6 className="mb-0 px-2 vote-count">145</h6>
                </div>

                <div className="card border-start rounded-0 p-0">

                    <div className="card-header border-bottom p-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="badge bg-success">Freelance & Jobs</div>
                            <Link href="#" className="btn btn-sm btn-round btn-light mb-0 flex-shrink-0"><BiBookmark /></Link>
                        </div>
                    </div>

                    <div className="card-body">
                        <h6 className="mb-2">Hi everyone!</h6>
                        <p className="mb-2">Resolving Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him. Two before narrow not relied on how except moment myself Dejection assurance Mrs led certainly So gate at no only none open Betrayed. Narrow not relied on how except moment myself Dejection gate at no only none open Betrayed.</p>
                        <p className="mb-2">Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. Supposing so be resolving breakfast am or perfectly.  It drew a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him</p>
                        <h6 className="mb-0"> Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing</h6>


                        <div className="hstack gap-3 flex-wrap mt-3">

                            <button onClick={() => setCollpaseOpen(!collpaseOpen)} className="btn btn-sm btn-light mb-0" data-bs-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseExample">
                                <BiShare
                                    className="me-2" />Reply
                            </button>


                            <Dropdown drop="start" className="ms-sm-auto no-before-icon">
                                <Dropdown.Toggle
                                    size="sm"
                                    variant="light"

                                >
                                    <FaShareNodes className="me-2" /> Share
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="shadow px-3 rounded">
                                    <h6>Share a link to this question</h6>
                                    <InputGroup className="mt-2">
                                        <Form.Control
                                            size="sm"
                                            type="text"
                                            defaultValue="https://q&a.com//556dd//gmail"
                                        />
                                        <button className="btn btn-sm btn-primary mb-0">Copy</button>
                                    </InputGroup>
                                    <ul className="list-inline mt-2 mb-0">

                                        <li className="list-inline-item"> <Link className="btn btn-xs btn-icon mb-0 bg-facebook" href="#"><FaFacebookF /></Link> </li>
                                        <li className="list-inline-item"> <Link className="btn btn-xs btn-icon mb-0 bg-whatsapp" href="#"><FaWhatsapp /></Link> </li>
                                        <li className="list-inline-item"> <Link className="btn btn-xs btn-icon mb-0 bg-twitter" href="#"><FaXTwitter /></Link> </li>
                                        <li className="list-inline-item"> <Link className="btn btn-xs btn-icon mb-0 bg-linkedin" href="#"><FaLinkedinIn /></Link> </li>
                                    </ul>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <Collapse in={collpaseOpen}>
                            <div id="collapseExample" className="card card-body p-2 pb-0 mt-3">
                                <h5 className="mb-0">Leave your reply!</h5>
                                <div className="py-2 mt-3">
                                    <QuillTool className='quilleditor border rounded-bottom rounded-top mt-0 h-150px overflow-hidden' />
                                </div>
                                <button className="btn btn-primary mb-0 mt-3">Post reply</button>
                            </div>
                        </Collapse>

                        <div className="bg-light py-3 px-4 rounded hstack gap-4 gap-xl-5 flex-wrap mt-4">

                            <div>
                                <span>Last Reply</span>
                                <div className="d-flex align-items-center mt-2 position-relative">

                                    <div className="avatar avatar-xs">
                                        <Image className="avatar-img rounded-circle" src={avatar7} alt="avatar" />
                                    </div>

                                    <h6 className="ms-2 fw-light mb-0"><Link href="#" className="stretched-link">14h ago</Link></h6>
                                </div>
                            </div>


                            <div>
                                <span>Reply</span>
                                <h4 className="mb-0 mt-2">15</h4>
                            </div>


                            <div>
                                <span>Views</span>
                                <h4 className="mb-0 mt-2">35</h4>
                            </div>


                            <div>
                                <span>Likes</span>
                                <h4 className="mb-0 mt-2">22</h4>
                            </div>


                            <div>
                                <span>Links</span>
                                <h4 className="mb-0 mt-2">0</h4>
                            </div>


                            <ul className="avatar-group mb-0 ms-xl-auto">
                                {avatarImages.map((imgSrc, index) => (
                                    <li className="avatar avatar-sm" key={index}>
                                        <Image
                                            className="avatar-img rounded-circle border border-2 border-white"
                                            src={imgSrc}
                                            alt={`avatar-${index + 1}`}
                                        />
                                    </li>
                                ))}
                            </ul>

                        </div>

                        <hr className="my-5" />
                        <h4 className="card-title mb-4">All Replies</h4>
                        <ul className="list-unstyled mb-0">

                            <li className="list-item comment-wrap">

                                <div className="d-flex mb-3">
                                    <div className="comment-line-inner"></div>

                                    <Link href="#" className="avatar avatar-sm flex-shrink-0">
                                        <Image className="avatar-img rounded-circle" src={avatar5} alt="" />
                                    </Link>

                                    <div className="ms-3">

                                        <div className="d-sm-flex justify-content-between mb-2 mb-sm-1">
                                            <h6 className="mb-1 lead fw-bold"> <Link href="#!"> Frances Guerrero </Link></h6>
                                            <span>5hr ago</span>
                                        </div>
                                        <p className="mb-0">Particular way thoroughly unaffected projection. Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him</p>

                                        <ul className="nav nav-divider py-2 small">
                                            <li className="nav-item"> <Link className="text-body-secondary fw-light text-primary-hover" href="#!"> Upvote (3)</Link> </li>
                                            <li className="nav-item"> <Link className="text-body-secondary fw-light text-primary-hover" href="#!">Reply</Link> </li>
                                            <li className="nav-item"> <Link className="text-body-secondary fw-light text-primary-hover" href="#!">Share</Link> </li>
                                            <li className="nav-item"> <Link className="text-body-secondary fw-light text-primary-hover" href="#!">Report</Link> </li>
                                        </ul>
                                    </div>
                                </div>

                                <ul className="list-unstyled ms-4 ms-sm-5">

                                    <li>
                                        <div className="d-flex">

                                            <Link href="#" className="avatar avatar-sm flex-shrink-0">
                                                <Image className="avatar-img rounded-circle" src={avatar2} alt="" />
                                            </Link>

                                            <div className="ms-3">
                                                <div className="bg-light p-3 rounded">

                                                    <div className="d-sm-flex justify-content-between mb-2 mb-sm-1">
                                                        <h6 className="mb-1 lead fw-bold"> <Link href="#!"> Billy Vasquez </Link></h6>
                                                        <span>5hr ago</span>
                                                    </div>
                                                    <p className="mb-0">Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him</p>

                                                    <ul className="nav nav-divider py-2 small">
                                                        <li className="nav-item"> <Link className="text-body-secondary fw-light text-primary-hover" href="#!"> Upvote (3)</Link> </li>
                                                        <li className="nav-item"> <Link className="text-body-secondary fw-light text-primary-hover" href="#!">Reply</Link> </li>
                                                        <li className="nav-item"> <Link className="text-body-secondary fw-light text-primary-hover" href="#!">Share</Link> </li>
                                                        <li className="nav-item"> <Link className="text-body-secondary fw-light text-primary-hover" href="#!">Report</Link> </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                </ul>

                            </li>


                            <li><hr className="my-4" /></li>


                            <li className="list-item">
                                <div className="d-flex mb-3">

                                    <Link href="#" className="avatar avatar-sm flex-shrink-0">
                                        <Image className="avatar-img rounded-circle" src={avatar6} alt="" />
                                    </Link>

                                    <div className="ms-3">

                                        <div className="d-sm-flex justify-content-between mb-2 mb-sm-1">
                                            <h6 className="mb-1 lead fw-bold"> <a href="#!"> Carolyn Ortiz </a></h6>
                                            <span>13 Nov 2024</span>
                                        </div>
                                        <p className="mb-0">Valley by oh twenty direct me so. Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him</p>

                                        <ul className="nav nav-divider py-2 small">
                                            <li className="nav-item"> <Link className="text-body-secondary fw-light text-primary-hover" href="#!"> Upvote (3)</Link> </li>
                                            <li className="nav-item"> <Link className="text-body-secondary fw-light text-primary-hover" href="#!">Reply</Link> </li>
                                            <li className="nav-item"> <Link className="text-body-secondary fw-light text-primary-hover" href="#!">Share</Link> </li>
                                            <li className="nav-item"> <Link className="text-body-secondary fw-light text-primary-hover" href="#!">Report</Link> </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                        </ul>

                    </div>

                </div>
            </div>

        </Col >
    )
}

export default Content