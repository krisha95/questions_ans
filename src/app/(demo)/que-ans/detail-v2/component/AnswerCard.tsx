"use client"
import React, { useState } from 'react'
import avatar8 from "@/assets/images/avatar/08.jpg"
import Image from 'next/image'
import Link from 'next/link'
import { Card, Collapse } from 'react-bootstrap'
import { BsFillCaretUpFill } from 'react-icons/bs'
import avatar9 from "@/assets/images/avatar/09.jpg"
import { FaFacebookF, FaLinkedinIn, FaShareNodes, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'


const AnswerCard = () => {
    const [open, setOpen] = useState(false);
    const [collpas, setcollpas] = useState(false)
    const link = "https://q&a.com//556dd//gmail";
    return (
        <Card className="card-body p-sm-4">

            <div className="d-flex justify-content-between">
                <div className="d-sm-flex align-items-center mb-3">

                    <div className="avatar flex-shrink-0">
                        <Image className="avatar-img rounded-circle" src={avatar8} alt="avatar" />
                    </div>

                    <div className="ms-sm-2">
                        <h6 className="mb-1"><Link href="#">Louis Ferguson</Link></h6>
                        <small>Digital Marketing Ninja</small>
                    </div>
                </div>

                <span>2 day ago</span>
            </div>

            <p>I have never used this package, but it seems like it could be as simple a. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him.</p>

            <p className="mb-0">I have never used this package, but it seems like it could be as simple as:</p>

            <div className="d-grid">
                <pre>
                    <code className="language-markup" data-lang="html"> {`
                        $ node-sass [options] &lt;input.scss&gt; [output.css]
                        $ cat &lt;input.scss&gt; | node-sass &gt; output.css
                    `}</code></pre>
            </div>


            <div className="hstack gap-2 mt-3">
                <Link href="#" className="badge bg-light text-body">Python</Link>
                <Link href="#" className="badge bg-light text-body">JAVA</Link>
            </div>


            <div className="hstack gap-2 gap-sm-3 flex-wrap mt-4">

                <div className="border px-2 py-0 rounded-1 d-flex align-items-center gap-1">
                    <input type="radio" className="btn-check" name="vote2" id="btnradioT2" />
                    <label className="btn btn-vote mb-0" htmlFor="btnradioT2">
                        <BsFillCaretUpFill className="fs-5" />
                    </label>
                    <span className="fw-normal">00</span>
                </div>


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

                <button onClick={() => setcollpas(!collpas)} className="btn btn-sm btn-light mb-0 ms-sm-auto" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseComment1">0 Reply</button>
            </div>
            <Collapse in={collpas}>
                <div id="collapseComment1">
                    <form className="bg-light d-sm-flex rounded-2 p-3 mt-3">
                        <div className="avatar avatar-sm flex-shrink-0 me-2">
                            <Link href="#">
                                <Image className="avatar-img rounded-circle" src={avatar9} alt="" />
                            </Link>
                        </div>
                        <div className="input-group align-items-start">
                            <textarea
                                className="form-control me-2 rounded"
                                id="commentTextarea"
                                rows={2}
                                placeholder="Add a comment..."
                                spellCheck="false"
                            ></textarea>
                            <button type="button" className="btn btn-primary mb-0 rounded">Post</button>
                        </div>
                    </form>
                </div>
            </Collapse>
        </Card >
    )
}

export default AnswerCard