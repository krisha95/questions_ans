"use client";
import React from "react";
import Image from "next/image";
import { Card, Button, Dropdown, Form, InputGroup } from "react-bootstrap";
import {
  BsCheckCircleFill,
  BsCaretUpFill,
  BsThreeDots,
  BsBookmark,
  BsHeart,
  BsFlag,
} from "react-icons/bs";
import {
  FaShareNodes,
  FaFacebookF,
  FaWhatsapp,
  FaXTwitter,
  FaLinkedinIn,
  FaReply,
} from "react-icons/fa6";
import avatar03 from "@/assets/images/avatar/03.jpg";
import avatar04 from "@/assets/images/avatar/04.jpg";
import avatar05 from "@/assets/images/avatar/05.jpg";
import avatar09 from "@/assets/images/avatar/09.jpg";

const AnswerDetail = () => {
  return (
    <Card className="p-0">
      <div className="card-header bg-success">
        <h6 className="text-white mb-0">
          <BsCheckCircleFill className="me-2" /> Best answer
        </h6>
      </div>

      <Card.Body className="p-4">
        <div className="d-flex align-items-center mb-3">
          <div className="avatar flex-shrink-0">
            <Image
              src={avatar03}
              alt="avatar"
              className="avatar-img rounded-circle"
              width={40}
              height={40}
            />
          </div>
          <div className="ms-2">
            <h6 className="mb-0">
              <a href="#">Samuel Bishop</a>
            </h6>
            <ul className="nav nav-divider small">
              <li className="nav-item">Digital Marketing Ninja</li>
              <li className="nav-item">24 November</li>
            </ul>
          </div>
        </div>

        <p className="mb-2">
          Supposing so be resolving breakfast am or perfectly. Is drew am hill
          from me. Valley by oh twenty direct me so. Departure defective
          arranging rapturous did believe him all had supported...
        </p>
        <p className="mb-0">
          I have never used this package, but it seems like it could be as
          simple a...
        </p>

        <div className="d-grid">
          <pre className="my-3">
            <code className="language-markup">
              {`  
                 <ul class="avatar-group">
                        <li class="avatar">
                            <img class="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
                        </li>
                        <li class="avatar">
                            <img class="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" />
                        </li>
                        <li class="avatar">
                            <div class="avatar-img rounded-circle bg-primary">
                            <i class="fas fa-plus text-white position-absolute top-50 start-50 translate-middle"></i>
                            </div>
                        </li>
                        </ul>`}
            </code>
          </pre>
        </div>

        <div className="hstack gap-2 flex-wrap align-items-start mt-3">
          <div className="border px-2 py-0 rounded-1 d-flex align-items-center gap-1">
            <input
              type="radio"
              className="btn-check"
              name="vote10"
              id="btnradioT10"
            />
            <label className="btn btn-vote mb-0" htmlFor="btnradioT10">
              <BsCaretUpFill className="fs-5" />
            </label>
            <span className="fw-normal">5</span>
          </div>

          <Button size="sm" variant="light">
            Comment (1)
          </Button>

          <Dropdown drop="start" className="ms-sm-auto">
            <Dropdown.Toggle
              as={Button}
              size="sm"
              variant="light"
              
            >
              <FaShareNodes className="me-2" /> Share
            </Dropdown.Toggle>
            <Dropdown.Menu className="shadow px-3 rounded">
              <h6>Share a link to this question</h6>
              <InputGroup className="mt-2">
                <Form.Control
                  size="sm"
                  type="text"
                  defaultValue="https://q&a.com//556dd//gmail"
                />
                <Button size="sm" variant="primary">
                  Copy
                </Button>
              </InputGroup>
              <ul className="list-inline mt-2 mb-0">
                <li className="list-inline-item">
                  <Button size="sm" className="bg-facebook">
                    <FaFacebookF />
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button size="sm" className="bg-whatsapp">
                    <FaWhatsapp />
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button size="sm" className="bg-twitter">
                    <FaXTwitter />
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button size="sm" className="bg-linkedin">
                    <FaLinkedinIn />
                  </Button>
                </li>
              </ul>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="flex-shrink-0">
            <Dropdown.Toggle
              as={Button}
              size="sm"
              variant="light"
              className="popup-after"
            >
              <BsThreeDots />
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              <Dropdown.Item>
                <BsBookmark className="me-2" /> Save post
              </Dropdown.Item>
              <Dropdown.Item>
                <BsHeart className="me-2" /> Thanks
              </Dropdown.Item>
              <Dropdown.Item>
                <BsFlag className="me-2" /> Report post
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <ul className="comment-wrap list-unstyled mt-4 mb-0">
          <li className="comment-item">
            <div className="d-flex mb-4">
              <div className="avatar avatar-sm flex-shrink-0">
                <Image
                  src={avatar05}
                  alt="avatar"
                  className="avatar-img rounded-circle"
                  width={32}
                  height={32}
                />
              </div>
              <div className="ms-2">
                <h6 className="mb-0">
                  <a href="#">Frances Guerrero</a>
                </h6>
                <div className="hstack gap-4 flex-wrap">
                  <small>8 hour ago</small>
                  <a href="#" className="btn btn-sm btn-link p-0">
                    <FaReply className="me-1" /> Reply
                  </a>
                </div>
                <p className="heading-color mb-0 mt-2">
                  What are you trying to get?
                </p>
              </div>
            </div>

            <ul className="list-unstyled ms-4">
              <li className="comment-item">
                <div className="d-flex">
                  <div className="avatar avatar-sm flex-shrink-0">
                    <Image
                      src={avatar04}
                      alt="avatar"
                      className="avatar-img rounded-circle"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="ms-2">
                    <h6 className="mb-0">
                      <a href="#">Dennis Barrett</a>
                    </h6>
                    <div className="hstack gap-4 flex-wrap">
                      <small>10 hour ago</small>
                      <a href="#" className="btn btn-sm btn-link p-0">
                        <FaReply className="me-1" /> Reply
                      </a>
                    </div>
                    <p className="heading-color mb-0 mt-2">
                      You can also use the whenever gem to create and manage
                      your crontab on deploys.
                    </p>
                  </div>
                </div>
              </li>
            </ul>

            <a href="#" className="btn btn-sm btn-link mb-0 p-0 mt-2">
              Load more replies...
            </a>
          </li>
        </ul>

        <Form className="bg-light d-sm-flex rounded-2 p-3 mt-3">
          <div className="avatar avatar-sm flex-shrink-0 me-2">
            <Image
              src={avatar09}
              alt="avatar"
              className="avatar-img rounded-circle"
              width={32}
              height={32}
            />
          </div>
          <InputGroup>
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="Add a comment..."
            />
            <Button variant="primary" className="mb-0 rounded">
              Post
            </Button>
          </InputGroup>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AnswerDetail;
