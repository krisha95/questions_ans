"use client"
import categoryImg from "@/assets/images/elements/category/11.svg";
import Image from 'next/image';
import { Button, Card, CardBody, CardFooter, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'react-bootstrap';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsFilePost, BsFlag, BsPersonPlusFill, BsShare, BsXOctagon } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";

const Technology = () => {
    return (

        <Card>
            <CardBody>
                <div className="d-md-flex align-items-start">
                    <div className="d-sm-flex align-items-center">
                        <div className="avatar avatar-lg mb-3 mb-sm-0">
                            <Image className="avatar-img" src={categoryImg} alt="" width={64} height={64} />
                        </div>
                        <div className="ms-sm-4">
                            <h1 className="h3 mb-2">Technology</h1>
                            <ul className="nav nav-divider heading-color">
                                <li className="nav-item"><BsPersonPlusFill className="me-2" />1.5M Followers</li>
                                <li className="nav-item"><BsFilePost className="me-2" />564 Total Post</li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex mt-3 mt-md-0 ms-md-auto">
                        <Button size="sm" variant="primary-soft" className="mb-0 me-2"><FaPlus className="me-2" />Follow</Button>
                        <Dropdown className="no-after-icon">
                            <DropdownToggle as="button" className="btn btn-sm btn-light btn-icon mb-0 popup-after" id="profileAction2">
                                <BiDotsHorizontalRounded />
                            </DropdownToggle>
                            <DropdownMenu align="end" className="min-w-auto" aria-labelledby="profileAction2">
                                <DropdownItem href="#"><BsShare className="me-2" />Share</DropdownItem>
                                <DropdownItem href="#"><BsXOctagon className="me-2" />Mute this category</DropdownItem>
                                <DropdownItem href="#"><BsFlag className="me-2" />Report</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </CardBody>
            <CardFooter className="py-0">
                <Nav variant="tabs" className="nav-bottom-line nav-responsive mb-0 border-0">
                    <NavItem>
                        <NavLink href="/category/post" >Posts</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/category/question" active>Questions</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/category/detail" >About</NavLink>
                    </NavItem>
                </Nav>
            </CardFooter>
        </Card>

    );
};

export default Technology;