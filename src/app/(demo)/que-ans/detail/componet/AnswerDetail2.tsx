"use client"
import avatar03 from "@/assets/images/avatar/03.jpg"
import avavtar9 from "@/assets/images/avatar/09.jpg"
import Image from 'next/image'
import Link from 'next/link'
import { Dropdown, Form, InputGroup } from "react-bootstrap"
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn, FaPenToSquare, FaShareNodes, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'

const AnswerDetail2 = () => {

    return (
        <div className="card p-0">
            <div className="hstack gap-0 d-block d-sm-flex align-items-start">

                <div className="user-vote w-50px w-sm-70px">

                    <div className="px-1 p-sm-3">
                        <div className="btn-group vstack align-items-center" role="group">

                            <input type="radio" className="btn-check" name="vote3" id="btnradioT9" />
                            <label className="btn btn-vote mb-0" htmlFor="btnradioT9">
                                <BsFillCaretUpFill className="fs-5" />
                            </label>


                            <h6 className="mb-0 px-2 vote-count">14</h6>


                            <input type="radio" className="btn-check" name="vote3" id="btnradioT10" />
                            <label className="btn btn-vote mb-0" htmlFor="btnradioT10">
                                <BsFillCaretDownFill className="fs-5" />
                            </label>
                        </div>
                    </div>
                </div>

                <div className="vr d-none d-sm-block"></div>

                <div className="card-body p-3">
                    <p>Branching allows developers to create separate lines of development, enabling
                        the implementation of new features, bug fixes, or experiments without
                        affecting the main codebase. Merging brings these changes back into the main
                        branch, ensuring a smooth integration of different features developed in
                        parallel.</p>
                    <p>I have never used this package, but it seems like it could be as simple as:
                    </p>


                    <p className="mb-0 mt-3">Check this link: <a
                        href="#">http://github.com/package.jason</a></p>


                    <div className="hstack gap-2 mt-3">
                        <Link href="#" className="badge bg-light text-body">Python</Link>
                        <Link href="#" className="badge bg-light text-body">JAVA</Link>
                    </div>


                    <div className="d-md-flex justify-content-md-between mt-3">

                        <div className="hstack gap-3 flex-wrap align-items-start">

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
                            <Link href="#" className="btn btn-sm btn-light mb-0">
                                <FaPenToSquare className="me-2" />Edit
                            </Link>
                        </div>


                        <div className="bg-light border py-2 px-3 rounded mt-3 mt-md-0">
                            <small className="text-secondary">Edited 2 hours ago</small>
                            <div className="d-flex align-items-center mt-1">

                                <div className="avatar">
                                    <Image className="avatar-img rounded-circle"
                                        src={avatar03} alt="avatar" />
                                </div>

                                <div className="ms-2">
                                    <h6 className="mb-1"><Link href="#">Samuel Bishop</Link></h6>

                                    <ul className="nav nav-achievement-divider small">
                                        <li className="nav-item dote-gold">10</li>
                                        <li className="nav-item dote-silver">24</li>
                                        <li className="nav-item dote-bronze">125</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="bg-light d-sm-flex rounded-2 p-3 mt-3">

                        <div className="avatar avatar-sm flex-shrink-0 me-2">
                            <Link href="#"> <Image className="avatar-img rounded-circle"
                                src={avavtar9} alt="" /> </Link>
                        </div>
                        <div className="input-group align-items-start">
                            <textarea className="form-control me-2 rounded" id="commentTextarea2"
                                rows={1} placeholder="Add a comment..."
                                spellCheck="false"></textarea>
                            <button type="button" className="btn btn-primary mb-0 rounded">Post</button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default AnswerDetail2