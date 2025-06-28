"use client";
import avatar03 from "@/assets/images/avatar/03.jpg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Card, Col } from "react-bootstrap";
import {
    BsCameraReelsFill,
    BsEmojiSmileFill,
    BsFillImageFill,
} from "react-icons/bs";
import PostModal from "./PostModal";

const AddPost = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Card className="card-body p-4">
                <div className="d-md-flex justify-content-between mb-3">
                    <ul className="nav nav-pills hstack gap-2 fw-normal">
                        <li className="nav-item avatar">
                            <Link href="#">
                                <Image
                                    className="avatar-img rounded-circle"
                                    src={avatar03}
                                    alt=""
                                />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button
                                onClick={() => setShowModal(true)}
                                className="nav-link bg-light py-1 px-2 mb-0 border-0"
                            >
                                <BsFillImageFill className="text-success pe-2" size={24} />
                                Photo
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                onClick={() => setShowModal(true)}
                                className="nav-link bg-light py-1 px-2 mb-0 border-0"
                            >
                                <BsCameraReelsFill className="text-info pe-2" size={24} />
                                Video
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                onClick={() => setShowModal(true)}
                                className="nav-link bg-light py-1 px-2 mb-0 border-0"
                            >
                                <BsEmojiSmileFill className="text-warning pe-2" size={24} />
                                Feeling /Activity
                            </button>
                        </li>
                    </ul>

                    <Col md={2} className="mt-3 mt-md-0">
                        <select
                            className="form-select"
                            defaultValue="PB"
                        >
                            <option value="PB">Public</option>
                            <option value="PV">Friends</option>
                            <option value="OM">Only me</option>
                            <option value="CU">Custom</option>
                        </select>
                    </Col>
                </div>

                <form className="w-100">
                    <textarea
                        className="form-control bg-transparent pe-4 fs-5 lh-1 border-0"
                        rows={3}
                        placeholder="Share your question..."
                        spellCheck="false"
                    ></textarea>
                    <div className="text-end">
                        <button type="button" className="btn btn-success mb-0 mt-2">
                            Post
                        </button>
                    </div>
                </form>
            </Card>

            <PostModal
                show={showModal}
                onHide={() => setShowModal(false)}
                placeholder="What's on your mind?"
            />
        </>
    );
};

export default AddPost;
