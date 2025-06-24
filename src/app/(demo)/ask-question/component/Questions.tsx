import { Col, Container, Row } from 'react-bootstrap'
import { BiCloudUpload } from 'react-icons/bi'
import ReactQuill from 'react-quill-new';

const Questions = () => {
    return (
        <section className="pt-8">
            <Container>
                <Row className="mb-4">
                    <Col sx={10} className="mx-auto text-center">
                        <h1 className="mb-0 h2">Create New Question</h1>
                    </Col>
                </Row>

                <Row className="g-4">

                    <Col xl={10} className="mx-auto">
                        <div className="card card-body p-4 p-sm-5">
                            <form className="form-group">

                                <div className="mb-3">
                                    <label className="form-label form-label-dark">Title <span className="text-danger">*</span></label>
                                    <input className="form-control" type="text" />
                                    <small>Please choose an appropriate title for the equation so it can be answered easily.</small>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label form-label-dark">Category <span className="text-danger">*</span></label>

                                    <select className="form-select js-choice" data-placeholder-val="Select category" data-search-enabled="false">
                                        <option value="MR">Marketing</option>
                                        <option value="DV">Development</option>
                                        <option value="DE">Design</option>
                                        <option value="FN">Finance</option>
                                    </select>
                                    <small>Please choose an appropriate category for the equation so it can be answered easily</small>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label form-label-dark">Tags <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control js-choice mb-0" data-placeholder="true" data-placeholder-Val="Enter tags" data-max-item-count="14" data-remove-item-button="true" />
                                    <small>Maximum of 14 keywords. Keywords should all be in lowercase and separated by commas. e.g. javascript, react, marketing</small>
                                </div>


                                <div className="mb-3">
                                    <label className="form-label form-label-dark">Description <span className="text-danger">*</span></label>


                                    <div className="bg-light border border-bottom-0 rounded-top py-3" id="quilltoolbar">
                                        <span className="ql-formats">
                                            <select className="ql-size"></select>
                                        </span>
                                        <span className="ql-formats">
                                            <button className="ql-bold"></button>
                                            <button className="ql-italic"></button>
                                            <button className="ql-underline"></button>
                                            <button className="ql-strike"></button>
                                        </span>
                                        <span className="ql-formats">
                                            <select className="ql-color"></select>
                                            <select className="ql-background"></select>
                                        </span>
                                        <span className="ql-formats">
                                            <button className="ql-code-block"></button>
                                        </span>
                                        <span className="ql-formats">
                                            <button className="ql-list" value="ordered"></button>
                                            <button className="ql-list" value="bullet"></button>
                                            <button className="ql-indent" value="-1"></button>
                                            <button className="ql-indent" value="+1"></button>
                                        </span>
                                        <span className="ql-formats">
                                            <button className="ql-link"></button>
                                            <button className="ql-image"></button>
                                        </span>
                                        <span className="ql-formats">
                                            <button className="ql-clean"></button>
                                        </span>
                                    </div>


                                    <div className="quilleditor border rounded-bottom h-200px overflow-hidden"></div>
                                    <small>Please choose an appropriate title for the equation so it can be answered easily. </small>
                                </div>


                                <div className="mb-3">
                                    <label className="form-label form-label-dark">Upload files <span className="text-danger">*</span></label>
                                    <div className="text-center justify-content-center align-items-center p-4 border position-relative rounded">

                                        <span className="fs-2"><BiCloudUpload /></span>
                                        <div>
                                            <label style={{ cursor: "pointer" }}>
                                                <span>
                                                    <input className="form-control stretched-link" type="file" name="my-image" id="image" accept="image/gif, image/jpeg, image/png" />
                                                </span>
                                            </label>
                                            <p className="small mb-0 mt-2"><b>Note:</b> Only JPG, JPEG, and PNG files can upload.</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="mb-3">

                                    <div className="form-check mb-2">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            Is this question is a poll? If you want to be doing a poll click here.
                                        </label>
                                    </div>


                                    <div className="form-check mb-2">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck2" />
                                        <label className="form-check-label" htmlFor="exampleCheck2">
                                            Get notified by email when someone answers this question.
                                        </label>
                                    </div>


                                    <div className="form-check mb-0">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck3" />
                                        <label className="form-check-label" htmlFor="exampleCheck3">
                                            By asking your question, you agree to the Terms of Service and Privacy Policy.
                                        </label>
                                    </div>
                                </div>


                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-secondary mb-0">Cancel</button>
                                    <button className="btn btn-primary mb-0">Publish question</button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Questions