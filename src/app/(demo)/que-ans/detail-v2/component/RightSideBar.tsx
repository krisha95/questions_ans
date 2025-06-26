"use client";
import React from "react";
import {
  Card,
  ListGroup,
  Button,
  Row,
  Col,
  ListGroupItem,
} from "react-bootstrap";
import Image from "next/image";
import avatar01 from "@/assets/images/avatar/01.jpg";
import avatar02 from "@/assets/images/avatar/02.jpg";
import adImage from "@/assets/images/advertisement/02.jpg";
import { BsFire, BsCheckCircleFill } from "react-icons/bs";
import Link from "next/link";

const RightSidebar = () => {
  return (
    <Col xl={3}>
      <Row className="g-4">
        <Col md={6} xl={12}>
          <Card className="card-body p-4">
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex justify-content-between align-items-center px-0 py-3 pt-0 mb-0">
                <span>Category:</span>
                <Link
                  href="#"
                  className="heading-color fw-normal text-primary-hover mb-0 d-flex align-items-center"
                >
                  <BsFire className="me-1" /> General
                </Link>
              </ListGroup.Item>

              <ListGroup.Item className="d-flex justify-content-between align-items-center px-0 py-3 mb-0">
                <span>Labels:</span>
                <Link
                  href="#"
                  className="heading-color fw-normal text-primary-hover mb-0"
                >
                  None yet
                </Link>
              </ListGroup.Item>

              <ListGroupItem className="d-flex justify-content-between align-items-center px-0 py-3 mb-0">
                <span>Participants:</span>
                <div className="d-flex gap-2 mb-0">
                  <Link href="#" className="avatar avatar-xs">
                    <Image
                      src={avatar01}
                      alt="avatar1"
                      className="avatar-img rounded-circle"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="#" className="avatar avatar-xs">
                    <Image
                      src={avatar02}
                      alt="avatar2"
                      className="avatar-img rounded-circle"
                      width={32}
                      height={32}
                    />
                  </Link>
                </div>
              </ListGroupItem>

              <ListGroup.Item className="d-flex justify-content-between align-items-center px-0 py-3 mb-0">
                <span>Answer by:</span>
                <h6 className="fw-normal mb-0 d-flex align-items-center">
                  <BsCheckCircleFill className="text-success me-1" /> Lori
                  Stevens
                </h6>
              </ListGroup.Item>

              <ListGroup.Item className="d-grid px-0 pb-0 pt-3 mb-0">
                <Button
                  size="sm"
                  variant="success"
                  className="mb-0 d-flex align-items-center justify-content-center gap-1"
                >
                  <BsCheckCircleFill /> Marked answer
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        <Col md={6} xl={12}>
          <Link href="#">
            <div className="card">
              <Image src={adImage} className="card-img" alt="" />
              <div className="card-img-overlay">
                <h5 className="card-title text-white">Advertisement</h5>
              </div>
            </div>
          </Link>
          <p className="text-end text-body smaller mt-1 mb-0">
            ads via{" "}
            <Link href="#" className="text-primary-hover">
              <u>Bootstrap</u>
            </Link>
          </p>
        </Col>
      </Row>
    </Col>
  );
};

export default RightSidebar;
