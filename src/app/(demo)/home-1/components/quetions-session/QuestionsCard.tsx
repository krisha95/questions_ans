"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { JSX, useState } from "react";
import { Col, Dropdown, Row } from "react-bootstrap";
import { BiBookmark, BiDotsHorizontal, BiMessage } from "react-icons/bi";
import {
    BsFillBookmarkFill,
    BsFillEyeFill,
    BsFillHandThumbsUpFill,
    BsFillPatchCheckFill,
    BsHandThumbsDownFill,
} from "react-icons/bs";

const CustomToggle = React.forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  }
>(({ children, onClick }, ref) => (
  <div
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    className="btn btn-sm btn-icon btn-light mb-0"
  >
    {children}
  </div>
));
CustomToggle.displayName = "CustomToggle";

interface HoverDetail {
  icon: JSX.Element;
  label: string;
}

interface DropdownOption {
  icon: JSX.Element;
  text: string;
  href?: string;
}

interface Props {
  avatar: StaticImageData;
  name: string;
  join: string;
  role: string;
  location: string;
  question: string;
  date: string;
  answerCount: string;
  views: string;
  content: string;
  tags: string[];
  showCheckIcon?: boolean;
  voteCount?: number;
  hoverDetails: HoverDetail[];
  dropdownItems: DropdownOption[];
}

const QuestionsCard = ({
  avatar,
  name,
  join,
  role,
  question,
  date,
  answerCount,
  views,
  content,
  tags,
  showCheckIcon = false,
  voteCount = 0,
  hoverDetails,
  dropdownItems,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const voteId = name.split(" ").join("_");

  return (
    <div className="card dropdown-hover p-4 position-relative">
      <div className="position-absolute end-0 top-0 p-3">
        <button
          onClick={() => setIsBookmarked(!isBookmarked)}
          className="btn btn-sm btn-round btn-light mb-0 ms-2 ms-sm-3"
        >
          {isBookmarked ? (
            <BsFillBookmarkFill className="text-primary" />
          ) : (
            <BiBookmark />
          )}
        </button>
      </div>

      <Row className="g-3 g-lg-0">
        <Col xs={3} md={2}>
          <div
            className="d-block mb-2 position-relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link href="#" className="avatar avatar-lg position-relative">
              <Image
                className="avatar-img rounded-circle"
                src={avatar}
                alt="avatar"
                width={60}
                height={60}
              />
              {showCheckIcon && (
                <span className="position-absolute top-100 start-100 translate-middle ms-n2 mt-n3 bg-mode rounded-circle lh-1 h-20px">
                  <BsFillPatchCheckFill className="text-info fs-5" />
                </span>
              )}
            </Link>

            {/* Hover Dropdown */}
            {isHovered && (
              <div className="dropdown-menu dropdown-menu-size-sm px-3 py-4 show">
                <div className="d-flex align-items-center">
                  <div className="avatar flex-shrink-0 position-relative">
                    <Image
                      className="avatar-img rounded-circle"
                      src={avatar}
                      alt="avatar"
                      width={50}
                      height={50}
                    />
                    {showCheckIcon && (
                      <span className="position-absolute top-100 start-100 translate-middle ms-n1 mt-n3 bg-mode rounded-circle lh-1">
                        <BsFillPatchCheckFill className="text-info" />
                      </span>
                    )}
                  </div>
                  <div className="ms-3">
                    <h6 className="mb-0">
                      <Link href="#">{name}</Link>
                    </h6>
                    <small>Join: {join}</small>
                  </div>
                </div>

                {/* Hover List */}
                <ul className="list-group list-group-borderless small mb-0 mt-2">
                  {hoverDetails.map((item, idx) => (
                    <li key={idx} className="list-group-item d-flex mb-0 pt-0">
                      <span className="me-2">{item.icon}</span> {item.label}
                    </li>
                  ))}
                </ul>

                <div className="d-flex justify-content-between mt-2">
                  <button className="btn btn-sm btn-primary-soft mb-0">
                    15K Follow
                  </button>
                  <div className="hstack gap-2">
                    <button className="btn btn-sm btn-icon btn-light mb-0">
                      <BiMessage />
                    </button>
                    <Dropdown show={showDropdown} onToggle={setShowDropdown}>
                      <Dropdown.Toggle as={CustomToggle}>
                        <BiDotsHorizontal />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end min-w-auto shadow rounded">
                        {dropdownItems.map((item, idx) => (
                          <Dropdown.Item key={idx} href={item.href || "#"}>
                            {item.icon} {item.text}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Vote Buttons */}
          <div className="btn-group align-items-center" role="group">
            <input
              type="radio"
              className="btn-check"
              name={`vote_${voteId}`}
              id={`btnradio_${voteId}_1`}
              defaultChecked
            />
            <label
              className="btn btn-vote mb-0"
              htmlFor={`btnradio_${voteId}_1`}
            >
              <BsFillHandThumbsUpFill />
            </label>
            <h6 className="mb-0 px-2 vote-count">{voteCount}</h6>
            <input
              type="radio"
              className="btn-check"
              name={`vote_${voteId}`}
              id={`btnradio_${voteId}_2`}
            />
            <label
              className="btn btn-vote mb-0"
              htmlFor={`btnradio_${voteId}_2`}
            >
              <BsHandThumbsDownFill />
            </label>
          </div>
        </Col>

        {/* Right content */}
        <Col md={10}>
          <div className="card-body p-0">
            <h5 className="card-title mb-2 me-md-5">
              <Link href="/answer-detail">{question}</Link>
            </h5>
            <div className="d-flex align-items-center gap-2 flex-wrap mb-3">
              <span className="badge text-bg-dark">{role}</span>
              <small>Asked: {date}</small>
            </div>
            <p className="mb-0">{content}</p>
            <div className="hstack gap-2 mt-2">
              {tags.map((tag, idx) => (
                <Link key={idx} href="#" className="badge bg-light text-body">
                  {tag}
                </Link>
              ))}
            </div>
            <div className="hstack gap-3 mt-4 flex-wrap justify-content-end">
              <small>
                <BsFillEyeFill className="me-1" /> {views} views
              </small>
              <Link href="/answer-detail" className="btn btn-dark mb-0">
                {answerCount} Answers
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default QuestionsCard;
