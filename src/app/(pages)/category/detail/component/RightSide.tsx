import category02 from "@/assets/images/elements/category/02.svg";
import category06 from "@/assets/images/elements/category/06.svg";
import category12 from "@/assets/images/elements/category/12.svg";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Form, FormControl, Row } from 'react-bootstrap';
import { BsFilePost, BsPersonPlusFill } from "react-icons/bs";

const RightSide = () => {
    const likeCategories = [
        {
            img: category02,
            name: "Business & Finance",
            followers: "5.9K",
            posts: "109 Post last week",
        },
        {
            img: category06,
            name: "Law & Legal Issue",
            followers: "1K",
            posts: "15 Post last week",
        },
        {
            img: category12,
            name: "Language & Literature",
            followers: "3M",
            posts: "98 Post last week",
        },
    ];
    return (
        <Col lg={4} xxl={3}>
            <Row className="g-4">
                <Col sm={6} lg={12}>
                    <Form className="input-borderless">
                        <FormControl as="textarea" className="rounded-bottom-0" id="textareaBox" rows={7} spellCheck={false} placeholder="Ask a Question..." />
                        <div className="d-grid">
                            <Button className="btn btn-dark rounded-top-0" type="button">Post Now</Button>
                        </div>
                    </Form>
                </Col>
                <Col sm={6} lg={12}>
                    <Card className="p-0">
                        <CardHeader className="border-bottom">
                            <h5 className="card-title mb-0">Categories you may like</h5>
                        </CardHeader>
                        <CardBody>
                            {likeCategories.map((cat, idx) => (
                                <React.Fragment key={cat.name}>
                                    <div className="d-flex">
                                        <div className="avatar flex-shrink-0">
                                            <Image className="avatar-img" src={cat.img} alt="avatar" width={32} height={32} />
                                        </div>
                                        <div className="ms-3">
                                            <h6 className="mb-2"><a href="#">{cat.name}</a></h6>
                                            <div className="hstack gap-1 small flex-wrap">
                                                <Link href="#" className="text-primary-hover mb-0"><BsPersonPlusFill className="me-1" />{cat.followers} Followers</Link>
                                                <Link href="#" className="text-primary-hover mb-0"><BsFilePost className="me-1"></BsFilePost>{cat.posts}</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {idx !== likeCategories.length - 1 && <hr />}
                                </React.Fragment>
                            ))}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Col>
    )
}

export default RightSide