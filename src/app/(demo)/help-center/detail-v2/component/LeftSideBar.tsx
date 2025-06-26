"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Col } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import {
  BsQuestionCircle,
  BsChevronDown,
  BsChevronUp,
  BsDashLg,
  BsCardText,
  BsChatLeftQuote,
  BsBoxArrowInRight,
  BsPower,
  BsLock,
  BsFileText,
  BsGear,
  BsLifePreserver,
} from "react-icons/bs";

const helpDeskItems = [
  "Getting Started",
  "Installation",
  "User Accounts",
  "Advanced Usage",
  "Security",
  "Integration",
];

const navItems = [
  { label: "Forum", icon: <BsCardText /> },
  { label: "Forum Category", icon: <BsCardText /> },
  { label: "Forum Detail", icon: <BsCardText /> },
  { label: "Blog", icon: <BsChatLeftQuote /> },
  { label: "Blog Detail", icon: <BsChatLeftQuote /> },
  { label: "Sign up", icon: <BsBoxArrowInRight /> },
  { label: "Sign in", icon: <BsPower /> },
  { label: "Forgot password", icon: <BsLock /> },
  { divider: true },
  { label: "Documentation", icon: <BsFileText /> },
  { label: "Changelog", icon: <BsGear /> },
  { label: "Support", icon: <BsLifePreserver /> },
];

const LeftSideBar = () => {
  const [openHelpDesk, setOpenHelpDesk] = useState(true);

  const toggleHelpDesk = () => setOpenHelpDesk(!openHelpDesk);

  return (
    <Col xl={3}>
      <nav className="navbar navbar-light navbar-expand-xl mx-0">
        <div className="p-3 p-xxl-0 w-100">
          <div className="card border p-0">
            <div className="card-header border-bottom">
              <h5 className="mb-0">Explore topics</h5>
            </div>

            <div className="card-body">
              <ul className="nav nav-link-sidebar nav-sidebar-bg-light flex-column gap-2">

                <li className="nav-item">
                  <button
                    type="button"
                    className="nav-link d-flex align-items-center w-100 bg-light rounded justify-content-between"
                    onClick={toggleHelpDesk}
                  >
                    <span className="d-flex align-items-center">
                      <BsQuestionCircle className="me-2" />
                      Help Desk
                    </span>
                    {openHelpDesk ? <BsChevronUp /> : <BsChevronDown />}
                  </button>

                  <Collapse in={openHelpDesk}>
                    <ul className="nav sidebar-submenu flex-column flex-nowrap">
                      {helpDeskItems.map((item, index) => (
                        <li className="nav-item" key={index}>
                          <Link className="nav-link" href="#">
                            <BsDashLg className="me-2" />
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Collapse>
                </li>

                {navItems.map((item, idx) =>
                  item.divider ? (
                    <li className="nav-item" key={idx}>
                      <hr className="my-1" />
                    </li>
                  ) : (
                    <li className="nav-item" key={idx}>
                      <Link className="nav-link" href="#">
                        {item.icon && React.cloneElement(item.icon, { className: "me-2" })}
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Col>
  );
};

export default LeftSideBar;
