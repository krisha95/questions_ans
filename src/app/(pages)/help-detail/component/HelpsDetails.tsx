"use client";
import React, { useState } from "react";
import { Container, Tabs, Tab, Card } from "react-bootstrap";
import { BiBuildingHouse, BiInfoCircle, BiLayer, BiSmile } from "react-icons/bi";
import { BsFillEmojiSmileFill, BsHouse } from "react-icons/bs";

const HelpsDetails = () => {
    const [key, setKey] = useState("tab-1");

    return (
        <section className="pt-0">
            <Container>
                <div className="vstack gap-4">
                    <div className="bg-mode rounded px-4 pb-0 pt-1">
                        <Tabs
                            activeKey={key}
                            onSelect={(k) => setKey(k!)}
                            id="help-details-tabs"
                            className="nav nav-tabs nav-responsive nav-bottom-line justify-content-between mb-0 border-0"
                        >
                            <Tab
                                eventKey="tab-1"
                                title={
                                    <span className="nav-link">
                                        <BiSmile className="me-2" />
                                        Get Started
                                    </span>
                                }
                                tabClassName="nav-item ps-3 ps-sm-0"
                            ></Tab>

                            <Tab
                                eventKey="tab-2"
                                title={
                                    <span className="nav-link">
                                        <BiLayer className="me-2" />
                                        Account Setup
                                    </span>
                                }
                                tabClassName="nav-item"
                            ></Tab>

                            <Tab
                                eventKey="tab-3"
                                title={
                                    <span className="nav-link">
                                        <BiInfoCircle className="me-2" />
                                        Other Topics
                                    </span>
                                }
                                tabClassName="nav-item"
                            ></Tab>

                            <Tab
                                eventKey="tab-4"
                                title={
                                    <span className="nav-link">
                                        <BsHouse className="me-2" />
                                        Advanced Usage
                                    </span>
                                }
                                tabClassName="nav-item"
                            ></Tab>
                        </Tabs>
                    </div>
                    {/* Tabs END */}

                    {/* Tab content START */}
                    <div className="bg-mode rounded">
                        {key === "tab-1" && (
                            <div className="tab-pane fade show active" id="tab-1">
                                <div className="card">
                                    <div className="card-header border-bottom p-4">
                                        <h2 className="mb-0">Get started with node.js</h2>
                                        <ul className="nav nav-divider">
                                            <li className="nav-item">Last updated: 7 months ago</li>
                                            <li className="nav-item">by Sam Lanson</li>
                                        </ul>
                                    </div>
                                    <div className="card-body p-4">
                                        <p>
                                            I made several mistakes Joy says the painful removal reached an end. State burst think end are its. Arrived off she elderly beloved him affixed noisier yet.
                                            Course regard to up he hardly. View four has said do men saw find dear shy? <b> Talent men wicket add garden.</b>
                                        </p>
                                        <a href="#!" className="btn btn-primary">Download Node JS</a>

                                        <h5 className="mt-4">Table of Contents</h5>
                                        <p>Age she way earnestly the fulfilled extremely.</p>
                                        <div className="alert alert-warning" role="alert">
                                            <strong>Note: </strong>She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. <a className="alert-link" href="#!">View more</a>
                                        </div>

                                        <p>Hold do at tore in park feet near my case...</p>
                                        <ul>
                                            <li>Affronting imprudence do he he everything...</li>
                                            <li>Insipidity the sufficient discretion...</li>
                                            <li><strong> Such on help ye some door if in.</strong></li>
                                            <li>Subjects he prospect elegance followed</li>
                                            <li>Laughter proposal laughing any son law...</li>
                                            <li><i> To occasional dissimilar impossible sentiments...</i></li>
                                            <li>Post no so what deal evil rent by real in...</li>
                                        </ul>
                                        <p className="mb-0">
                                            Improved own provided blessing may peculiar domestic...
                                            <u> Off melancholy alteration principles old. </u>
                                        </p>
                                    </div>
                                    <div className="card-footer border-0 p-4 pt-0">
                                        <div className="border p-3 rounded d-md-flex align-items-center justify-content-between text-center">
                                            <h5 className="m-0">Was this article helpful?</h5>
                                            <small className="py-2 d-block">20 out of 45 found this helpful</small>
                                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" />
                                                <label className="btn btn-outline-light btn-sm mb-0" htmlFor="btnradio1">
                                                    <i className="fa-solid fa-thumbs-up me-1"></i> Yes
                                                </label>
                                                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                                                <label className="btn btn-outline-light btn-sm mb-0" htmlFor="btnradio2">
                                                    No <i className="fa-solid fa-thumbs-down ms-1"></i>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {key === "tab-2" && (
                            <div className="tab-pane fade show active" id="tab-2">
                                <div className="card">
                                    <div className="card-header border-bottom p-4">
                                        <h2 className="mb-0">Account Setup</h2>
                                    </div>
                                    <div className="card-body p-4">
                                        <p>
                                            You can manage the setting for your <a href="#">Q&A account</a> at any time.
                                            Update your account information
                                        </p>
                                        <h5 className="mt-4">To deactivate your account</h5>
                                        <ul>
                                            <li>Affronting imprudence do he he everything...</li>
                                            <li>Insipidity the sufficient discretion...</li>
                                            <li><strong>Such on help ye some door if in.</strong></li>
                                            <li>Subjects he prospect elegance followed</li>
                                        </ul>

                                        <h5 className="mt-4">When your account is deactivated</h5>
                                        <ul>
                                            <li>Affronting imprudence do he he everything...</li>
                                            <li>Insipidity the sufficient discretion...</li>
                                        </ul>

                                        <h5 className="mt-4">Related Article</h5>
                                        <ul className="list-group list-group-borderless mb-3">
                                            <li className="list-group-item d-flex pb-0"><a href="#" className="mb-0">How do I logout on Q&A</a></li>
                                            <li className="list-group-item d-flex pb-0"><a href="#" className="mb-0">How do I permanently delete my account</a></li>
                                            <li className="list-group-item d-flex pb-0"><a href="#" className="mb-0">Difference between deactivating and deleting</a></li>
                                            <li className="list-group-item d-flex pb-0"><a href="#" className="mb-0">Why did my payment fail?</a></li>
                                        </ul>
                                    </div>
                                    <div className="card-footer border-0 p-4 pt-0">
                                        <div className="border p-3 rounded d-md-flex align-items-center justify-content-between text-center">
                                            <h5 className="m-0">Was this article helpful?</h5>
                                            <small className="py-2 d-block">20 out of 45 found this helpful</small>
                                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" />
                                                <label className="btn btn-outline-light btn-sm mb-0" htmlFor="btnradio3">
                                                    <i className="far fa-thumbs-up me-1"></i> Yes
                                                </label>
                                                <input type="radio" className="btn-check" name="btnradio" id="btnradio4" />
                                                <label className="btn btn-outline-light btn-sm mb-0" htmlFor="btnradio4">
                                                    No <i className="far fa-thumbs-down ms-1"></i>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Tab content END */}
                </div>
            </Container>
        </section>
    );
};

export default HelpsDetails;
