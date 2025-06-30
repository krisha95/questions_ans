import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaEyeSlash, FaFacebookF, FaGoogle } from 'react-icons/fa6'

const page = () => {
    return (
        <main>
            <section className="py-0">
                <Container>
                    <Row className="justify-content-center text-center align-items-center vh-100 py-5">

                        <Col sm={10} md={8} lg={7} xl={6} xxl={5}>
                            <div className="card card-body p-4 p-sm-5">

                                <h1 className="mb-2 h3">Create new account</h1>
                                <p className="mb-0">Already a member?<Link href="/auth/signin"> Log in</Link></p>

                                <form className="mt-sm-4 text-start">

                                    <div className="mb-3">
                                        <label className="form-label">Enter email id</label>
                                        <input type="email" className="form-control" />
                                    </div>

                                    <div className="mb-3 position-relative">
                                        <label className="form-label">Enter password</label>
                                        <input type="password" className="form-control fakepassword pe-6" id="psw-input" placeholder="Enter your password" />
                                        <span className="position-absolute top-50 end-0 translate-middle-y p-0 me-2 mt-3">
                                            <FaEyeSlash className="fakepasswordicon fas  cursor-pointer p-2" />
                                        </span>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control" />
                                    </div>

                                    <div className="mb-3">
                                        <input type="checkbox" className="form-check-input" id="rememberCheck" />
                                        <label className="form-check-label" htmlFor="rememberCheck">Keep me signed in</label>
                                    </div>

                                    <div className="d-grid"><button type="submit" className="btn btn-primary">Login</button></div>


                                    <div className="position-relative my-4">
                                        <hr />
                                        <p className="small position-absolute top-50 start-50 translate-middle bg-mode px-2">Or sign in with</p>
                                    </div>

                                    <Row className="g-3">
                                        <Col sm={6} className="d-grid">
                                            <Link href="#" className="btn btn-outline-light mb-0"><FaGoogle className="fab fa-fw  text-google-icon me-2" />Google</Link>
                                        </Col>

                                        <Col sm={6} className="d-grid">
                                            <Link href="#" className="btn btn-outline-light mb-0"><FaFacebookF className="fab fa-fw text-facebook me-2" />Facebook</Link>
                                        </Col>
                                    </Row>

                                    <p className="mb-0 mt-3 text-center">©{new Date().getFullYear()} <Link target="_blank" href="https://www.webestica.com/">Webestica.</Link> All rights reserved</p>
                                </form>

                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default page