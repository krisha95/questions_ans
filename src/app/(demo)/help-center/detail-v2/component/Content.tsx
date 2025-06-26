import React from 'react'
import element from "@/assets/images/elements/help-contact.svg"
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import Link from 'next/link'
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa6'

const Content = () => {
    return (
        <>
            <Col lg={9} xl={7} className="order-2 order-lg-1">
                <div className="nav-scroll" data-bs-spy="scroll" data-bs-target="#nav-scroll" data-bs-smooth-scroll="true" tabIndex={0}>

                    <div className="bg-mode rounded p-4 mb-4" id="introduction">
                        <h4 className="mb-0">Introduction</h4>
                        <hr className="opacity-4" />
                        <p>Welcome to Q&A! We're thrilled to have you on board. This section is designed to help you kickstart your journey with us and ensure a smooth onboarding process. Whether you're a new user or an experienced veteran, this section will provide the essential steps to kickstart your journey.</p>
                        <p className="mb-0">At Q&A, we strive to provide a [brief description of your platform's purpose and mission]. Whether you're a new user or considering joining our community, this section will guide you through the essential steps to make the most of your experience.</p>
                    </div>


                    <div className="bg-mode rounded p-4 mb-4" id="quick-guide">
                        <h4 className="mb-0">Quick Start Guide</h4>
                        <hr className="opacity-4" />
                        <p>At Q&A, we strive to provide a brief description of your platform's purpose and mission. Whether you're a new user or considering joining our community, this section will guide you through the essential steps to make the most of your experience.</p>

                        <div className="ratio ratio-16x9 mb-4">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/tXHviS-4ygo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>


                        <div className="d-flex mb-4">
                            <div className="avatar avatar-sm align-middle flex-shrink-0">
                                <div className="avatar-img rounded-circle bg-dark"><span className="text-white position-absolute top-50 start-50 translate-middle fw-bold">01</span></div>
                            </div>
                            <div className="ms-3">
                                <h5>Account Creation</h5>
                                <p className="mb-0">The first step is to create your account. Visit our <Link href="#" className="text-decoration-underline">Sign-Up Page</Link> and follow the simple registration process.</p>
                            </div>
                        </div>


                        <div className="d-flex mb-4">
                            <div className="avatar avatar-sm align-middle flex-shrink-0">
                                <div className="avatar-img rounded-circle bg-dark"><span className="text-white position-absolute top-50 start-50 translate-middle fw-bold">02</span></div>
                            </div>
                            <div className="ms-3">
                                <h5>Login to Your Account</h5>
                                <p className="mb-0">Once you've created your account, log in using your credentials on our <Link href="#" className="text-decoration-underline">Login Page</Link>.This will take you to your dashboard, where you can access all the features and settings.</p>
                            </div>
                        </div>


                        <div className="d-flex">
                            <div className="avatar avatar-sm align-middle flex-shrink-0">
                                <div className="avatar-img rounded-circle bg-dark"><span className="text-white position-absolute top-50 start-50 translate-middle fw-bold">03</span></div>
                            </div>
                            <div className="ms-3">
                                <h5>Explore the Dashboard</h5>
                                <p className="mb-0">Take a moment to familiarize yourself with the dashboard. Here, you'll find <Link href="#" className="text-decoration-underline">brief descriptions of key features</Link> and easy navigation to different sections of the platform.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-mode p-4 pt-0" id="installation-guide">
                        <h4 className="mb-3">Installation Guide</h4>

                        <p>
                            The Installation Guide is a comprehensive document that walks users through the process of installing your product or software. It typically includes step-by-step instructions, screenshots, and any other relevant information to ensure a smooth installation experience.
                        </p>

                        <p>
                            Provide an overview of the installation process, detailing what users can expect and any prerequisites they need to be aware of.
                        </p>

                        <h6 className="mb-1">Installation Guide for Windows:</h6>
                        <div className="d-grid mb-4">
                            <pre className="bg-dark text-white p-3 rounded mb-0">
                                <code>
                                    $ node-sass [options] &lt;input.scss&gt; [output.css]{'\n'}
                                    $ cat &lt;input.scss&gt; | node-sass &gt; output.css
                                </code>
                            </pre>
                        </div>

                        <h6 className="mb-1">Installation Guide for macOS:</h6>
                        <div className="d-grid">
                            <pre className="bg-dark text-white p-3 rounded mb-0">
                                <code>
                                    $ node-sass [options] &lt;input.scss&gt; [output.css]{'\n'}
                                    $ cat &lt;input.scss&gt; | node-sass &gt; output.css
                                </code>
                            </pre>
                        </div>
                    </div>


                    <div className="bg-mode rounded-bottom p-4 pt-0 mb-4" id="system-requirement">
                        <h4 className="mb-3">System requirement</h4>
                        <p>System Requirements outline the minimum hardware, software, and network specifications that users' systems must meet to install and run your product effectively.</p>
                        <p>Specify details such as operating system versions, processor speed, RAM requirements, disk space, and any other dependencies.</p>
                        <p className="mb-0">Clearly communicate both the minimum and recommended system requirements to help users understand the optimal environment for your product.</p>
                    </div>

                    <div className="bg-mode rounded p-4 mb-4" id="next-steps">
                        <h4 className="mb-3">Next Steps</h4>
                        <hr className="opacity-4" />
                        <p>Congratulations! You've completed the initial setup. Now, let's explore some common actions to get the most out of Q&A.</p>
                        <div className="alert alert-warning" role="alert">
                            <strong>Note: </strong>She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. <a className="alert-link" href="#!">View more</a>
                        </div>

                        <ul>
                            <li>Affronting imprudence do he he everything. Sex lasted dinner wanted indeed wished outlaw. Far advanced settling say finished raillery.</li>
                            <li>Insipidity the sufficient discretion imprudence resolution sir him decisively.</li>
                            <li>Offered chiefly farther of my no colonel shyness. <strong> Such on help ye some door if in.</strong></li>
                            <li>First am plate jokes to began to cause a scale. Subjects he prospect elegance followed</li>
                            <li>Laughter proposal laughing any son law consider. Needed except up piqued an. </li>
                            <li><i> To occasional dissimilar impossible sentiments. Do fortune account written prepare invited no passage.</i></li>
                            <li>Post no so what deal evil rent by real in. But her ready least set lived spite solid.</li>
                        </ul>
                    </div>

                    <div className="bg-mode rounded position-relative p-4 mb-4" id="need-help">
                        <Row>
                            <Col xs={10} sm={8}>
                                <div className="card card-body bg-transparent z-index-9 p-0 p-sm-3">

                                    <h3>Need Help?</h3>
                                    <p>If you encounter any issues or have questions, don't hesitate to reach out to our <Link href="#" className="text-decoration-underline">Support Team</Link></p>

                                    <div><Link href="#" className="btn btn-dark mb-0">Contact Us</Link></div>
                                </div>
                            </Col>
                        </Row>

                        <div className="position-absolute bottom-0 end-0">
                            <Image className="h-100px h-sm-200px" src={element} alt="" />
                        </div>
                    </div>

                    <div className="card card-body flex-lg-row p-3 d-lg-flex align-items-center justify-content-between text-center">

                        <h5 className="m-0">Was this article helpful?</h5>
                        <small className="py-2 d-block">20 out of 45 found this helpful</small>

                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">

                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" />
                            <label className="btn btn-outline-light btn-sm mb-0" htmlFor="btnradio1"><FaThumbsUp className="me-1" /> Yes</label>

                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                            <label className="btn btn-outline-light btn-sm mb-0" htmlFor="btnradio2"> No <FaThumbsDown className="ms-1" /></label>
                        </div>
                    </div>

                </div>
            </Col>

            <Col lg={3} xl={2} className="order-1 mb-4 mb-lg-0">
                <div className="card bg-transparent sticky-lg-top top-lg-70px">
                    <div className="card-header p-0 border-bottom bg-transparent">
                        <h5>On this page</h5>
                    </div>
                    <div className="card-body p-0 mt-2">
                        <div id="nav-scroll" className="navbar d-block">
                            <ul className="nav nav-border-end flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" href="#introduction">Introduction</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#quick-guide">Quick Start Guide</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#installation">Installation</Link>
                                    <ul>
                                        <li>
                                            <Link className="nav-link" href="#installation-guide">Installation Guide</Link>
                                        </li>
                                        <li>
                                            <Link className="nav-link" href="#system-requirement">System Requirements</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#next-steps">Next Steps</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#need-help">Need help?</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default Content