import React from 'react'
import elementLight from "@/assets/images/elements/d-light.svg"
import elementDark from "@/assets/images/elements/d-dark.svg"
import elementDefult from "@/assets/images/elements/d-light.svg"
import Image from 'next/image'

const Display = () => {
    return (
        <>
            <div className="card p-0">
                <div className="card-header border-bottom p-4">
                    <h4 className="card-title mb-0">Display Settings</h4>
                </div>

                <div className="card-body p-4">
                    <ul className="list-group list-group-flush">

                        <li className="list-group-item d-flex justify-content-between px-0 py-3">
                            <div className="me-2">
                                <h6 className="mb-0">Theme</h6>
                            </div>
                            <div className="hstack gap-2 flex-wrap">
                                <div className="form-check form-check-inline align-items-center">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                    <label className="form-check-label" htmlFor="inlineRadio1">
                                        <Image src={elementLight} className="rounded shadow w-80px" alt="" />
                                    </label>
                                    <div className="text-center mt-1 small">Light</div>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                    <label className="form-check-label" htmlFor="inlineRadio2">
                                        <Image src={elementDark} className="rounded shadow w-80px" alt="" />
                                    </label>
                                    <div className="text-center mt-1 small">Dark</div>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                    <label className="form-check-label" htmlFor="inlineRadio3">
                                        <Image src={elementDefult} className="rounded shadow w-80px" alt="" />
                                    </label>
                                    <div className="text-center mt-1 small">System Setting</div>
                                </div>
                            </div>
                        </li>

                        <li className="list-group-item d-md-flex justify-content-between align-items-center px-0 py-3">
                            <div className="me-md-3">
                                <h6 className="mb-0">High contrast</h6>
                                <p className="small mb-0">Flipping this switch improves legibility by increasing the contrast between text, background, and border colors.</p>
                            </div>
                            <div className="form-check form-switch mb-0">
                                <input className="form-check-input" type="checkbox" role="switch" id="dpSwitchCheckChecked" />
                            </div>
                        </li>

                        <li className="list-group-item d-md-flex justify-content-between align-items-center px-0 pt-3 pb-0">
                            <div className="me-md-3">
                                <h6 className="mb-0">Hide left navigation</h6>
                                <p className="small mb-0">When you flip this switch, the left navigation will no longer be pinned to the left of the page on Q&A sites.</p>
                            </div>
                            <div className="form-check form-switch mb-0">
                                <input className="form-check-input" type="checkbox" role="switch" id="dpSwitchCheckChecked2" />
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="card-footer pt-0 p-4 text-end border-0">
                    <button type="submit" className="btn btn-sm btn-primary mb-0">Save changes</button>
                </div>
            </div>
        </>
    )
}

export default Display