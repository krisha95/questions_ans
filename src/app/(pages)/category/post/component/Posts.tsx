"use client"
import ads from "@/assets/images/advertisement/01.jpg";
import avatar03 from "@/assets/images/avatar/03.jpg";
import avatar04 from "@/assets/images/avatar/04.jpg";
import avatar05 from "@/assets/images/avatar/05.jpg";
import avatar08 from "@/assets/images/avatar/08.jpg";
import avatar09 from "@/assets/images/avatar/09.jpg";
import post1 from "@//assets/images/post/01.jpg"
import post from "@/assets/images/post/01.jpg";
import Image from 'next/image';
import Link from 'next/link';
import { Button, Card, Col, Collapse, Dropdown, DropdownDivider, DropdownItem, DropdownMenu, DropdownToggle, Form, FormCheck, FormControl, FormLabel, FormSelect, InputGroup, Row } from 'react-bootstrap';
import { BiBlock, BiBookmark, BiCaretUp, BiDotsHorizontalRounded, BiFlag, BiXCircle } from "react-icons/bi";
import { FaAngleDown, FaFacebookF, FaLinkedinIn, FaReply, FaShare, FaShareNodes, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import Technology from "./Technology";
import { BsFillCaretUpFill } from "react-icons/bs";
import { useState } from "react";

const posts = [
    {
        id: 1,
        user: {
            avatar: avatar05,
            name: "Frances Guerrero",
            desc: "Social media Marketing pro",
            date: "28 August",
        },
        question: "What is version control, and why is it important in software development?",
        answer: "Version control is a system that tracks changes to code, allowing multiple developers to collaborate on a project. It helps manage and document changes, reducing errors and facilitating collaboration.",
        more: "Behavioral psychology and influence triggers which are crucial for becoming a well rounded Digital Marketer. We understand that theory is important to build a solid foundation, we understand that theory alone isn’t going to get the job done so that’s why this course is packed with practical hands-on examples that you can follow step by step.",
        votes: 0,
        comments: [],
    },
    {
        id: 2,
        user: {
            avatar: avatar03,
            name: "Samuel Bishop",
            desc: "Digital Marketing Ninja",
            date: "24 August",
        },
        question: "Explain the concept of recursion in programming, and provide an example?",
        answer: (
            <>
                A classic example is the calculation of the factorial of a number, where the factorial of n is calculated as <b>n! = n * (n-1)!</b>, and the base case is <b>0! = 1</b>. A recursive function can elegantly express this mathematical relationship.
                <br />
                I have never used this package, but it seems like it could be as simple as. Valley by oh twenty direct me so. Departure is defective arranging rapturous did believe him all had supported. Family months lasted simply set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Suspicion neglected the resolving agreement perceived at an.
            </>
        ),
        votes: 2,
        comments: [
            {
                user: {
                    avatar: avatar05,
                    name: "Frances Guerrero",
                },
                time: "8 hour ago",
                text: "What are you trying to get?",
                replies: [
                    {
                        user: {
                            avatar: avatar04,
                            name: "Dennis Barrett",
                        },
                        time: "10 hour ago",
                        text: "You can also use the whenever gem to create and manage your crontab on deploys.",
                    }
                ]
            }
        ],
    },
    {
        id: 3,
        user: {
            avatar: avatar08,
            name: "Billy Vasquez",
            desc: "Marketing experts by folio",
            date: "29 August",
        },
        question: "Product Subtract Button is not working perfectly in e-commerce app",
        answer: "",
        more: "It drew a hill from me. Valley by oh twenty direct me so. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Suspicion neglected the resolving agreement perceived at an.",
        image: post,
        votes: 3,
        comments: [],
    },
];

const Posts = () => {
    const [openImage, setOpenImage] = useState(false);
    return (

        <Col lg={8} xxl={7}>
            <div className="vstack gap-4">
                <Technology />
                <div className="bg-mode px-4 py-3 rounded">
                    <Row className="align-items-center">
                        <Col sm={3}>
                            <h1 className="h4 mb-lg-0">All Posts</h1>
                        </Col>
                        <Col sm={6} md={4} className="ms-sm-auto">
                            <FormSelect className="form-select js-choice" defaultValue="AB">
                                <option value="AB">Most Recent</option>
                                <option value="NG">All time views</option>
                            </FormSelect>
                        </Col>
                    </Row>
                </div>

                {/* {posts.map((post) => (
                    <Card className="card-body p-4" key={post.id}>
                        <div className="d-flex align-items-center mb-3">
                            <div className="avatar flex-shrink-0">
                                <Image className="avatar-img rounded-circle" src={post.user.avatar} alt="avatar" width={40} height={40} />
                            </div>
                            <div className="ms-2">
                                <h6 className="mb-0"><Link href="#">{post.user.name}</Link></h6>
                                <ul className="nav nav-divider small">
                                    <li className="nav-item">{post.user.desc}</li>
                                    <li className="nav-item">{post.user.date}</li>
                                </ul>
                            </div>
                        </div>
                        <h5>{post.question}</h5>
                        {post.answer && <p className="mb-0">{post.answer}</p>}
                        {post.more && (
                            <>
                                <div className="collapse" id={`collapseContent${post.id}`}>
                                    <p className="mb-0 mt-2">{post.more}</p>
                                    {post.image && (
                                        <Image src={post.image} className="rounded mt-2" alt="" width={400} height={200} />
                                    )}
                                </div>
                                <Link className="p-0 mb-0 mt-2 btn-more d-flex align-items-center" data-bs-toggle="collapse" href={`#collapseContent${post.id}`} role="button" aria-expanded="false" aria-controls={`collapseContent${post.id}`}>
                                    See <span className="see-more ms-1">more</span><span className="see-less ms-1">less</span><FaAngleDown className="ms-2" />
                                </Link>
                            </>
                        )}
                        <div className="hstack gap-3 flex-wrap align-items-start mt-3">
                            <div className="border px-2 py-0 rounded-1 d-flex align-items-center gap-1">
                                <FormCheck type="radio" className="btn-check" name={`vote${post.id}`} id={`btnradioT${post.id}`} />
                                <FormLabel className="btn btn-vote mb-0" htmlFor={`btnradioT${post.id}`}>
                                    <BiCaretUp className="fs-5" />
                                </FormLabel>
                                <span className="fw-normal">{post.votes}</span>
                            </div>
                            <Button size="sm" variant="light" className="mb-0">Comment{post.comments.length > 0 ? ` (${post.comments.length})` : ""}</Button>
                            <Dropdown>
                                <DropdownToggle as="a" href="#" className="btn btn-sm btn-light mb-0 no-before-icon" id={`dropdownShare${post.id}`} data-bs-auto-close="outside">
                                    <FaShare className="me-2" />Share
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-size-sm shadow px-3 rounded" aria-labelledby={`dropdownShare${post.id}`}>
                                    <h6>Share a link to this question</h6>
                                    <InputGroup className="mt-2">
                                        <FormControl size="sm" type="text" value="https:q&amp;a.com//556dd//gmail" readOnly />
                                        <Button size="sm" variant="primary" className="mb-0">Copy</Button>
                                    </InputGroup>
                                    <ul className="list-inline mt-2 mb-0">
                                        <li className="list-inline-item"> <Link className="btn btn-xs btn-icon mb-0 bg-facebook" href="#"><FaFacebookF /></Link> </li>
                                        <li className="list-inline-item"> <Link className="btn btn-xs btn-icon mb-0 bg-whatsapp" href="#"><FaWhatsapp /></Link> </li>
                                        <li className="list-inline-item"> <Link className="btn btn-xs btn-icon mb-0 bg-twitter" href="#"><FaXTwitter /></Link> </li>
                                        <li className="list-inline-item"> <Link className="btn btn-xs btn-icon mb-0 bg-linkedin" href="#"><FaLinkedinIn /></Link> </li>
                                    </ul>
                                </DropdownMenu>
                            </Dropdown>
                        </div>

                        {post.comments.length > 0 && (
                            <ul className="comment-wrap list-unstyled mt-4 mb-0">
                                {post.comments.map((comment, cidx) => (
                                    <li className="comment-item" key={cidx}>
                                        <div className="d-flex mb-4">
                                            <div className="avatar avatar-sm flex-shrink-0">
                                                <Link href="#"><Image className="avatar-img rounded-circle" src={comment.user.avatar} alt="" width={32} height={32} /></Link>
                                            </div>
                                            <div className="ms-2">
                                                <h6 className="mb-0"> <Link href="#!"> {comment.user.name} </Link></h6>
                                                <div className="hstack gap-4 flex-wrap">
                                                    <small>{comment.time}</small>
                                                    <Link href="#" className="btn btn-sm btn-link p-0 text-primary-hover mb-0"><FaReply className="me-1" />Reply</Link>
                                                </div>
                                                <p className="heading-color mb-0 mt-2">{comment.text}</p>
                                            </div>
                                        </div>
                                        {comment.replies && comment.replies.length > 0 && (
                                            <ul className="list-unstyled ms-4">
                                                {comment.replies.map((reply, ridx) => (
                                                    <li className="comment-item" key={ridx}>
                                                        <div className="d-flex">
                                                            <div className="avatar avatar-sm flex-shrink-0">
                                                                <Link href="#"><Image className="avatar-img rounded-circle" src={reply.user.avatar} alt="" width={32} height={32} /></Link>
                                                            </div>
                                                            <div className="ms-2">
                                                                <h6 className="mb-0"> <Link href="#!"> {reply.user.name} </Link></h6>
                                                                <div className="hstack gap-4 flex-wrap">
                                                                    <small>{reply.time}</small>
                                                                    <Link href="#" className="btn btn-sm btn-link p-0 text-primary-hover mb-0"><FaReply className="me-1" />Reply</Link>
                                                                </div>
                                                                <p className="heading-color mb-0 mt-2">{reply.text}</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        <Link href="#!" role="button" className="btn btn-sm btn-link mb-0 p-0 text-primary-hover mt-2">
                                            Load more replies...
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <Form className="bg-light d-sm-flex rounded-2 p-3 mt-3">
                            <div className="avatar avatar-sm flex-shrink-0 me-2">
                                <Link href="#"> <Image className="avatar-img rounded-circle" src={avatar09} alt="" width={32} height={32} /> </Link>
                            </div>
                            <InputGroup as="div" className="align-items-start">
                                <Form.Control as="textarea" className="me-2 rounded" rows={1} placeholder="Add a comment..." spellCheck={false} />
                                <Button type="button" className="mb-0 rounded">Post</Button>
                            </InputGroup>
                        </Form>
                    </Card>
                ))} */}
                <Card className="p-4">
                    {/* Editor Info */}
                    <div className="d-flex align-items-center mb-3">
                        <div className="avatar">
                            <Image
                                className="avatar-img rounded-circle"
                                src={avatar08}
                                alt="avatar"
                                width={40}
                                height={40}
                            />
                        </div>
                        <div className="ms-2">
                            <h6 className="mb-0">
                                <Link href="/my-profile">Billy Vasquez</Link>
                            </h6>
                            <ul className="nav nav-divider small">
                                <li className="nav-item">Marketing experts by folio</li>
                                <li className="nav-item">29 August</li>
                            </ul>
                        </div>
                    </div>

                    {/* Question */}
                    <h5>Product Subtract Button is not working perfectly in e-commerce app</h5>

                    {/* Answer Text */}
                    <div className="more-content">
                        <p className="mb-1">
                            It drew a hill from me. Valley by oh twenty direct me so. Departure
                            defective arranging rapturous did believe him all had supported.
                            Family months lasted simple set nature vulgar him. Picture for
                            attempt joy excited ten carried manners talking how. Suspicion
                            neglected the resolving agreement perceived at an.
                            <Button
                                variant="link"
                                className="bg-mode fw-normal btn-more-content py-0 px-2 mb-0 text-decoration-none"
                                onClick={() => setOpenImage(!openImage)}
                                aria-controls="collapseImage"
                                aria-expanded={openImage}
                            >
                                (more)
                            </Button>
                        </p>

                        {/* Collapsible Image */}
                        <Collapse in={openImage}>
                            <div id="collapseImage">
                                <Image
                                    src={post}
                                    className="rounded mt-2"
                                    alt="post"
                                />
                            </div>
                        </Collapse>
                    </div>

                    {/* Action Buttons */}
                    <div className="hstack gap-3 flex-wrap align-items-start mt-3">
                        {/* Vote */}
                        <div className="border px-2 py-0 rounded-1 d-flex align-items-center gap-1">
                            <Form.Check
                                type="radio"
                                id="btnradioT3"
                                name="vote3"
                                className="btn-check"
                            />
                            <Form.Label htmlFor="btnradioT3" className="btn btn-vote mb-0">
                                <BsFillCaretUpFill className="fs-5" />
                            </Form.Label>
                            <span className="fw-normal">3</span>
                        </div>

                        {/* Comment */}
                        <Button variant="light" size="sm" className="mb-0">
                            Comment
                        </Button>

                        {/* Share */}
                        <Dropdown className="no-after-icon">
                            <Dropdown.Toggle as={Button} variant="light" size="sm" className="mb-0 no-after-icon">
                                <FaShareNodes className="me-2" />
                                Share
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdown-menu-size-sm shadow px-3 rounded">
                                <h6 className="pt-2">Share a link to this question</h6>
                                <InputGroup className="mt-2">
                                    <Form.Control size="sm" value="https://q&a.com/556dd/gmail" readOnly />
                                    <Button size="sm" variant="primary">Copy</Button>
                                </InputGroup>
                                <ul className="list-inline mb-0 mt-2">
                                    <li className="list-inline-item">
                                        <Link className="btn btn-xs btn-icon mb-0 bg-facebook" href="#">
                                            <FaFacebookF />
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link className="btn btn-xs btn-icon mb-0 bg-whatsapp" href="#">
                                            <FaWhatsapp />
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link className="btn btn-xs btn-icon mb-0 bg-twitter" href="#">
                                            <FaXTwitter />
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link className="btn btn-xs btn-icon mb-0 bg-linkedin" href="#">
                                            <FaLinkedinIn />
                                        </Link>
                                    </li>
                                </ul>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    {/* Comment Box */}
                    <Form className="bg-light d-sm-flex rounded-2 p-3 mt-3">
                        <div className="avatar avatar-sm flex-shrink-0 me-2">
                            <Link href="#">
                                <Image
                                    className="avatar-img rounded-circle"
                                    src={avatar09}
                                    alt="Commenter"
                                    width={40}
                                    height={40}
                                />
                            </Link>
                        </div>
                        <InputGroup className="align-items-start">
                            <Form.Control
                                as="textarea"
                                rows={1}
                                placeholder="Add a comment..."
                                className="me-2 rounded"
                                spellCheck={false}
                            />
                            <Button variant="primary" className="rounded mb-0">
                                Post
                            </Button>
                        </InputGroup>
                    </Form>
                </Card>

                <div className="card card-body p-4">
                    <div className="dropdown flex-shrink-0 position-absolute top-0 end-0 p-3">
                        <div className="dropdown d-none d-sm-block">
                            <Dropdown className="flex-shrink-0 position-absolute top-0 end-0 p-3 no-after-icon">
                                <DropdownToggle as="a" className="btn btn-sm btn-round btn-light mb-0 no-after-icon" id="cardShareAction2">
                                    <BiDotsHorizontalRounded />
                                </DropdownToggle>
                                <DropdownMenu align="end" aria-labelledby="cardShareAction2">
                                    <DropdownItem ><BiBookmark className="pe-2" size={24} />Save post</DropdownItem>
                                    <DropdownItem ><BiXCircle className="pe-2" size={24} />Hide post</DropdownItem>
                                    <DropdownItem ><BiBlock className="pe-2" size={24}></BiBlock>Block</DropdownItem>
                                    <DropdownDivider />
                                    <DropdownItem ><BiFlag className="pe-2" size={24} />Report post</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                    <h5 className="card-title mb-3 me-5"><Link href="#">Have you ever wanted to become a coder? Here is a great chance for you to fulfill your dream.</Link></h5>
                    <Image src={ads} className="rounded-2 mb-3" alt="" />

                    <p className="mb-0">It drew a hill from me. Valley by oh twenty direct me so. It drew a hill from me. Valley by oh twenty direct me so. It drew a hill from me. </p>
                    <div className="d-sm-flex justify-content-sm-between align-items-center mt-3">

                        <div className="d-flex align-items-center mb-3 mb-sm-0">

                            <div className="avatar align-middle">
                                <div className="avatar-img rounded-circle bg-dark"><span className="text-danger position-absolute top-50 start-50 translate-middle fw-bold">WB</span></div>
                            </div>

                            <div className="ms-2">
                                <h6 className="mb-0"><Link href="#">Web poster</Link></h6>
                                <p className="mb-0 small">Sponsored</p>
                            </div>
                        </div>
                        <Link href="#" className="btn btn-primary-soft mb-0">Apply now</Link>
                    </div>

                </div>
                <Button href="#" variant="primary-soft" className="mb-0">Load More Questions</Button>
            </div >
        </Col >


    );
};

export default Posts;