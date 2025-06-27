"use client";
import avatar01 from "@/assets/images/avatar/01.jpg";
import avatar04 from "@/assets/images/avatar/04.jpg";
import avatar05 from "@/assets/images/avatar/05.jpg";
import avatar08 from "@/assets/images/avatar/08.jpg";
import avatar09 from "@/assets/images/avatar/09.jpg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Collapse, Dropdown, DropdownMenu, DropdownToggle, Form, InputGroup } from "react-bootstrap";
import { BsFillCaretUpFill, BsFillCheckCircleFill } from "react-icons/bs";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaReply,
    FaShareNodes,
    FaWhatsapp,
    FaXTwitter
} from "react-icons/fa6";

const AnswerCard2 = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="card card-body border border-success p-sm-4" id="marked-answer">
            <div className="d-flex justify-content-between">
                <div className="d-sm-flex align-items-center mb-3">
                    <div className="avatar flex-shrink-0">
                        <Image className="avatar-img rounded-circle" src={avatar01} alt="avatar" />
                    </div>
                    <div className="ms-sm-2">
                        <h6 className="mb-1"><Link href="#">Lori Stevens</Link></h6>
                        <small>Digital Marketing Ninja</small>
                    </div>
                </div>
                <span>4 day ago</span>
            </div>

            <p>
                Known as source control or revision control, is a system that manages and tracks changes to code, documents, or any set of files over time.
            </p>
            <p>Check this link: <a href="#">http://github.com/package.jason</a></p>

            <div className="d-grid">
                <pre className="my-3">
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
      <i class="fas fa-plus text-white position-absolute top-50 start-50 translate-middle"></i>
    </div>
  </li>
</ul>
          `}</code>
                </pre>
            </div>

            <div className="hstack gap-2">
                <Link href="#" className="badge bg-light text-body">Python</Link>
                <Link href="#" className="badge bg-light text-body">Biopython</Link>
                <Link href="#" className="badge bg-light text-body">JAVA</Link>
            </div>

            <div className="hstack gap-2 gap-sm-3 flex-wrap mt-4">
                <div className="bg-success bg-opacity-10 text-success rounded border border-success fs-6 py-1 px-3">
                    <BsFillCheckCircleFill className="me-1" />Marked answer
                </div>

                <div className="border px-2 py-0 rounded-1 d-flex align-items-center gap-1">
                    <input type="radio" className="btn-check" name="vote1" id="btnradioT1" />
                    <label className="btn btn-vote mb-0" htmlFor="btnradioT1">
                        <BsFillCaretUpFill className="fs-5" />
                    </label>
                    <span className="fw-normal">01</span>
                </div>

                <Dropdown className="no-after-icon">
                    <DropdownToggle className="btn btn-sm btn-light mb-0" role="button" id="dropdownShare5" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
                        <FaShareNodes className="me-2" /> Share
                    </DropdownToggle>

                    <DropdownMenu className="dropdown-menu dropdown-menu-size-sm shadow px-3 rounded" aria-labelledby="dropdownShare5">
                        <h6>Share a link to this question</h6>


                        <div className="input-group mt-2">
                            <input className="form-control form-control-sm" type="text" value="https:q&amp;a.com//556dd//gmail" placeholder="" />
                            <button className="btn btn-sm btn-primary mb-0">Copy</button>
                        </div>


                        <ul className="list-inline mt-2 mb-0">
                            <li className="list-inline-item"> <Link className="btn btn-xs btn-icon mb-0 bg-facebook" href="#"><FaFacebookF /></Link> </li>
                            <li className="list-inline-item"> <Link className="btn btn-xs btn-icon mb-0 bg-whatsapp" href="#"><FaWhatsapp /></Link> </li>
                            <li className="list-inline-item"> <Link className="btn btn-xs btn-icon mb-0 bg-twitter" href="#"><FaXTwitter /></Link> </li>
                            <li className="list-inline-item"> <Link className="btn btn-xs btn-icon mb-0 bg-linkedin" href="#"><FaLinkedinIn /></Link> </li>
                        </ul>
                    </DropdownMenu>
                </Dropdown>

                <button
                    onClick={() => setToggle(!toggle)}
                    className="btn btn-sm btn-light mb-0 ms-sm-auto"
                    aria-expanded={toggle}
                    aria-controls="collapseComment"
                >
                    2 Reply
                </button>
            </div>

            <Collapse in={toggle}>
                <div>
                    <hr className="my-4" />
                    <ul className="comment-wrap list-unstyled mb-0">
                        <li className="comment-item">
                            <div className="d-flex mb-4">
                                <div className="avatar avatar-sm flex-shrink-0">
                                    <Link href="#"><Image className="avatar-img rounded-circle" src={avatar05} alt="" /></Link>
                                </div>
                                <div className="ms-2">
                                    <h6 className="mb-0"><Link href="#!">Frances Guerrero</Link></h6>
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
                                            <Link href="#"><Image className="avatar-img rounded-circle" src={avatar04} alt="" /></Link>
                                        </div>
                                        <div className="ms-2">
                                            <h6 className="mb-0"><Link href="#!">Dennis Barrett</Link></h6>
                                            <div className="hstack gap-4 flex-wrap">
                                                <small>10 hour ago</small>
                                                <Link href="#" className="btn btn-sm btn-link p-0 text-primary-hover mb-0"><FaReply className="me-1" />Reply</Link>
                                            </div>
                                            <p className="heading-color mb-0 mt-2">You can also use the whenever gem to manage your crontab.</p>
                                        </div>
                                    </div>
                                </li>

                                <li className="comment-item">
                                    <div className="d-flex ms-4 mb-4">
                                        <div className="avatar avatar-sm flex-shrink-0">
                                            <Link href="#"><Image className="avatar-img rounded-circle" src={avatar05} alt="" /></Link>
                                        </div>
                                        <div className="ms-2">
                                            <h6 className="mb-0"><Link href="#!">Jacqueline Miller</Link></h6>
                                            <div className="hstack gap-4 flex-wrap">
                                                <small>10 hour ago</small>
                                                <Link href="#" className="btn btn-sm btn-link p-0 text-primary-hover mb-0"><FaReply className="me-1" />Reply</Link>
                                            </div>
                                            <p className="heading-color mb-0 mt-2">I'm fully satisfied with your answer.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <Link href="#!" className="btn btn-sm btn-link mb-0 p-0 text-primary-hover">
                                Load more replies...
                            </Link>
                        </li>

                        <li><hr /></li>

                        <li className="comment-item">
                            <div className="d-flex">
                                <div className="avatar avatar-sm flex-shrink-0">
                                    <Link href="#"><Image className="avatar-img rounded-circle" src={avatar08} alt="" /></Link>
                                </div>
                                <div className="ms-2">
                                    <h6 className="mb-0"><Link href="#!">Louis Ferguson</Link></h6>
                                    <div className="hstack gap-4 flex-wrap">
                                        <small>8 hour ago</small>
                                        <Link href="#" className="btn btn-sm btn-link p-0 text-primary-hover mb-0"><FaReply className="me-1" />Reply</Link>
                                    </div>
                                    <p className="heading-color mb-0 mt-2">If you want to delete old records you can create a file for the task</p>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <form className="bg-light d-sm-flex rounded-2 p-3 mt-4">
                        <div className="avatar avatar-sm flex-shrink-0 me-2">
                            <Link href="#"> <Image className="avatar-img rounded-circle" src={avatar09} alt="" /> </Link>
                        </div>
                        <div className="input-group align-items-start">
                            <textarea
                                className="form-control me-2 rounded"
                                id="autoheighttextarea"
                                rows={2}
                                placeholder="Add a comment..."
                                spellCheck="false"
                            ></textarea>
                            <button type="button" className="btn btn-primary mb-0 rounded">Post</button>
                        </div>
                    </form>
                </div>
            </Collapse>
        </div>
    );
};

export default AnswerCard2;
