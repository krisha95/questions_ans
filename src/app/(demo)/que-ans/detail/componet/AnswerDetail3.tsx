"use client"
import avatr5 from "@/assets/images/avatar/05.jpg"
import avatar9 from "@/assets/images/avatar/09.jpg"
import Image from 'next/image'
import Link from 'next/link'
import { Card, Dropdown, Form, InputGroup } from 'react-bootstrap'
import { BsCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn, FaPenToSquare, FaShareNodes, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'

const AnswerDetail3 = () => {
    return (
        <Card className="p-0">
            <div className="hstack gap-0 d-block d-sm-flex align-items-start">

                <div className="user-vote w-50px w-sm-70px">

                    <div className="px-1 p-sm-4">
                        <div className="btn-group vstack align-items-center" role="group">

                            <input type="radio" className="btn-check" name="vote4" id="btnradioT8" />
                            <label className="btn btn-vote mb-0" htmlFor="btnradioT8">
                                <BsFillCaretUpFill className="fs-5" />
                            </label>

                            <h6 className="mb-0 px-2 vote-count">5</h6>

                            <input type="radio" className="btn-check" name="vote4" id="btnradioT17" />
                            <label className="btn btn-vote mb-0" htmlFor="btnradioT17">
                                <BsCaretDownFill className="fs-5" />
                            </label>
                        </div>
                    </div>
                </div>

                <div className="vr d-none d-sm-block"></div>

                <div className="card-body p-3">
                    <p className="mb-0">I have never used this package, but it seems like it could be as
                        simple as:</p>

                    <div className="d-grid">
                        <pre style={{ backgroundColor: "#343a40" }}>
                            <code className="language-markup" data-lang="html">
                                {`
             $ node-sass [options] &lt;input.scss&gt; [output.css]
             $ cat &lt;input.scss&gt; | node-sass &gt; output.css
                                `}
                            </code>
                        </pre>
                    </div>


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
                                <FaPenToSquare className="me-2" />Edit</Link>
                        </div>


                        <div className="bg-light border py-2 px-3 rounded mt-3 mt-md-0">

                            <small className="text-secondary">Edited 2 hours ago</small>

                            <div className="d-flex align-items-center mt-1">

                                <div className="avatar">
                                    <Image className="avatar-img rounded-circle"
                                        src={avatr5} alt="avatar" />
                                </div>

                                <div className="ms-2">
                                    <h6 className="mb-1"><Link href="#">Frances Guerrero</Link></h6>

                                    <ul className="nav nav-achievement-divider small">
                                        <li className="nav-item dote-silver">8</li>
                                        <li className="nav-item dote-bronze">85</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="bg-light d-sm-flex rounded-2 p-3 mt-3">

                        <div className="avatar avatar-sm flex-shrink-0 me-2">
                            <Link href="#"> <Image className="avatar-img rounded-circle"
                                src={avatar9} alt="" /> </Link>
                        </div>
                        <div className="input-group align-items-start">
                            <textarea className="form-control me-2 rounded" id="commentTextarea"
                                rows={1} placeholder="Add a comment..."
                                spellCheck="false"></textarea>
                            <button type="button" className="btn btn-primary mb-0 rounded">Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </Card>
    )
}

export default AnswerDetail3