"use client";
import { useState } from "react";
import Link from "next/link";
import QuillTool from "@/component/QuillTool";
import { Col, Container, Row } from "react-bootstrap";

const CreateTicket = () => {
    const [activeStep, setActiveStep] = useState(1);

    const goToNext = () => {
        if (activeStep < 3) setActiveStep(activeStep + 1);
    };

    const goToPrev = () => {
        if (activeStep > 1) setActiveStep(activeStep - 1);
    };

    return (
        <main>

            <section className="py-0">
                <Container>
                    <Row className="justify-content-center text-center align-items-center vh-100 py-5">
                        <Col xl={9}>
                            <h1 className="mb-4">Create Ticket</h1>
                            <div className="card bs-stepper stepper-outline position-relative p-0" id="stepper">
                                <div className="card-header border-bottom">
                                    <div className="bs-stepper-header col-md-6 mx-auto" role="tablist">

                                        <div className={`step ${activeStep === 1 ? "active" : ""}`} data-target="#step-1">
                                            <div className="d-grid text-center align-items-center">
                                                <button
                                                    type="button"
                                                    className="btn btn-link step-trigger p-0 mb-0"
                                                    onClick={() => setActiveStep(1)}
                                                    aria-controls="step-1"
                                                >
                                                    <span className="bs-stepper-circle">1</span>
                                                </button>
                                                <h6 className="d-none d-md-block">Introduction</h6>
                                            </div>
                                        </div>

                                        <div className="line" />


                                        <div className={`step ${activeStep === 2 ? "active" : ""}`} data-target="#step-2">
                                            <div className="d-grid text-center align-items-center">
                                                <button
                                                    type="button"
                                                    className="btn btn-link step-trigger p-0 mb-0"
                                                    onClick={() => setActiveStep(2)}
                                                    aria-controls="step-2"
                                                >
                                                    <span className="bs-stepper-circle">2</span>
                                                </button>
                                                <h6 className="d-none d-md-block">Category</h6>
                                            </div>
                                        </div>

                                        <div className="line" />


                                        <div className={`step ${activeStep === 3 ? "active" : ""}`} data-target="#step-3">
                                            <div className="d-grid text-center align-items-center">
                                                <button
                                                    type="button"
                                                    className="btn btn-link step-trigger p-0 mb-0"
                                                    onClick={() => setActiveStep(3)}
                                                    aria-controls="step-3"
                                                >
                                                    <span className="bs-stepper-circle">3</span>
                                                </button>
                                                <h6 className="d-none d-md-block">Ticket</h6>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="card-body bs-stepper-content">
                                    <form className="w-100 text-start">
                                        <div
                                            id="step-1"
                                            role="tabpanel"
                                            className={`content ${activeStep === 1 ? "d-block" : "d-none"}`}
                                            aria-labelledby="steppertrigger1"
                                        >
                                            <h2 className="h4 mb-3">Before you submit the ticket,</h2>
                                            <ul>
                                                <li>Read the documentation properly, many issues can be solved by following documentation.</li>
                                                <li>Make sure there is no console error in your project, many issues can be solved by fixing console log errors</li>
                                            </ul>
                                            <p>
                                                Please fill in the form and describe as clearly as possible the problem you are having. Please{" "}
                                                <b>Include a link</b> to your website with a screenshot or at least{" "}
                                                <b>Screenshot(s)</b> pointing out the actual issue.It will help us to identify and solve the issues quickly. It saves both of our time
                                            </p>
                                            <div className="text-end">
                                                <button type="button" className="btn btn-primary next-btn mb-0" onClick={goToNext}>
                                                    Next
                                                </button>
                                            </div>
                                        </div>

                                        <div
                                            id="step-2"
                                            role="tabpanel"
                                            className={`content ${activeStep === 2 ? "d-block" : "d-none"}`}
                                            aria-labelledby="steppertrigger2"
                                        >
                                            <p className="mb-4">Please select the category that you need support for from the list below</p>
                                            <h6>Select category</h6>

                                            <ul className="list-group list-group-flush">
                                                {[1, 2, 3, 4, 5].map((n) => (
                                                    <li className="list-group-item d-flex gap-1 py-3 ps-0" key={n}>
                                                        <input className="form-check-input me-1" type="radio" name="listGroupRadio" id={`radio${n}`} />
                                                        <label className="form-check-label" htmlFor={`radio${n}`}>
                                                            Category 0{n} - Category that you need support
                                                        </label>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="hstack gap-2 flex-wrap justify-content-between mt-4">
                                                <button type="button" className="btn btn-secondary prev-btn mb-0" onClick={goToPrev}>
                                                    Previous
                                                </button>
                                                <button type="button" className="btn btn-primary next-btn mb-0" onClick={goToNext}>
                                                    Next
                                                </button>
                                            </div>
                                        </div>

                                        <div
                                            id="step-3"
                                            role="tabpanel"
                                            className={`content ${activeStep === 3 ? "d-block" : "d-none"}`}
                                            aria-labelledby="steppertrigger3"
                                        >
                                            <p className="mb-4">
                                                Please fill in the form below and tell us as much information as you can about the issue you are having.
                                            </p>

                                            <Row className="g-4">
                                                <Col md={6}>
                                                    <label htmlFor="exampleInputtext1" className="form-label heading-color">
                                                        Ticket subject <span className="text-danger">*</span>
                                                    </label>
                                                    <input type="text" className="form-control" id="exampleInputtext1" />
                                                    <div className="form-text">In general, what is this ticket about?</div>
                                                </Col>

                                                <Col md={6}>
                                                    <label htmlFor="exampleInputtext2" className="form-label heading-color">
                                                        Related URL
                                                    </label>
                                                    <input type="text" className="form-control" id="exampleInputtext2" />
                                                    <div className="form-text">Optional, but very helpful.</div>
                                                </Col>

                                                <Col xs={12}>
                                                    <label className="form-label heading-color">
                                                        Ticket Description <span className="text-danger">*</span>
                                                    </label>
                                                    <QuillTool className="bg-mode border  rounded-top py-2 quilleditor h-150px rounded-bottom" />
                                                    <div className="form-text">
                                                        Please be as descriptive as possible regarding the details of this ticket.
                                                    </div>
                                                </Col>

                                                <Col xs={12}>
                                                    <label htmlFor="formFileMultiple" className="form-label heading-color">
                                                        Attachment
                                                    </label>
                                                    <input className="form-control" type="file" id="formFileMultiple" />
                                                </Col>

                                                <Col xs={12}>
                                                    <p className="mb-0">
                                                        Read our <Link href="#">privacy policy</Link> and see how we handle your personal data
                                                    </p>
                                                </Col>

                                                <Col xs={12} className="d-flex justify-content-between">
                                                    <button type="button" className="btn btn-secondary prev-btn mb-0" onClick={goToPrev}>
                                                        Previous
                                                    </button>
                                                    <Link href="/tickets/list" className="btn btn-primary mb-0 ms-auto">
                                                        Submit ticket
                                                    </Link>
                                                </Col>
                                            </Row>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
};

export default CreateTicket;
