"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { BsCaretDownFill, BsFillCaretUpFill, BsFillPatchCheckFill } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn, FaPenToSquare, FaReply, FaShareNodes, FaTwitter, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'
import avtar2 from "@/assets/images/avatar/02.jpg"
import avatar4 from "@/assets/images/avatar/04.jpg"
import avatar5 from "@/assets/images/avatar/05.jpg"
import avatar6 from "@/assets/images/avatar/06.jpg"
import avatar8 from "@/assets/images/avatar/08.jpg"
import avatar9 from "@/assets/images/avatar/09.jpg"
import Image from 'next/image'

const AnswerDetails = () => {
    const [open, setOpen] = useState(false);
    const link = "https://q&a.com//556dd//gmail";
    return (
        <>
            <div className="card p-0" >
                <div className="hstack gap-0 d-block d-sm-flex align-items-start">

                    <div className="user-vote w-50px w-sm-70px">

                        <div className="px-1 p-sm-3">
                            <div className="btn-group vstack align-items-center" role="group">

                                <input type="radio" className="btn-check" name="vote5" id="btnradioT5" />
                                <label className="btn btn-vote mb-0" htmlFor="btnradioT5">
                                    <BsFillCaretUpFill className="fs-5" />
                                </label>

                                <h6 className="mb-0 px-2 vote-count">156</h6>

                                <input type="radio" className="btn-check" name="vote5" id="btnradioT16" />
                                <label className="btn btn-vote mb-0" htmlFor="btnradioT16">
                                    <BsCaretDownFill className="fs-5" />
                                </label>
                            </div>
                        </div>
                    </div>



                    <div className="vr d-none d-sm-block"></div>


                    <div className="card-body p-3">

                        <div className="badge bg-success mb-4"><BsFillPatchCheckFill className="me-1" />Best answer</div>
                        <p>
                            Version control, also known as source control or revision control, is a system that manages and tracks changes to code, documents, or any set of files over time. It allows developers to collaborate on projects seamlessly, keeping a record of every modification made to the codebase.</p>
                        <p>I have never used this package, but it seems like it could be as simple as:</p>

                        <p>If you want to delete old records you can create a file for the task:</p>
                        <div className="d-grid">
                            <pre className="my-3" style={{ backgroundColor: "#343a40" }}>
                                <code className="language-markup" data-lang="html">{`
<ul className="avatar-group">
  <li className="avatar">
    <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
  </li>
  <li className="avatar">
    <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" />
  </li>
  <li className="avatar">
    <div className="avatar-img rounded-circle bg-primary">
      <i className="fas fa-plus text-white position-absolute top-50 start-50 translate-middle"></i>
    </div>
  </li>
</ul>`}
                                </code>
                            </pre>
                        </div>
                        <p>You can change your index action in your controller to something like this:</p>

                        <div className="d-grid">
                            <pre style={{ backgroundColor: "#343a40" }} >
                                <code className="language-markup" data-lang="html">{`
<button type="button" className="btn btn-primary">Primary</button>
<button type="button" className="btn btn-secondary">Secondary</button>
<button type="button" className="btn btn-success">Success</button>
<button type="button" className="btn btn-danger">Danger</button>
<button type="button" className="btn btn-warning">Warning</button>
<button type="button" className="btn btn-link">Link</button>`}
                                </code>
                            </pre>
                        </div>


                        <p className="mb-0 mt-3">Check this link: <Link href="#">http://github.com/package.jason</Link></p>

                        <div className="hstack gap-2 mt-3">
                            <Link href="#" className="badge bg-light text-body">Python</Link>
                            <Link href="#" className="badge bg-light text-body">Biopython</Link>
                            <Link href="#" className="badge bg-light text-body">JAVA</Link>
                        </div>


                        <div className="d-md-flex justify-content-md-between mt-4">

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


                                <Link href="#" className="btn btn-sm btn-light mb-0"><FaPenToSquare className="me-2" />Edit</Link>
                            </div>

                            <div className="bg-success bg-opacity-10 border border-success py-2 px-3 rounded mt-3 mt-md-0">
                                <small className="text-success">Edited 19 min ago</small>
                                <div className="d-flex align-items-center mt-1">

                                    <div className="avatar">
                                        <Image className="avatar-img rounded-circle" src={avtar2} alt="avatar" />
                                    </div>

                                    <div className="ms-2">
                                        <h6 className="mb-1"><a href="#">Billy Vasquez</a></h6>

                                        <ul className="nav nav-achievement-divider small">
                                            <li className="nav-item dote-gold">5</li>
                                            <li className="nav-item dote-silver">15</li>
                                            <li className="nav-item dote-bronze">351</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <h5 className="mt-4">If I'm missing something then let me know?</h5>
                        <ul className="comment-wrap list-unstyled mt-2 mb-0">

                            <li className="comment-item">

                                <div className="d-flex mb-4">

                                    <div className="avatar avatar-sm flex-shrink-0">
                                        <Link href="#"><Image className="avatar-img rounded-circle" src={avatar5} alt="" /></Link>
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
                                        <div className="d-flex mb-4">

                                            <div className="avatar avatar-sm flex-shrink-0">
                                                <Link href="#"><Image className="avatar-img rounded-circle" src={avatar4} alt="" /></Link>
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



                                    <li className="comment-item">
                                        <div className="d-flex ms-4 mb-4">

                                            <div className="avatar avatar-sm flex-shrink-0">
                                                <Link href="#"><Image className="avatar-img rounded-circle" src={avatar5} alt="" /></Link>
                                            </div>
                                            <div className="ms-2">

                                                <h6 className="mb-0"> <a href="#!"> Jacqueline Miller </a></h6>
                                                <div className="hstack gap-4 flex-wrap">
                                                    <small>10 hour ago</small>
                                                    <Link href="#" className="btn btn-sm btn-link p-0 text-primary-hover mb-0"><FaReply className="me-1" />Reply</Link>
                                                </div>
                                                <p className="heading-color mb-0 mt-2">I'm fully satisfied with your answer.</p>
                                            </div>
                                        </div>
                                    </li>

                                </ul>



                                <ul className="list-unstyled ms-4">

                                    <li className="comment-item">
                                        <div className="d-flex">

                                            <div className="avatar avatar-sm flex-shrink-0">
                                                <Link href="#"><Image className="avatar-img rounded-circle" src={avatar6} alt="" /></Link>
                                            </div>
                                            <div className="ms-2">

                                                <h6 className="mb-0"> <Link href="#!"> Carolyn Ortiz </Link></h6>
                                                <div className="hstack gap-4 flex-wrap">
                                                    <small>7 hour ago</small>
                                                    <Link href="#" className="btn btn-sm btn-link p-0 text-primary-hover mb-0"><FaReply className="me-1" />Reply</Link>
                                                </div>
                                                <p className="heading-color mb-0 mt-2">If you want to delete old records you can create a file for the task</p>
                                            </div>
                                        </div>
                                    </li>

                                </ul>



                                <Link href="#!" role="button" className="btn btn-sm btn-link mb-0 p-0 mt-3 text-primary-hover">
                                    Load more replies...
                                </Link>
                            </li>


                            <li><hr /></li>


                            <li className="comment-item">

                                <div className="d-flex">

                                    <div className="avatar avatar-sm flex-shrink-0">
                                        <Link href="#"><Image className="avatar-img rounded-circle" src={avatar8} alt="" /></Link>
                                    </div>
                                    <div className="ms-2">

                                        <h6 className="mb-0"> <Link href="#!"> Louis Ferguson </Link></h6>
                                        <div className="hstack gap-4 flex-wrap">
                                            <small>8 hour ago</small>
                                            <Link href="#" className="btn btn-sm btn-link p-0 text-primary-hover mb-0"><FaReply className="me-1" />Reply</Link>
                                        </div>
                                        <p className="heading-color mb-0 mt-2">If you want to delete old records you can create a file for the task</p>
                                    </div>
                                </div>
                            </li>

                        </ul>

                        <form className="bg-light d-sm-flex rounded-2 p-3 mt-3">

                            <div className="avatar avatar-sm flex-shrink-0 me-2">
                                <Link href="#"> <Image className="avatar-img rounded-circle" src={avatar9} alt="" /> </Link>
                            </div>
                            <div className="input-group align-items-start">
                                <textarea className="form-control me-2 rounded" id="autoheighttextarea" rows={1} placeholder="Add a comment..." spellCheck="false"></textarea>
                                <button type="button" className="btn btn-primary mb-0 rounded">Post</button>
                            </div>
                        </form>


                    </div>

                </div>

            </div>

        </>
    )
}

export default AnswerDetails