"use client"
import avatar03 from "@/assets/images/avatar/03.jpg"
import avatar04 from "@/assets/images/avatar/04.jpg"
import avatar05 from "@/assets/images/avatar/05.jpg"
import avatar08 from "@/assets/images/avatar/08.jpg"
import avatar09 from "@/assets/images/avatar/09.jpg"
import post1 from "@/assets/images/post/01.jpg"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react"
import { Card, Col, Collapse, Dropdown, DropdownMenu, DropdownToggle, Row, Tabs, Tab, Button } from 'react-bootstrap'
import { BiHeart } from "react-icons/bi"
import { BsCalendarDate, BsFillCaretUpFill, BsGlobe2, BsPerson } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn, FaQuestion, FaReply, FaShareNodes, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'

const Tabes = () => {
    const [open, setopen] = useState(false)
    const [activeTab, setActiveTab] = useState<string>('post')

    return (
        <Row className="g-4">
            <Col lg={8}>
                <div className="vstack gap-4">
                    <div className="bg-mode rounded px-3 pt-0 pb-0">
                        <Tabs
                            id="group-tabs"
                            activeKey={activeTab}
                            onSelect={(k) => setActiveTab(k || 'post')}
                            className="nav nav-tabs nav-responsive nav-bottom-line mb-0 border-0"
                        >
                            <Tab eventKey="post" title="Post" />
                            <Tab eventKey="about" title="About" />
                            <Tab eventKey="questions" title={<span>Questions <span className="badge bg-danger bg-opacity-10 text-danger small">0</span></span>} />
                            <Tab eventKey="members" title="Members" />
                        </Tabs>
                    </div>
                    <div className="tab-content pt-0 pb-0 mb-0">
                        <div className={`tab-pane fade${activeTab === 'post' ? ' active show' : ''}`} id="group-tab-1">
                            <div className="vstack gap-4">
                                {/* Post Card */}
                                <Card className="card-body p-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="avatar">
                                            <Image className="avatar-img rounded-circle" src={avatar03} alt="avatar" />
                                        </div>
                                        <div className="ms-2">
                                            <h6 className="mb-0"><Link href="#">Samuel Bishop</Link></h6>
                                            <ul className="nav nav-divider small">
                                                <li className="nav-item">Digital Marketing Ninja</li>
                                                <li className="nav-item">24 August</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h5>Explain the concept of recursion in programming, and provide an example?</h5>
                                    <p className="mb-2">A classic example is the calculation of the factorial of a number, where the factorial of n is calculated as <b>n! = n * (n-1)!</b>, and the base case is <b>0! = 1</b>. A recursive function can elegantly express this mathematical relationship.</p>
                                    <p className="mb-0">I have never used this package, but it seems like it could be as simple as. Valley by oh twenty direct me so. Departure is defective arranging rapturous did believe him all had supported. Family months lasted simply set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Suspicion neglected the resolving agreement perceived at an.</p>
                                    <div className="hstack gap-3 flex-wrap align-items-start mt-3">
                                        <div className="border px-2 py-0 rounded-1 d-flex align-items-center gap-1">
                                            <input type="radio" className="btn-check" name="vote3" id="btnradioT3" />
                                            <label className="btn btn-vote mb-0" htmlFor="btnradioT3">
                                                <BsFillCaretUpFill className="fs-5" />
                                            </label>
                                            <span className="fw-normal">3</span>
                                        </div>
                                        <Button onClick={() => setopen(!open)} size="sm" variant="light" className="mb-0" aria-controls="collapseComment" aria-expanded={open}>
                                            Comment (1)
                                        </Button>
                                        <Dropdown className="no-after-icon">
                                            <DropdownToggle className="btn btn-sm btn-light mb-0" id="dropdownShare5">
                                                <FaShareNodes className="me-2" /> Share
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu dropdown-menu-size-sm shadow px-3 rounded" aria-labelledby="dropdownShare5">
                                                <h6>Share a link to this question</h6>
                                                <div className="input-group mt-2">
                                                    <input className="form-control form-control-sm" type="text" value="https:q&amp;a.com//556dd//gmail" readOnly />
                                                    <Button size="sm" variant="primary" className="mb-0">Copy</Button>
                                                </div>
                                                <ul className="list-inline mt-2 mb-0">
                                                    <li className="list-inline-item"> <Link className="btn btn-xs btn-icon mb-0 bg-facebook" href="#"><FaFacebookF /></Link> </li>
                                                    <li className="list-inline-item"> <Link className="btn btn-xs btn-icon mb-0 bg-whatsapp" href="#"><FaWhatsapp /></Link> </li>
                                                    <li className="list-inline-item"> <Link className="btn btn-xs btn-icon mb-0 bg-twitter" href="#"><FaXTwitter /></Link> </li>
                                                    <li className="list-inline-item"> <Link className="btn btn-xs btn-icon mb-0 bg-linkedin" href="#"><FaLinkedinIn /></Link> </li>
                                                </ul>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                    <Collapse in={open}>
                                        <ul className="comment-wrap list-unstyled mt-4 mb-0">
                                            <li className="comment-item">
                                                <div className="d-flex mb-4">
                                                    <div className="avatar avatar-sm flex-shrink-0">
                                                        <Link href="#"><Image className="avatar-img rounded-circle" src={avatar05} alt="" /></Link>
                                                    </div>
                                                    <div className="ms-2">
                                                        <h6 className="mb-0"> <Link href="#!"> Frances Guerrero </Link></h6>
                                                        <div className="hstack gap-4 flex-wrap">
                                                            <small>8 hour ago</small>
                                                            <Link href="#" className="btn btn-sm btn-link p-0 text-primary-hover mb-0"><FaReply className="me-1" />Reply</Link>
                                                        </div>
                                                        <p className="heading-color mb-0 mt-2">What are you trying to get?</p>
                                                    </div>
                                                </div>
                                                <ul className="list-unstyled ms-4">
                                                    <li className="comment-item">
                                                        <div className="d-flex">
                                                            <div className="avatar avatar-sm flex-shrink-0">
                                                                <Link href="#"><Image className="avatar-img rounded-circle" src={avatar04} alt="" /></Link>
                                                            </div>
                                                            <div className="ms-2">
                                                                <h6 className="mb-0"> <a href="#!"> Dennis Barrett </a></h6>
                                                                <div className="hstack gap-4 flex-wrap">
                                                                    <small>10 hour ago</small>
                                                                    <Link href="#" className="btn btn-sm btn-link p-0 text-primary-hover mb-0"><FaReply className="me-1" />Reply</Link>
                                                                </div>
                                                                <p className="heading-color mb-0 mt-2">You can also use the whenever gem to create and manage your crontab on deploys.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <Link href="#!" role="button" className="btn btn-sm btn-link mb-0 p-0 text-primary-hover mt-2">
                                                    Load more replies...
                                                </Link>
                                            </li>
                                        </ul>
                                    </Collapse>
                                    <form className="bg-light d-sm-flex rounded-2 p-3 mt-3">
                                        <div className="avatar avatar-sm flex-shrink-0 me-2">
                                            <Link href="#"> <Image className="avatar-img rounded-circle" src={avatar09} alt="" /> </Link>
                                        </div>
                                        <div className="input-group align-items-start">
                                            <textarea className="form-control me-2 rounded" id="commentTextarea3" rows={1} placeholder="Add a comment..." spellCheck="false"></textarea>
                                            <Button type="button" variant="primary" className="mb-0 rounded">Post</Button>
                                        </div>
                                    </form>
                                </Card>
                                {/* Second Post Card */}
                                <Card className="card-body p-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="avatar">
                                            <Image className="avatar-img rounded-circle" src={avatar08} alt="avatar" />
                                        </div>
                                        <div className="ms-2">
                                            <h6 className="mb-0"><a href="my-profile.html">Billy Vasquez</a></h6>
                                            <ul className="nav nav-divider small">
                                                <li className="nav-item">Marketing experts by folio</li>
                                                <li className="nav-item">29 August</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h5>Product Subtract Button is not working perfectly in e-commerce app</h5>
                                    <p className="mb-0">It drew a hill from me. Valley by oh twenty direct me so. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Suspicion neglected the resolving agreement perceived at an.</p>
                                    <Image src={post1} className="rounded mt-2" alt="" />
                                    <div className="hstack gap-3 flex-wrap align-items-start mt-3">
                                        <div className="border px-2 py-0 rounded-1 d-flex align-items-center gap-1">
                                            <input type="radio" className="btn-check" name="vote1" id="btnradioT1" />
                                            <label className="btn btn-vote mb-0" htmlFor="btnradioT1">
                                                <BsFillCaretUpFill className="fs-5" />
                                            </label>
                                            <span className="fw-normal">0</span>
                                        </div>
                                        <Button size="sm" variant="light" className="mb-0">Comment</Button>
                                        <Dropdown className="no-after-icon">
                                            <DropdownToggle className="btn btn-sm btn-light mb-0" id="dropdownShare6">
                                                <FaShareNodes className="me-2" /> Share
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu dropdown-menu-size-sm shadow px-3 rounded" aria-labelledby="dropdownShare6">
                                                <h6>Share a link to this question</h6>
                                                <div className="input-group mt-2">
                                                    <input className="form-control form-control-sm" type="text" value="https:q&amp;a.com//556dd//gmail" readOnly />
                                                    <Button size="sm" variant="primary" className="mb-0">Copy</Button>
                                                </div>
                                                <ul className="list-inline mt-2 mb-0">
                                                    <li className="list-inline-item"> <Link className="btn btn-xs btn-icon mb-0 bg-facebook" href="#"><FaFacebookF /></Link> </li>
                                                    <li className="list-inline-item"> <Link className="btn btn-xs btn-icon mb-0 bg-whatsapp" href="#"><FaWhatsapp /></Link> </li>
                                                    <li className="list-inline-item"> <Link className="btn btn-xs btn-icon mb-0 bg-twitter" href="#"><FaXTwitter /></Link> </li>
                                                    <li className="list-inline-item"> <Link className="btn btn-xs btn-icon mb-0 bg-linkedin" href="#"><FaLinkedinIn /></Link> </li>
                                                </ul>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                    <form className="bg-light d-sm-flex rounded-2 p-3 mt-3">
                                        <div className="avatar avatar-sm flex-shrink-0 me-2">
                                            <Link href="#"> <Image className="avatar-img rounded-circle" src={avatar09} alt="" /> </Link>
                                        </div>
                                        <div className="input-group align-items-start">
                                            <textarea className="form-control me-2 rounded" id="commentTextarea8" rows={1} placeholder="Add a comment..." spellCheck="false"></textarea>
                                            <Button type="button" variant="primary" className="mb-0 rounded">Post</Button>
                                        </div>
                                    </form>
                                </Card>
                            </div>
                        </div>
                        <div className={`tab-pane fade${activeTab === 'about' ? ' active show' : ''}`} id="group-tab-2">
                            <Card className="card-body">
                                <div className="my-sm-5 py-sm-5 text-center">
                                    <BsPerson className="display-1 text-muted" />
                                    <h4 className="mt-2 mb-3 text-body">No about details</h4>
                                    <Button variant="primary-soft" size="sm"> Click here to add </Button>
                                </div>
                            </Card>
                        </div>
                        <div className={`tab-pane fade${activeTab === 'questions' ? ' active show' : ''}`} id="group-tab-3">
                            <Card className="card-body">
                                <div className="my-sm-5 py-sm-5 text-center">
                                    <FaQuestion className="display-1 text-muted fa-solid" />
                                    <h4 className="mt-2 mb-3 text-body">No questions founds</h4>
                                    <Button variant="primary-soft" size="sm"> Click here to add </Button>
                                </div>
                            </Card>
                        </div>
                        <div className={`tab-pane fade${activeTab === 'members' ? ' active show' : ''}`} id="group-tab-4">
                            <Card className="card-body">
                                <div className="my-sm-5 py-sm-5 text-center">
                                    <BsPerson className="display-1 text-muted" />
                                    <h4 className="mt-2 mb-3 text-body">No members founds</h4>
                                    <Button variant="primary-soft" size="sm"> Click here to add </Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={4}>
                <Card className="p-0">
                    <div className="card-header border-bottom p-3">
                        <h4 className="card-title mb-0">About</h4>
                    </div>
                    <div className="card-body p-3">
                        <p className="mb-0">Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Departure defective arranging rapturous did believe him all had supported. </p>
                        <ul className="list-unstyled mt-3 mb-0">
                            <li className="mb-2"> <BsCalendarDate className="pe-1" size={20} /> People: <strong> 4K Members </strong> </li>
                            <li className="mb-2"> <BiHeart className="pe-1" size={20} /> Status: <strong> Public </strong> </li>
                            <li className="mb-2"> <BsGlobe2 className="pe-1" size={20} /> <strong>www.webestica.com </strong> </li>
                        </ul>
                    </div>

                </Card>
            </Col>
        </Row>
    )
}

export default Tabes