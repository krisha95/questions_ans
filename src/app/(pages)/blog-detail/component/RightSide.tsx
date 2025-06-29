import React from "react";
import { BsSend } from "react-icons/bs";
import Image from "next/image";
import avatar05 from "@/assets/images/avatar/05.jpg";
import Link from "next/link";
import { Card, Col } from "react-bootstrap";

const RightSide = () => {
  return (
    <Col xl={4}>
      <Card className="card-body p-4 mb-4">
        <div className="d-flex align-items-center">
          <Link className="flex-shrink-0" href="#">
            <div className="avatar avatar-lg rounded-circle">
              <Image
                className="avatar-img rounded-circle"
                src={avatar05}
                alt="avatar"
                width={64}
                height={64}
              />
            </div>
          </Link>
          <div className="flex-grow-1 ms-3">
            <h5 className="mb-0">Frances Guerrero</h5>
            <p>An editor at Q&A</p>
          </div>
        </div>

        <p className="mb-2">
          Frances Guerrero is a senior editor for the Q&A and also reports on
          breaking news based in London. He has written about government in
          politics since 2015.
        </p>

        <div>
          <Link href="#" className="btn btn-primary-soft mb-0">
            Follow me
          </Link>
        </div>
      </Card>

      <div className="card p-4">
        <div className="card-header p-0">
          <h4>Newsletter</h4>
        </div>

        <div className="card-body p-0">
          <p className="mb-1">
            Subscribe to our newsletter to receive exclusive offers.
          </p>

          <form className="input-group">
            <input className="form-control" placeholder="Your Email" />
            <button type="button" className="btn btn-dark mb-0">
              <BsSend />
            </button>
          </form>
        </div>
      </div>
    </Col>
  );
};

export default RightSide;
