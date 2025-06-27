const CreateTicket = () => {

    return (
        <section className="py-0">
            <div className="container">
                <div className="row justify-content-center text-center align-items-center vh-100 py-5">
                    <div className="col-xl-9">

                        <h1 className="mb-4">Create Ticket</h1>

                        <div className="card bs-stepper stepper-outline position-relative p-0" id="stepper">

                            <div className="card-header border-bottom">

                                <div className="bs-stepper-header col-md-6 mx-auto" role="tablist">

                                    <div className="step" data-target="#step-1">
                                        <div className="d-grid text-center align-items-center">
                                            <button type="button" className="btn btn-link step-trigger p-0 mb-0" role="tab" id="steppertrigger1" aria-controls="step-1">
                                                <span className="bs-stepper-circle">1</span>
                                            </button>
                                            <h6 className=" d-none d-md-block">Introduction</h6>
                                        </div>
                                    </div>

                                    <div className="line"></div>


                                    <div className="step" data-target="#step-2">
                                        <div className="d-grid text-center align-items-center">
                                            <button type="button" className="btn btn-link step-trigger p-0 mb-0" role="tab" id="steppertrigger2" aria-controls="step-2">
                                                <span className="bs-stepper-circle">2</span>
                                            </button>
                                            <h6 className=" d-none d-md-block">Category</h6>
                                        </div>
                                    </div>

                                    <div className="line"></div>


                                    <div className="step" data-target="#step-3">
                                        <div className="d-grid text-center align-items-center">
                                            <button type="button" className="btn btn-link step-trigger p-0 mb-0" role="tab" id="steppertrigger3" aria-controls="step-3">
                                                <span className="bs-stepper-circle">3</span>
                                            </button>
                                            <h6 className=" d-none d-md-block">Ticket</h6>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="card-body bs-stepper-content">
                                <form className="w-100 text-start">

                                    <div id="step-1" role="tabpanel" className="content fade" aria-labelledby="steppertrigger1">

                                        <h2 className="h4 mb-3">Before you submit the ticket,</h2>
                                        <ul>
                                            <li>Read the documentation properly, many issues can be solved by following documentation.</li>
                                            <li>Make sure there is no console error in your project, many issues can be solved by fixing console log errors</li>
                                        </ul>
                                        <p>Please fill in the form and describe as clearly as possible the problem you are having. Please <b>Include a link</b> to your website with a screenshot or at least <b>Screenshot(s)</b> pointing out the actual issue. It will help us to identify and solve the issues quickly. It saves both of our time</p>

                                        <div className="text-end">
                                            <button className="btn btn-primary next-btn mb-0">Next</button>
                                        </div>
                                    </div>



                                    <div id="step-2" role="tabpanel" className="content fade" aria-labelledby="steppertrigger2">

                                        <p className="mb-4">Please select the category that you need support for from the list below</p>

                                        <h6>Select category</h6>

                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item d-flex gap-1 py-3 ps-0">
                                                <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked />
                                                <label className="form-check-label" htmlFor="firstRadio">Category 01 - Category that you need support</label>
                                            </li>
                                            <li className="list-group-item d-flex gap-1 py-3 ps-0">
                                                <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="secondRadio" />
                                                <label className="form-check-label" htmlFor="secondRadio">Category 02 - Category that you need support</label>
                                            </li>
                                            <li className="list-group-item d-flex gap-1 py-3 ps-0">
                                                <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio" />
                                                <label className="form-check-label" htmlFor="thirdRadio">Category 03 - Category that you need support</label>
                                            </li>
                                            <li className="list-group-item d-flex gap-1 py-3 ps-0">
                                                <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="fourRadio" />
                                                <label className="form-check-label" htmlFor="fourRadio" >Category 04 - Category that you need support</label>
                                            </li>
                                            <li className="list-group-item d-flex gap-1 py-3 ps-0">
                                                <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="fifthRadio" />
                                                <label className="form-check-label" htmlFor="fifthRadio">Category 05 - Category that you need support</label>
                                            </li>
                                        </ul>


                                        <div className="hstack gap-2 flex-wrap justify-content-between mt-4">
                                            <button className="btn btn-secondary prev-btn mb-0">Previous</button>
                                            <button className="btn btn-primary next-btn mb-0">Next</button>
                                        </div>
                                    </div>



                                    <div id="step-3" role="tabpanel" className="content fade" aria-labelledby="steppertrigger3">

                                        <p className="mb-4">Please fill in the form below and tell us as much information as you can about the issue you are having.</p>


                                        <div className="row g-4">

                                            <div className="col-md-6">
                                                <label htmlFor="exampleInputtext1" className="form-label heading-color">Ticket subject <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="exampleInputtext1" />
                                                <div className="form-text">In general, what is this ticket about?</div>
                                            </div>

                                            <div className="col-md-6">
                                                <label htmlFor="exampleInputtext2" className="form-label heading-color">Related URL</label>
                                                <input type="text" className="form-control" id="exampleInputtext2" />
                                                <div className="form-text">Optional, but very helpful.</div>
                                            </div>

                                            <div className="col-12">

                                                <label className="form-label heading-color">Ticket Description <span className="text-danger">*</span></label>
                                                <div className="bg-mode border border-bottom-0 rounded-top py-2" id="quilltoolbar">
                                                    <span className="ql-formats">
                                                        <button className="ql-bold"></button>
                                                        <button className="ql-italic"></button>
                                                        <button className="ql-underline"></button>
                                                    </span>
                                                    <span className="ql-formats">
                                                        <button className="ql-list" value="ordered"></button>
                                                        <button className="ql-list" value="bullet"></button>
                                                        <button className="ql-code-block"></button>
                                                        <button className="ql-link"></button>
                                                    </span>
                                                </div>

                                                <div className="quilleditor bg-mode border rounded-bottom h-100px overflow-hidden"> </div>
                                                <div className="form-text">Please be as descriptive as possible regarding the details of this ticket.</div>
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="formFileMultiple" className="form-label heading-color">Attachment</label>
                                                <input className="form-control" type="file" id="formFileMultiple" multiple />
                                            </div>

                                            <div className="col-12">
                                                <p className="mb-0">Read our <a href="#">privacy policy</a> and see how we handle your personal data</p>
                                            </div>

                                            <div className="col-12 d-flex justify-content-between">
                                                <button className="btn btn-secondary prev-btn mb-0">Previous</button>
                                                <a href="ticket-list.html" className="btn btn-primary mb-0 ms-auto">Submit ticket</a>
                                            </div>
                                        </div>

                                    </div>

                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateTicket;
