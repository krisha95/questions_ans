"use client";
import avatar9 from "@/assets/images/avatar/09.jpg";
import Image from "next/image";
import Link from "next/link";
import { Badge, Card, Dropdown, DropdownDivider, DropdownItem, DropdownMenu, DropdownToggle, Stack } from "react-bootstrap";
import {
  BsBookmark,
  BsCaretDownFill,
  BsCaretUpFill,
  BsChatLeft,
  BsClockHistory,
  BsEye,
  BsFlag,
  BsShare,
  BsSlashCircle,
  BsThreeDots,
  BsXCircle,
} from "react-icons/bs";
import { FaFire } from "react-icons/fa";

const QuestionCart = () => {
  return (
    <Card className="p-0 z-index-9">
      <div className="d-flex align-items-start">
        <div className="user-vote w-50px w-sm-80px">
          <div className="p-3">
            <div
              className="btn-group-vertical align-items-center d-flex"
              role="group"
            >
              <input
                type="radio"
                className="btn-check"
                name="vote1"
                id="btnradioT1"
              />
              <label className="btn btn-vote mb-0" htmlFor="btnradioT1">
                <BsCaretUpFill className="fs-5" />
              </label>

              <h6 className="mb-0 px-2 vote-count">145</h6>

              <input
                type="radio"
                className="btn-check"
                name="vote1"
                id="btnradioT2"
              />
              <label className="btn btn-vote mb-0" htmlFor="btnradioT2">
                <BsCaretDownFill className="fs-5" />
              </label>
            </div>
          </div>
        </div>

        <div className="vr"></div>

        <Card.Body className="p-3">
          <div className="d-flex justify-content-between mb-3 mb-sm-2">
            <Stack direction="horizontal" gap={2} className="flex-wrap">
              <Badge bg="dark">Programmer</Badge>
              <Badge bg="danger">
                <FaFire className="me-2" />
                Popular question
              </Badge>
            </Stack>

            <Dropdown align="end">
              <DropdownToggle
                as="a"
                href="#"
                className="btn btn-icon btn-sm btn-light mb-0 popup-after "
              >
                <BsThreeDots />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="#">
                  <BsClockHistory className="me-2" /> Answer later
                </DropdownItem>
                <DropdownItem href="#">
                  <BsBookmark className="me-2" /> Save post
                </DropdownItem>
                <DropdownItem href="#">
                  <BsXCircle className="me-2" /> Hide post
                </DropdownItem>
                <DropdownItem href="#">
                  <BsSlashCircle className="me-2" /> Block
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="#">
                  <BsFlag className="me-2" /> Report post
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>

          <h3 className="card-title mb-2">
            What is the difference between a compiler and an interpreter?
          </h3>
          <p className="mb-2">
            A compiler translates the entire source code into machine code
            before execution, while an interpreter translates and executes the
            code line by line. Object-oriented programming is a programming
            paradigm that organizes code into.
          </p>

          <div className="d-sm-flex justify-content-sm-between">
            <div className="d-flex flex-wrap gap-2 mt-2 mb-3 mb-sm-0">
              <Link href="#" className="badge bg-light text-body">
                Python
              </Link>
              <Link href="#" className="badge bg-light text-body">
                Biopython
              </Link>
              <Link href="#" className="badge bg-light text-body">
                JAVA
              </Link>
            </div>
            <small>Asked: 05 Nov 2024</small>
          </div>

          <div className="d-sm-flex justify-content-sm-between align-items-center mt-4">
            <div className="d-flex align-items-center mb-3 mb-sm-0">
              <div className="avatar avatar-xs">
                <Image
                  src={avatar9}
                  alt="avatar"
                  className="avatar-img rounded-circle"
                  width={32}
                  height={32}
                />
              </div>
              <h6 className="mb-0 ms-2">
                <Link href="#">Lori Stevens</Link>
              </h6>
            </div>

            <ul className="nav nav-divider align-items-center small">
              <li className="nav-item">
                <Link href="#" className="text-primary-hover p-0 mb-0">
                  <BsChatLeft className="me-1" /> 05 Answers
                </Link>
              </li>
              <li className="nav-item">
                <span>
                  <BsEye className="me-1" /> 521 Views
                </span>
              </li>
              <li className="nav-item">
                <Link href="#" className="text-primary-hover p-0 mb-0">
                  <BsShare className="me-1" /> Share
                </Link>
              </li>
            </ul>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
};

export default QuestionCart;
