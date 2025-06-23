import React from "react";
import post from "@/assets/images/post/02.jpg";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import post3 from "@/assets/images/post/03.jpg";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Page = () => {
  return (
    <main>
      <section className="pt-8 pb-0">
        <Container>
          <Row>
            <Col md={8} className="mx-auto text-center">
              <h1 className="mb-0">About Q&A</h1>
              <p className="lead mb-0 mt-3">
                Q&A Comfort reached gay perhaps chamber his six detract besides
                add. Moonlight newspaper up its enjoyment agreeable depending
              </p>
            </Col>
            <Col xs={12}>
              <Image src={post} className="rounded mt-4" alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <h4>Our core values</h4>
              <p className="mb-4">
                Q&A core values unite us across geographies, teams, and levels.
                They are our shared understanding of how we work at Q&A - how we
                make decisions, how we collaborate, how we treat each other, and
                how we think about the value we are creating for our community
                of students, parents, and teachers
              </p>

              <Row className="g-4">
                <Col md={6}>
                  <h4>Deliver with quality</h4>
                  <ul className="ps-3 mb-0">
                    <li>
                      A pleasure exertion if believed provided to. All led out
                      world this music while asked.
                    </li>
                    <li>
                      Warrant private blushes removed and in equally totally if.{" "}
                    </li>
                    <li>
                      Mr feeling chiefly cordial in do. Large above be to means
                    </li>
                    <li>
                      Dashwood does provide stronger is. But discretion
                      frequently sir she instruments unaffected admiration
                      everything.
                    </li>
                  </ul>
                </Col>

                <Col md={6}>
                  <h4>Build and lead high-performing teams</h4>
                  <ul className="ps-3 mb-0">
                    <li>All led out world this music while asked.</li>
                    <li>
                      Warrant private blushes removed and in equally totally if.
                    </li>
                    <li>Large above be to means.</li>
                    <li>Dashwood does provide stronger is.</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="g-4 g-lg-6 align-items-center mt-4">
            <Col lg={6}>
              <Image src={post3} className="rounded" alt="" />
            </Col>

            <Col lg={6}>
              <h3>Always wonder. Always explore.</h3>
              <p>
                How promotion excellent curiosity yet attempted happiness Gay
                prosperous impression had conviction.
              </p>

              <Row>
                <Col sm={6}>
                  <ul className="list-group list-group-borderless">
                    <li className="list-group-item">
                      <h6 className="fw-normal mb-0 d-flex">
                        <BsFillCheckCircleFill className="text-success" />
                        Learn, share, grow
                      </h6>
                    </li>
                    <li className="list-group-item">
                      <h6 className="fw-normal mb-0 d-flex">
                        <BsFillCheckCircleFill className="text-success" />
                        Adopt a customer-first mindset
                      </h6>
                    </li>
                    <li className="list-group-item">
                      <h6 className="fw-normal mb-0 d-flex">
                        <BsFillCheckCircleFill className="text-success" />
                        Be flexible and inclusive
                      </h6>
                    </li>
                  </ul>
                </Col>
                <div className="col-sm-6">
                  <ul className="list-group list-group-borderless">
                    <li className="list-group-item">
                      <h6 className="fw-normal mb-0 d-flex">
                        <BsFillCheckCircleFill className="text-success" />
                        Keep community at our center
                      </h6>
                    </li>
                    <li className="list-group-item">
                      <h6 className="fw-normal mb-0 d-flex">
                        <BsFillCheckCircleFill className="text-success" />
                        Empower people to deliver outstanding results
                      </h6>
                    </li>
                    <li className="list-group-item">
                      <h6 className="fw-normal mb-0 d-flex">
                        <BsFillCheckCircleFill className="text-success" />
                        Be transparent
                      </h6>
                    </li>
                  </ul>
                </div>
              </Row>

              <a href="ask-question.html" className="btn btn-dark mb-0 mt-2">
                Ask Question?
              </a>
            </Col>
          </Row>

          <div className="bg-mode p-4 rounded mt-5">
            <Row className="g-4">
              <Col sm={6} lg={3} className="text-center">
                <h4 className="fs-1 fw-bold mb-0">25M</h4>
                <h6 className="mb-0">Monthly visitors to our network</h6>
              </Col>

              <Col sm={6} lg={3} className="text-center">
                <h4 className="fs-1 fw-bold mb-0">98+</h4>
                <h6 className="mb-0">Questions asked today</h6>
              </Col>

              <Col sm={6} lg={3} className="text-center">
                <h4 className="fs-1 fw-bold mb-0">20M</h4>
                <h6 className="mb-0">Questions asked</h6>
              </Col>

              <Col sm={6} lg={3} className="text-center">
                <h4 className="fs-1 fw-bold mb-0">16M</h4>
                <h6 className="mb-0">Answers given</h6>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Page;
