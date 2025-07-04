"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, Col, Row } from "react-bootstrap";
import { BsChatSquareDots, BsFillPatchCheckFill } from "react-icons/bs";

import ad2 from "@/assets/images/advertisement/02.jpg";
import avatar2 from "@/assets/images/avatar/02.jpg";
import avatar3 from "@/assets/images/avatar/03.jpg";
import avatar5 from "@/assets/images/avatar/05.jpg";
import avatar9 from "@/assets/images/avatar/09.jpg";

const trendingQuestions = [
  {
    title: "Product Subtract Button is not working perfectly ecommerce app?",
    link: "/que-ans/detail-minimal",
    answers: 4,
  },
  {
    title: "What can I do to add this count, and make the right data frame?",
    link: "/que-ans/detail-minimal",
    answers: 10,
  },
  {
    title: "What is the importance of customer feedback in business?",
    link: "/que-ans/detail-minimal",
    answers: 5,
  },
  {
    title: "Explain the concept of object-oriented programming (OOP).",
    link: "/que-ans/detail-minimal",
    answers: 8,
  },
  {
    title: "How does digital marketing impact business growth?",
    link: "/que-ans/detail-minimal",
    answers: 11,
  },
];

const members = [
  {
    name: "Lori Stevens",
    avatar: avatar9,
    gold: 5,
    silver: 15,
    bronze: 351,
    questions: 52,
    points: 912,
    verified: true,
  },
  {
    name: "Dennis Barrett",
    avatar: avatar2,
    gold: 25,
    silver: 35,
    bronze: 1200,
    questions: 18,
    points: 313,
  },
  {
    name: "Billy Vasquez",
    avatar: avatar3,
    gold: 0,
    silver: 35,
    bronze: 102,
    questions: 9,
    points: 102,
  },
  {
    name: "Frances Guerrero",
    avatar: avatar5,
    gold: 45,
    silver: 200,
    bronze: 3152,
    questions: 51,
    points: 986,
    verified: true,
  },
];

const tags = [
  "Computer",
  "Android",
  "php",
  "JAVA",
  "sql",
  "Design",
  "Life",
  "Javascript",
];

const RightSideBar = () => {
  return (
    <Col xl={4} xxl={3}>
      <Row className="g-4">
        <Col md={6} xl={12}>
          <Card className="p-3">
            <Card.Header className="border-0 p-2">
              <h5 className="card-title mb-0">Trending Questions</h5>
            </Card.Header>
            <Card.Body className="p-2">
              {trendingQuestions.map((q, idx) => (
                <div
                  key={idx}
                  className={`pb-3 mb-3 ${idx !== trendingQuestions.length - 1 ? "border-bottom" : ""
                    }`}
                >
                  <h6 className="mb-2 fw-normal">
                    <Link href={q.link}>{q.title}</Link>
                  </h6>
                  <p className="small mb-0">
                    <BsChatSquareDots className="me-1" />
                    {q.answers.toString().padStart(2, "0")} Answers
                  </p>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} xl={12}>
          <Card className="p-3">
            <Card.Header className="border-0 p-2 mb-2">
              <h4 className="card-title mb-0">Top Members</h4>
            </Card.Header>
            <Card.Body className="p-2">
              {members.map((m, idx) => (
                <div key={idx}>
                  <div className="d-flex mb-3">
                    <div className="avatar">
                      <Image
                        src={m.avatar}
                        alt="avatar"
                        width={40}
                        height={40}
                        className="avatar-img rounded-circle"
                      />
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-0 fw-bold">
                        <Link href="/my-profile">{m.name}</Link>
                        {m.verified && (
                          <BsFillPatchCheckFill className="text-info ms-2" />
                        )}
                      </h6>
                      <ul className="nav nav-achievement-divider small">
                        {m.gold > 0 && (
                          <li className="nav-item dote-gold">{m.gold}</li>
                        )}
                        {m.silver > 0 && (
                          <li className="nav-item dote-silver">{m.silver}</li>
                        )}
                        {m.bronze > 0 && (
                          <li className="nav-item dote-bronze">{m.bronze}</li>
                        )}
                      </ul>
                      <div className="hstack gap-3 flex-wrap small mt-1">
                        <Link href="#" className="text-primary-hover mb-0">
                          {m.questions} Questions
                        </Link>
                        <Link href="#" className="text-primary-hover mb-0">
                          {m.points} Points
                        </Link>
                      </div>
                    </div>
                  </div>
                  {idx !== members.length - 1 && <hr className="mt-0" />}
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} xl={12}>
          <Card className="bg-transparent">
            <Link href="#" className="position-relative d-block">
              <Image
                src={ad2}
                alt="Ad"
                width={500}
                height={200}
                className="card-img"
                style={{ objectFit: "cover" }}
              />
              <div className="card-img-overlay">
                <h5 className="card-title text-white">Advertisement</h5>
              </div>
            </Link>
            <div className="text-end text-body smaller mt-1">
              ads via{" "}
              <Link href="#" className="text-primary-hover">
                <u>Bootstrap</u>
              </Link>
            </div>
          </Card>
        </Col>

        <Col md={6} xl={12}>
          <Card className="p-3">
            <Card.Header className="border-0 p-2">
              <h4 className="card-title mb-0">Trending tags</h4>
            </Card.Header>
            <Card.Body className="p-2">
              <ul className="list-inline mb-0 g-3">
                {tags.map((tag, idx) => (
                  <li className="list-inline-item" key={idx}>
                    <input
                      type="checkbox"
                      className="btn-check"
                      id={`tag-${idx}`}
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-xs btn-light"
                      htmlFor={`tag-${idx}`}
                    >
                      {tag}
                    </label>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Col>
  );
};

export default RightSideBar;
