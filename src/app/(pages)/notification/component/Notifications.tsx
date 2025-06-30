import avatar01 from "@/assets/images/avatar/01.jpg";
import avatar02 from "@/assets/images/avatar/02.jpg";
import avatar03 from "@/assets/images/avatar/03.jpg";
import avatar04 from "@/assets/images/avatar/04.jpg";
import avatar05 from "@/assets/images/avatar/05.jpg";
import avatar06 from "@/assets/images/avatar/06.jpg";
import avatar07 from "@/assets/images/avatar/07.jpg";
import avatar09 from "@/assets/images/avatar/09.jpg";
import Image from "next/image";
import Link from "next/link";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BiCaretUp } from "react-icons/bi";
import { BsFillCaretUpFill } from "react-icons/bs";

const Notifications = () => {
  return (
    <section className="pt-8">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <div className="vstack gap-4">
              <Row className="g-4">
                <Col sm={6}>
                  <h1 className="h2 mb-0">Notification</h1>
                </Col>

                <Col sm={6} lg={3} className="ms-sm-auto">
                  <select
                    className="form-select js-choice"
                    data-placeholder-val="Sort by"
                    data-search-enabled="false"
                  >
                    <option>Notification</option>
                    <option>Mentions</option>
                    <option>Topics</option>
                  </select>
                </Col>
              </Row>

              <Card className="p-0">
                <Row className="g-0">
                  <Col sm={2} className="text-center mt-4">
                    <div className="avatar avatar-lg flex-shrink-0">
                      <Image
                        className="avatar-img rounded-circle"
                        src={avatar06}
                        alt="avatar"
                      />
                    </div>
                  </Col>

                  <Col sm={10}>
                    <div className="card-body p-4 ps-sm-0">
                      <div className="d-flex align-items-center flex-wrap mb-2">
                        <h6 className="mb-0 me-1">
                          <Link href="#">Frances Guerrero</Link>
                        </h6>
                        <Link href="#" className="text-primary-hover fw-normal">
                          @francesreo
                        </Link>
                      </div>

                      <p className="small text-primary-hover">
                        Mentioned you in{" "}
                        <Link href="#" className="heading-color fw-semibold">
                          What can I do to add this count, and make the right
                          data frame?
                        </Link>
                      </p>
                      <p className="small text-primary-hover">
                        <Link href="#" className="heading-color fw-semibold">
                          @LoriStevens
                        </Link>{" "}
                        That's for you.
                      </p>

                      <div className="hstack gap-2 gap-sm-3 small">
                        <Link
                          href="#"
                          className="fw-normal text-primary-hover mb-0"
                        >
                          Upvote
                        </Link>
                        <Link
                          href="#"
                          className="fw-normal text-primary-hover mb-0"
                        >
                          Reply
                        </Link>
                        <Link
                          href="#"
                          className="fw-normal text-primary-hover mb-0"
                        >
                          Share
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>

              <Card className="p-0">
                <Row className="g-0">
                  <Col sm={2} className="text-center mt-4">
                    <div className="avatar avatar-lg flex-shrink-0">
                      <Image
                        className="avatar-img rounded-circle"
                        src={avatar03}
                        alt="avatar"
                      />
                    </div>
                  </Col>

                  <Col sm={10}>
                    <div className="card-body p-4 ps-sm-0">
                      <div className="d-flex align-items-center flex-wrap mb-2">
                        <h6 className="mb-0 me-1">
                          <Link href="#">Larry Lawson</Link>
                        </h6>
                        <Link href="#" className="text-primary-hover fw-normal">
                          @laryson5486
                        </Link>
                      </div>

                      <p className="small text-primary-hover">
                        Mentioned you in{" "}
                        <Link href="#" className="heading-color fw-semibold">
                          What can I do to add this count, and make the right
                          data frame?
                        </Link>
                      </p>
                      <p className="small text-primary-hover">
                        <Link href="#" className="heading-color fw-semibold">
                          @LoriStevens
                        </Link>{" "}
                        That's for you.
                      </p>

                      <div className="hstack gap-2 gap-sm-3 small">
                        <Link
                          href="#"
                          className="fw-normal text-primary-hover mb-0"
                        >
                          Upvote
                        </Link>
                        <Link
                          href="#"
                          className="fw-normal text-primary-hover mb-0 active"
                        >
                          Replied
                        </Link>
                        <Link
                          href="#"
                          className="fw-normal text-primary-hover mb-0"
                        >
                          Share
                        </Link>
                      </div>

                      <div className="comment-item d-flex mt-4 pt-2">
                        <div className="avatar flex-shrink-0">
                          <Image
                            className="avatar-img rounded-circle"
                            src={avatar01}
                            alt="avatar"
                          />
                        </div>

                        <div className="ms-3">
                          <h6 className="mb-2">Lori Stevens</h6>
                          <p className="small mb-2">
                            <Link href="#" className="fw-semibold">
                              @laryson5486
                            </Link>{" "}
                            Upvoted. congratulation on the launch 🚀
                          </p>
                          <small>5 day ago</small>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>

              <Card className="p-0">
                <Row className="g-0">
                  <Col sm={2} className="text-center mt-4">
                    <div className="border rounded text-center w-60px p-1 mx-auto">
                      <input
                        type="radio"
                        className="btn-check"
                        name="vote2"
                        id="btnradioT2"
                      />
                      <label
                        className="btn btn-vote mb-0 p-0"
                        htmlFor="btnradioT2"
                      >
                        <BsFillCaretUpFill className="fs-5" />
                      </label>

                      <h6 className="mb-0 px-2 vote-count">145</h6>
                    </div>
                  </Col>

                  <Col sm={10}>
                    <div className="card-body p-4 ps-sm-0">
                      <ul className="avatar-group mb-2">
                        <li className="avatar avatar-xs me-2">
                          <Image
                            className="avatar-img rounded-circle"
                            src={avatar02}
                            alt="avatar"
                          />
                        </li>
                        <li className="avatar avatar-xs me-0">
                          <Image
                            className="avatar-img rounded-circle"
                            src={avatar05}
                            alt="avatar"
                          />
                        </li>
                      </ul>

                      <div className="mb-2 small text-primary-hover">
                        <Link href="#" className="heading-color fw-semibold">
                          Larry Lawson 💖 + 1 other
                        </Link>{" "}
                        Upvoted on your comment{" "}
                        <Link href="#" className="heading-color fw-semibold">
                          What can I do to add this count, and make the right
                          data frame?
                        </Link>
                      </div>

                      <p className="mb-0 small">
                        It drew a hill from me. Valley by oh twenty direct me
                        so. It drew a hill from me. Valley by oh twenty direct
                        me so. It drew a hill from me.🔥
                      </p>
                    </div>
                  </Col>
                </Row>
              </Card>

              <Card className="p-0">
                <Row className="g-0">
                  <Col sm={10} className="ms-auto">
                    <div className="card-body p-4 ps-sm-0">
                      <div className="avatar avatar-xs me-2">
                        <Image
                          className="avatar-img rounded-circle"
                          src={avatar04}
                          alt="avatar"
                        />
                      </div>

                      <div className="mb-2 small">
                        <Link
                          href="#"
                          className="heading-color text-primary-hover fw-semibold"
                        >
                          Dennis Barrett{" "}
                        </Link>{" "}
                        Started following you
                      </div>
                      <Link href="#" className="btn btn-sm btn-light mb-0">
                        Follow back
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Card>

              <Card className="p-0">
                <Row className="g-0">
                  <Col sm={2} className="text-center mt-4">
                    <div className="avatar avatar-lg flex-shrink-0">
                      <Image
                        className="avatar-img rounded-circle"
                        src={avatar03}
                        alt="avatar"
                      />
                    </div>

                    <div className="border rounded text-center w-60px p-1 mx-auto mb-sm-3">
                      <input
                        type="radio"
                        className="btn-check"
                        name="vote3"
                        id="btnradioT3"
                      />
                      <label
                        className="btn btn-vote mb-0 p-0"
                        htmlFor="btnradioT3"
                      >
                        <BsFillCaretUpFill className="fs-5" />
                      </label>

                      <h6 className="mb-0 px-2 vote-count">10</h6>
                    </div>
                  </Col>

                  <Col sm={10}>
                    <div className="card-body p-4 ps-sm-0">
                      <div className="d-flex align-items-center flex-wrap mb-2">
                        <h6 className="mb-0 me-1">
                          <Link href="#">Larry Lawson</Link>
                        </h6>
                        <Link href="#" className="text-primary-hover fw-normal">
                          @laryson5486
                        </Link>
                      </div>

                      <div className="mb-2 small text-primary-hover">
                        Started a discussion{" "}
                        <Link href="#" className="heading-color fw-semibold">
                          What can I do to add this count, and make the right
                          data frame?
                        </Link>
                      </div>

                      <p className="small">
                        {" "}
                        Valley by oh twenty direct me so. It drew a hill from
                        me. Valley by oh twenty direct me so. It drew a hill
                        from me It drew a hill from me. Valley by oh twenty
                        direct me so. It drew a hill from me. Valley by oh
                        twenty direct me so. It drew a hill from me.🔥
                      </p>

                      <div className="hstack gap-2 gap-sm-3 small">
                        <Link
                          href="#"
                          className="fw-normal text-primary-hover mb-0"
                        >
                          Join discussion
                        </Link>
                        <Link
                          href="#"
                          className="fw-normal text-primary-hover mb-0"
                        >
                          Share
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>

              <Card className="p-0">
                <Row className="g-0">
                  <Col sm={2} className="text-center mt-4">
                    <div className="avatar avatar-lg align-middle">
                      <div className="avatar-img rounded-circle bg-dark">
                        <span className="text-danger position-absolute top-50 start-50 translate-middle fw-bold">
                          WB
                        </span>
                      </div>
                    </div>
                  </Col>

                  <Col sm={10}>
                    <div className="card-body p-4 ps-sm-0">
                      <div className="avatar avatar-xs me-2">
                        <Image
                          className="avatar-img rounded-circle"
                          src={avatar06}
                          alt="avatar"
                        />
                      </div>

                      <div className="text-primary-hover mb-2 small">
                        <Link href="#" className="heading-color fw-semibold">
                          Billy Vasquez
                        </Link>{" "}
                        Upvoted{" "}
                        <Link href="#" className="heading-color fw-semibold">
                          Webestica bootstrap template
                        </Link>
                      </div>

                      <p className="mb-0 small">
                        Unleashing bootstrap magic in every design 🥰
                      </p>
                    </div>
                  </Col>
                </Row>
              </Card>

              <Card className="p-0">
                <Row className="g-0">
                  <Col sm={10} className="ms-auto">
                    <div className="card-body p-4 ps-sm-0">
                      <div className="avatar avatar-xs me-2">
                        <Image
                          className="avatar-img rounded-circle"
                          src={avatar02}
                          alt="avatar"
                        />
                      </div>

                      <div className="mb-2 small">
                        <Link
                          href="#"
                          className="heading-color text-primary-hover fw-semibold"
                        >
                          Larry Lawson{" "}
                        </Link>{" "}
                        Started following you
                      </div>
                      <Link href="#" className="btn btn-sm btn-light mb-0">
                        Follow back
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Card>

              <Card className="p-0">
                <Row className="g-0">
                  <Col sm={2} className="text-center mt-4">
                    <div className="avatar avatar-lg flex-shrink-0">
                      <Image
                        className="avatar-img rounded-circle"
                        src={avatar07}
                        alt="avatar"
                      />
                    </div>
                  </Col>

                  <Col sm={10}>
                    <div className="card-body p-4 ps-sm-0">
                      <div className="d-flex align-items-center flex-wrap mb-2">
                        <h6 className="mb-0 me-1">
                          <Link href="#">Billy Vasquez</Link>
                        </h6>
                        <Link href="#" className="text-primary-hover fw-normal">
                          @billy4you
                        </Link>
                      </div>

                      <p className="small text-primary-hover">
                        Mentioned you in{" "}
                        <Link href="#" className="heading-color fw-semibold">
                          How much time do you spend on your smartphone per day?
                        </Link>
                      </p>
                      <p className="small text-primary-hover">
                        <Link href="#" className="heading-color fw-semibold">
                          @LoriStevens
                        </Link>{" "}
                        I'm sure you will succeed. 🥰
                      </p>

                      <div className="hstack gap-2 gap-sm-3 small">
                        <Link
                          href="#"
                          className="fw-normal text-primary-hover mb-0"
                        >
                          Upvote
                        </Link>
                        <Link
                          href="#"
                          className="fw-normal text-primary-hover mb-0"
                        >
                          Reply
                        </Link>
                        <Link
                          href="#"
                          className="fw-normal text-primary-hover mb-0"
                        >
                          Share
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>

              <Card className="p-0">
                <Row className="g-0">
                  <Col sm={2} className="text-center mt-4">
                    <div className="avatar avatar-lg flex-shrink-0">
                      <Image
                        className="avatar-img rounded-circle"
                        src={avatar09}
                        alt="avatar"
                      />
                    </div>

                    <div className="border rounded text-center w-60px p-1 mx-auto mb-sm-4">
                      <input
                        type="radio"
                        className="btn-check"
                        name="vote3"
                        id="btnradioT6"
                      />
                      <label
                        className="btn btn-vote mb-0 p-0"
                        htmlFor="btnradioT6"
                      >
                        <BsFillCaretUpFill className="fs-5" />
                      </label>

                      <h6 className="mb-0 px-2 vote-count">08</h6>
                    </div>
                  </Col>

                  <Col sm={10}>
                    <div className="card-body p-4 ps-sm-0">
                      <div className="d-flex align-items-center flex-wrap mb-2">
                        <h6 className="mb-0 me-1">
                          <Link href="#">Judy Nguyen</Link>
                        </h6>
                        <Link href="#" className="text-primary-hover fw-normal">
                          @judyhaveall
                        </Link>
                      </div>

                      <div className="mb-2 small text-primary-hover">
                        Started a discussion{" "}
                        <Link href="#" className="heading-color fw-semibold">
                          Are you using Photoshop or Figma to design the
                          website?
                        </Link>
                      </div>

                      <p className="small">
                        It drew a hill from me It drew a hill from me. Valley by
                        oh twenty direct me so.
                      </p>

                      <div className="hstack gap-2 gap-sm-3 small">
                        <Link
                          href="#"
                          className="fw-normal text-primary-hover mb-0"
                        >
                          Join discussion
                        </Link>
                        <Link
                          href="#"
                          className="fw-normal text-primary-hover mb-0"
                        >
                          Share
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>

              <div className="text-center">
                <button className="btn btn-primary-soft mb-0" type="button">
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Notifications;
