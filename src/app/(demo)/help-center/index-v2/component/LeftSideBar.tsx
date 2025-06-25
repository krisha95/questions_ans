"use client";
import React, { JSX } from "react";
import { Accordion, Card, Nav } from "react-bootstrap";
import {
  BsQuestionCircle,
  BsCardText,
  BsChatLeftQuote,
  BsBoxArrowInRight,
  BsPower,
  BsLock,
  BsFileText,
  BsGear,
  BsLifePreserver,
  BsDashLg,
} from "react-icons/bs";

interface SubLink {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  icon: JSX.Element;
  href?: string;
  children?: SubLink[];
}

const navItems: NavItem[] = [
  {
    label: "Help Desk",
    icon: <BsQuestionCircle className="me-2" />,
    children: [
      { label: "Getting Started", href: "#" },
      { label: "Installation", href: "#" },
      { label: "User Accounts", href: "#" },
      { label: "Advanced Usage", href: "#" },
      { label: "Security", href: "#" },
      { label: "Integration", href: "#" },
    ],
  },
  { label: "Forum", icon: <BsCardText className="me-2" />, href: "#" },
  { label: "Forum Category", icon: <BsCardText className="me-2" />, href: "#" },
  { label: "Forum Detail", icon: <BsCardText className="me-2" />, href: "#" },
  { label: "Blog", icon: <BsChatLeftQuote className="me-2" />, href: "#" },
  {
    label: "Blog Detail",
    icon: <BsChatLeftQuote className="me-2" />,
    href: "#",
  },
  { label: "Sign up", icon: <BsBoxArrowInRight className="me-2" />, href: "#" },
  { label: "Sign in", icon: <BsPower className="me-2" />, href: "#" },
  { label: "Forgot password", icon: <BsLock className="me-2" />, href: "#" },
  { label: "Documentation", icon: <BsFileText className="me-2" />, href: "#" },
  { label: "Changelog", icon: <BsGear className="me-2" />, href: "#" },
  { label: "Support", icon: <BsLifePreserver className="me-2" />, href: "#" },
];

const LeftSideBar: React.FC = () => {
  return (
    <div className="col-xl-3">
      <nav className="navbar navbar-light navbar-expand-xl mx-0">
        <div
          className="offcanvas offcanvas-end p-3 p-xxl-0"
          tabIndex={-1}
          id="offcanvasNavbar"
        >
          <div className="offcanvas-header justify-content-end pt-0 pe-0">
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body p-0 d-block">
            <Card className="border p-0">
              <Card.Header className="border-bottom">
                <h5 className="mb-0">Explore topics</h5>
              </Card.Header>
              <Card.Body>
                <Nav className="flex-column gap-2 nav-link-sidebar nav-sidebar-bg-light">
                  {navItems.map((item, index) =>
                    item.children ? (
                      <Accordion defaultActiveKey="0" key={index}>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <div className="d-flex align-items-center">
                              {item.icon}
                              {item.label}
                            </div>
                          </Accordion.Header>
                          <Accordion.Body className="p-0">
                            <Nav className="flex-column">
                              {item.children.map((child, childIndex) => (
                                <Nav.Link
                                  className="ps-4 d-flex align-items-center"
                                  href={child.href}
                                  key={childIndex}
                                >
                                  <BsDashLg className="me-2" />
                                  {child.label}
                                </Nav.Link>
                              ))}
                            </Nav>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    ) : (
                      <Nav.Link
                        key={index}
                        href={item.href}
                        className="d-flex align-items-center"
                      >
                        {item.icon}
                        {item.label}
                      </Nav.Link>
                    )
                  )}

                  <li className="nav-item">
                    <hr className="my-1" />
                  </li>
                </Nav>
              </Card.Body>
            </Card>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LeftSideBar;
