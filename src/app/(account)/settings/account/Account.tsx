import avatar5 from "@/assets/images/avatar/05.jpg"
import Image from 'next/image'
import Link from 'next/link'
import { Card, Col, Row } from 'react-bootstrap'
import { BsPlusCircleDotted } from 'react-icons/bs'
import { FaEyeSlash, FaFacebookF, FaGoogle, FaLinkedinIn, FaPlus } from "react-icons/fa6"

const Account = () => {
    return (
        <>
            <Card className="card mb-4 p-0">
                <div className="card-header border-bottom p-4">
                    <h1 className="h4 mb-1 card-title">Account Settings</h1>
                    <p className="mb-0">Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to.</p>
                </div>

                <div className="card-body p-4">
                    <Row className="g-3">
                        <Col xs={12}>
                            <label className="form-label">Profile picture</label>

                            <div className="d-flex align-items-center">
                                <div className="avatar-uploader me-3">

                                    <div className="avatar-edit">
                                        <input type='file' id="avatarUpload" accept=".png, .jpg, .jpeg" />
                                        <label htmlFor="avatarUpload"></label>
                                    </div>

                                    <div className="avatar avatar-xl position-relative">
                                        <Image id="avatar-preview" className="avatar-img rounded-circle border border-white border-3 shadow" src={avatar5} alt="" />
                                    </div>
                                </div>

                                <div className="avatar-remove">
                                    <button type="button" id="avatar-reset-img" className="btn btn-danger-soft">Delete</button>
                                </div>
                            </div>

                        </Col>


                        <Col sm={6}>
                            <label className="form-label">First name</label>
                            <input type="text" className="form-control" placeholder="" value="Louis" />
                        </Col>

                        <Col sm={6}>
                            <label className="form-label">Last name</label>
                            <input type="text" className="form-control" placeholder="" value="Ferguson" />
                        </Col>

                        <Col sm={6}>
                            <label className="form-label">User name</label>
                            <input type="text" className="form-control" placeholder="" value="@Louison" />
                        </Col>

                        <Col sm={6} >
                            <label className="form-label">Country</label>
                            <select className="form-select form-select-sm js-choice" data-placeholder-val="Select country" aria-label=".form-select-sm example">
                                <option>USA</option>
                                <option>India</option>
                                <option>Japan</option>
                                <option>Spain</option>
                            </select>
                        </Col>

                        <Col sm={6}>
                            <label className="form-label">Phone number</label>
                            <input type="text" className="form-control" placeholder="" value="(678) 324-1251" />

                            <Link className="btn btn-sm text-primary-hover p-0 rounded mt-1" href="#!"> <BsPlusCircleDotted className="me-1" />Add new phone number</Link>
                        </Col>

                        <Col sm={6}>
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" placeholder="" value="sam@webestica.com" />

                            <Link className="btn btn-sm text-primary-hover p-0 rounded mt-1" href="#!"> <BsPlusCircleDotted className="me-1" />Add new email address</Link>
                        </Col>

                        <Col sm={6}>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="allowChecked" checked={true} />
                                <label className="form-check-label" htmlFor="allowChecked">
                                    Allow anyone to add you to their team
                                </label>
                            </div>
                        </Col>


                        <Col sm={6}>
                            <div className="form-check form-switch mb-0">
                                <input className="form-check-input" type="checkbox" role="switch" id="switch1" />
                                <label className="form-check-label" htmlFor="switch1">Require email verification</label>
                            </div>
                        </Col>

                        <Col xs={12}>
                            <label className="form-label">About me</label>
                            <textarea className="form-control" rows={4} placeholder="Description (Required)">Interested has all Devonshire difficulty gay assistance joy. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance.</textarea>
                            <small>Character limit: 300</small>
                        </Col>

                        <Col xs={12} className="text-end">
                            <button className="btn btn-link text-primary-hover mb-0">Logout of all other browsers</button>
                            <button type="submit" className="btn btn-sm btn-primary mb-0">Save changes</button>
                        </Col>
                    </Row>

                </div>

            </Card>


            <div className="card mb-4 p-0">

                <div className="card-header border-bottom p-4">
                    <h4 className="card-title mb-1">Change your password</h4>
                    <small>See resolved goodness felicity shy civility domestic had but.</small>
                </div>


                <div className="card-body p-4">
                    <div className="row g-4">

                        <Col xl={8} className="order-2 order-xl-1">
                            <form className="row g-3">

                                <Col xs={12}>
                                    <label className="form-label">Current password</label>
                                    <input type="text" className="form-control" placeholder="" />
                                </Col>

                                <Col xs={12}>
                                    <label className="form-label">New password</label>

                                    <div className="input-group">
                                        <input className="form-control fakepassword" type="password" id="psw-input" placeholder="Enter new password" />
                                        <span className="input-group-text p-0">
                                            <FaEyeSlash className="fakepasswordicon far  cursor-pointer p-2 w-40px" />
                                        </span>
                                    </div>
                                </Col>

                                <Col xs={12}>
                                    <label className="form-label">Confirm password</label>
                                    <input type="text" className="form-control" placeholder="" />
                                </Col>
                            </form>
                        </Col>



                        <Col xl={4} className="order-1">
                            <div className="bg-light border border-secondary p-4 rounded">
                                <h6>Rules for passwords</h6>
                                <small>To create a new password, you have to meet all of the following  requirements</small>

                                <ul className="mb-0 ms-n2 small">
                                    <li>Minimum 8 character</li>
                                    <li>At least one special character </li>
                                    <li>At least one number</li>
                                    <li>Can't repeat previous</li>
                                </ul>
                            </div>
                        </Col>

                    </div>
                </div>


                <div className="card-footer text-end p-4 pt-0">
                    <button type="submit" className="btn btn-primary mb-0">Update password</button>
                </div>
            </div>

            <div className="card p-0">

                <div className="card-header border-bottom d-sm-flex justify-content-between align-items-center p-4">
                    <div className="mb-2 mb-sm-0">
                        <h4 className="card-title mb-1">Linked account</h4>
                        <small>See resolved goodness felicity shy civility domestic had but.</small>
                    </div>
                    <Link href="#" className="btn btn-sm btn-light mb-0"><FaPlus className="fa-solid me-2" />Add Account</Link>
                </div>


                <div className="card-body p-4">
                    <Row className="g-4">

                        <Col md={4} lg={6} xl={4}>
                            <div className="card card-body border">
                                <h5 className="mb-2"><FaGoogle className="fab text-google-icon me-2" />Google</h5>
                                <p className="mb-2 small">You are successfully connected to your Google account</p>
                                <button type="button" className="btn btn-sm btn-danger mb-0">Invoke</button>
                            </div>
                        </Col>


                        <Col md={4} lg={6} xl={4}>
                            <div className="card card-body border">
                                <h5 className="mb-2"><FaLinkedinIn className="fab text-linkedin me-2" />Linkedin</h5>
                                <p className="mb-2 small">Connect with Linkedin account for a personalized experience</p>
                                <button type="button" className="btn btn-sm btn-primary mb-0">Connect Linkedin</button>
                            </div>
                        </Col>


                        <Col md={4} lg={6} xl={4}>
                            <div className="card card-body border">
                                <h5 className="mb-2"><FaFacebookF className="text-facebook me-2" />Facebook</h5>
                                <p className="mb-2 small">Connect with Facebook account for a personalized experience</p>
                                <button type="button" className="btn btn-sm btn-primary mb-0">Connect Facebook</button>
                            </div>
                        </Col>
                    </Row>
                </div>

            </div>

        </>
    )
}

export default Account