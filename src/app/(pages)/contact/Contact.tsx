import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BiRightArrowAlt } from "react-icons/bi";

const Contact = () => {
  return (
    <main>
      <section className="pt-8">
        <Container>
          <Row>
            <Col md={10} xl={8} className="mx-auto text-center">
              <h1 className="mb-0">Contact us</h1>
              <p className="mb-0 mt-2">
                Q&A Comfort reached gay perhaps chamber his six detract besides
                add. Moonlight newspaper up its enjoyment agreeable depending
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row className="g-4">
            <Col xl={9} className="mx-auto">
              <div className="vstack gap-4">
                <div className="card p-4 p-sm-5">
                  <div className="card-header p-0 pb-4">
                    <h3 className="mb-1">Get In Touch!</h3>
                    <p className="mb-0">
                      You can reach us anytime via{" "}
                      <Link href="#">example@gmail.com</Link>
                    </p>
                  </div>

                  <div className="card-body p-0">
                    <form className="row g-4">
                      <Col md={6}>
                        <label htmlFor="yourName" className="form-label">
                          Your name *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="yourName"
                        />
                      </Col>

                      <Col md={6}>
                        <label htmlFor="emailInput" className="form-label">
                          Email address *
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="emailInput"
                        />
                      </Col>

                      <Col md={6}>
                        <label htmlFor="mobileNumber" className="form-label">
                          Mobile number *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="mobileNumber"
                        />
                      </Col>

                      <Col md={6}>
                        <label htmlFor="subject" className="form-label">
                          Subject *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                        />
                      </Col>

                      <Col xs={12}>
                        <label htmlFor="textareaBox" className="form-label">
                          Message *
                        </label>
                        <textarea
                          className="form-control"
                          id="textareaBox"
                          rows={3}
                        ></textarea>
                      </Col>

                      <Col xs={12} className="form-check ms-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheck1"
                        >
                          By submitting this form you agree to our terms and
                          conditions and our privacy policy which explain how we
                          may collect, use and disclose your personal
                          information including to third parties.
                        </label>
                      </Col>

                      <Col xs={12}>
                        <button className="btn btn-primary mb-0" type="button">
                          Send Message
                        </button>
                      </Col>
                    </form>
                  </div>
                </div>

                <div className="card p-4 p-sm-5">
                  <div className="card-header p-0 pb-4">
                    <h3 className="card-title mb-0">Find us</h3>
                  </div>

                  <div className="card-body p-0">
                    <div className="row g-4">
                      <Col md={6}>
                        <h5 className="mb-3">New York, USA (HQ)</h5>
                        <address className="mb-1">
                          750 Sing Sing Rd, Horseheads, NY, 14845
                        </address>
                        <p className="mb-1">Call: 469-537-2410 (Toll-free)</p>
                        <p>
                          Support time: Monday to Saturday
                          <br />
                          9:00 am to 5:30 pm
                        </p>
                        <Link href="#" className="btn btn-link p-0">
                          View location <BiRightArrowAlt />
                        </Link>
                      </Col>

                      <Col md={6}>
                        <h5 className="mb-3">Tokyo, Japan</h5>
                        <address className="mb-1">
                          2002 Horton Ford Rd, Eidson, TN, 37731
                        </address>
                        <p className="mb-1">Call: (423) 733-8222 (Toll-free)</p>
                        <p>
                          Support time: Monday to Saturday
                          <br />
                          9:30 am to 6:00 pm
                        </p>
                        <Link href="#" className="btn btn-link p-0">
                          View location <BiRightArrowAlt />
                        </Link>
                      </Col>

                      <div className="col-12">
                        <iframe
                          className="w-100 rounded"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
                          height="300"
                          style={{ border: 0 }}
                          aria-hidden="false"
                          tabIndex={0}
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Contact;
