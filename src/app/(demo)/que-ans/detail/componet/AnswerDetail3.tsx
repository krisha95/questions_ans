"use client"
import React, { useState } from 'react'
import avatar9 from "@/assets/images/avatar/09.jpg"
import avatr5 from "@/assets/images/avatar/05.jpg"
import Image from 'next/image'
import Link from 'next/link'
import { BsCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn, FaPenToSquare, FaShareNodes, FaTwitter, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'
import { Card } from 'react-bootstrap'

const AnswerDetail3 = () => {
    const [open, setOpen] = useState(false);
    const link = "https://q&a.com//556dd//gmail";

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
                        <pre>
                            <code className="language-markup" data-lang="html">{`
                                $ node-sass [options] &lt;input.scss&gt; [output.css]
                                $ cat &lt;input.scss&gt; | node-sass &gt; output.css
                            `}</code></pre>
                    </div>


                    <div className="hstack gap-2 mt-3">
                        <Link href="#" className="badge bg-light text-body">Python</Link>
                        <Link href="#" className="badge bg-light text-body">JAVA</Link>
                    </div>


                    <div className="d-md-flex justify-content-md-between mt-3">

                        <div className="hstack gap-3 flex-wrap align-items-start">

                            <div className="dropdown">
                                <button onClick={() => setOpen(!open)} className="btn btn-sm btn-light mb-0">
                                    <FaShareNodes className="me-2" /> Share
                                </button>

                                {open && (
                                    <div className="dropdown-menu show d-block shadow px-3 rounded mt-1">
                                        <h6>Share a link to this question</h6>
                                        <div className="input-group mt-2">
                                            <input className="form-control form-control-sm" value={link} readOnly />
                                            <button className="btn btn-sm btn-primary" onClick={() => navigator.clipboard.writeText(link)}>Copy</button>
                                        </div>
                                        <div className="d-flex gap-2 mt-2">
                                            <Link href="#" className="btn btn-xs bg-facebook text-white"><FaFacebookF /></Link>
                                            <Link href="#" className="btn btn-xs bg-whatsapp text-white"><FaWhatsapp /></Link>
                                            <Link href="#" className="btn btn-xs bg-twitter text-white"><FaXTwitter /></Link>
                                            <Link href="#" className="btn btn-xs bg-linkedin text-white"><FaLinkedinIn /></Link>
                                        </div>
                                    </div>
                                )}
                            </div>


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