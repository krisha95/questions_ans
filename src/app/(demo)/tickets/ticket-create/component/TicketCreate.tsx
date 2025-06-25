'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
// import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

const CreateTicket = () => {
    const [step, setStep] = useState(1);
    const [description, setDescription] = useState('');

    const nextStep = () => {
        if (step < 3) setStep(prev => prev + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(prev => prev - 1);
    };

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
                                            <button
                                                type="button"
                                                className={`btn btn-link step-trigger p-0 mb-0 ${step === 1 ? 'active' : ''}`}
                                            >
                                                <span className="bs-stepper-circle">1</span>
                                            </button>
                                            <h6 className="d-none d-md-block">Introduction</h6>
                                        </div>
                                    </div>
                                    <div className="line" />
                                    <div className="step" data-target="#step-2">
                                        <div className="d-grid text-center align-items-center">
                                            <button
                                                type="button"
                                                className={`btn btn-link step-trigger p-0 mb-0 ${step === 2 ? 'active' : ''}`}
                                            >
                                                <span className="bs-stepper-circle">2</span>
                                            </button>
                                            <h6 className="d-none d-md-block">Category</h6>
                                        </div>
                                    </div>
                                    <div className="line" />
                                    <div className="step" data-target="#step-3">
                                        <div className="d-grid text-center align-items-center">
                                            <button
                                                type="button"
                                                className={`btn btn-link step-trigger p-0 mb-0 ${step === 3 ? 'active' : ''}`}
                                            >
                                                <span className="bs-stepper-circle">3</span>
                                            </button>
                                            <h6 className="d-none d-md-block">Ticket</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body bs-stepper-content">
                                <form className="w-100 text-start" onSubmit={e => e.preventDefault()}>
                                    {step === 1 && (
                                        <div id="step-1" role="tabpanel" className="content fade show active">
                                            <h2 className="h4 mb-3">Before you submit the ticket,</h2>
                                            <ul>
                                                <li>Read the documentation properly, many issues can be solved by following documentation.</li>
                                                <li>Make sure there is no console error in your project, many issues can be solved by fixing console log errors</li>
                                            </ul>
                                            <p>
                                                Please fill in the form and describe as clearly as possible the problem you are having. Please <b>Include a link</b> to your website with a screenshot or at least <b>Screenshot(s)</b> pointing out the actual issue. It will help us to identify and solve the issues quickly. It saves both of our time
                                            </p>
                                            <div className="text-end">
                                                <button className="btn btn-primary next-btn mb-0" onClick={nextStep}>Next</button>
                                            </div>
                                        </div>
                                    )}

                                    {step === 2 && (
                                        <div id="step-2" role="tabpanel" className="content fade show active">
                                            <p className="mb-4">Please select the category that you need support for from the list below</p>
                                            <h6>Select category</h6>
                                            <ul className="list-group list-group-flush">
                                                {['Category 01', 'Category 02', 'Category 03', 'Category 04', 'Category 05'].map((cat, idx) => (
                                                    <li key={idx} className="list-group-item d-flex gap-1 py-3 ps-0">
                                                        <input className="form-check-input me-1" type="radio" name="listGroupRadio" id={`cat-${idx}`} />
                                                        <label className="form-check-label" htmlFor={`cat-${idx}`}>
                                                            {cat} - Category that you need support
                                                        </label>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="hstack gap-2 flex-wrap justify-content-between mt-4">
                                                <button className="btn btn-secondary prev-btn mb-0" onClick={prevStep}>Previous</button>
                                                <button className="btn btn-primary next-btn mb-0" onClick={nextStep}>Next</button>
                                            </div>
                                        </div>
                                    )}

                                    {step === 3 && (
                                        <div id="step-3" role="tabpanel" className="content fade show active">
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
                                                    <ReactQuill value={description} onChange={setDescription} />
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
                                                    <button className="btn btn-secondary prev-btn mb-0" onClick={prevStep}>Previous</button>
                                                    <a href="ticket-list.html" className="btn btn-primary mb-0 ms-auto">Submit ticket</a>
                                                </div>
                                            </div>
                                        </div>
                                    )}
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
