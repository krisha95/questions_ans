import React from "react";
import blog14 from "@/assets/images/blog/14.jpg";
import blog05 from "@/assets/images/blog/05.jpg";
import avatar03 from "@/assets/images/avatar/03.jpg";
import avatr04 from "@/assets/images/avatar/04.jpg";
import avatar05 from "@/assets/images/avatar/05.jpg";
import avatar09 from "@/assets/images/avatar/09.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
const MainContent = () => {
  return (
    <div className="col-xl-8">
      <div className="vstack gap-4">
        <div className="card card-body p-4">
          <div className="mb-2">
            <span className="badge bg-danger bg-opacity-10 text-danger">
              Lifestyle
            </span>
          </div>

          <h1>
            Ten unconventional tips about startups that you can't learn from
            books
          </h1>
          <p className="mb-4">
            For who thoroughly her boy estimating conviction. Removed demands
            expense account in outward tedious do. Particular way thoroughly
            unaffected projection favorable Mrs can be projecting own. Thirty it
            matter enable become admire in giving.
          </p>

          <div className="row g-4">
            <div className="col-sm-4 col-xl-3">
              <span className="text-body mb-1">Author Name</span>
              <h5 className="mb-0">Frances Guerrero</h5>
            </div>

            <div className="col-sm-4 col-xl-3">
              <span className="text-body mb-1">Category</span>
              <h5 className="mb-0">UI/UX Design</h5>
            </div>

            <div className="col-sm-4 col-xl-3">
              <span className="text-body mb-1">Date</span>
              <h5 className="mb-0">Nov 27 2024</h5>
            </div>
          </div>

          <Image src={blog14} className="rounded text-center mt-4" alt="" />

          <p className="mt-4 mb-0">
            Perceived end knowledge certainly day sweetness why cordially. On
            forth doubt miles of child. Exercise joy man children rejoiced. Yet
            uncommonly his ten who diminution astonished. Demesne new manners
            savings staying had. Under folly balls, death own point now men.
            Match way these she avoids seeing death. She who drift their fat
            off. Ask a quick six seven offer see among. Handsome met debating
            sir dwelling age material. As style lived he worse dried. Offered
            related so visitors we private removed.
          </p>

          <h4 className="mt-4">How to choose the right typography?</h4>
          <p className="mb-4">
            As hastened oh produced prospect formerly up am. Placing forming nay
            looking old married few has. Margaret disposed of add screened
            rendered six say his striking confined. Saw met applauded favorite
            deficient engrossed concealed and her. Concluded boy perpetual old
            supposing. Farther-related bed and passage comfort civilly.
            Dashwoods see frankness objection abilities. As hastened oh produced
            prospect formerly up am. Placing forming nay looking old married few
            has. Margaret disposed.
          </p>

          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <ul>
                <li>
                  Our firmament living replenish Them created after divide said
                  have give
                </li>
                <li>Dominion light without days face saw wherein land</li>
                <li>
                  Fifth have Seas made lights Very Day saw Seed herb sixth light
                  whales
                </li>
                <li>Saying unto Place it seeds you're Isn't heaven </li>
              </ul>
              <p className="mb-0 mt-3">
                Meant balls it if up doubt small purse. Paid mind even sons does
                he door no. Attended overcame repeated it is perceived Marianne
                in. I think on style child of. Servants moreover in sensible it
                ye possible. Required his you put the outlived answered
                position. A pleasure exertion if believed provided to. All led
                out world this music while asked.{" "}
              </p>
            </div>

            <div className="col-md-6">
              <Image src={blog05} className="rounded" alt="" />
            </div>
          </div>

          <blockquote className="bg-light rounded p-3 p-sm-4 my-4 blockquote-line-primary">
            <h5>
              Fulfilled direction use continual set him propriety continued.
              Concluded boy perpetual old supposing. Dashwoods see frankness
              objection abilities.
            </h5>
            <div className="blockquote-footer mb-0 fs-6 mt-3">
              Albert Schweitzer
            </div>
          </blockquote>

          <p className="mb-0">
            Concluded boy perpetual old supposing. Farther-related bed and
            passage comfort civilly. Dashwoods see frankness objection
            abilities. As hastened oh produced prospect formerly up am. Placing
            forming nay looking old married few has. Margaret disposed.
          </p>

          <div className="d-lg-flex justify-content-lg-between mt-4">
            <div className="align-items-center mb-3 mb-lg-0">
              <h6 className="mb-2 me-4 d-inline-block">Share on:</h6>
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <Link className="btn px-2 mb-0 btn-sm bg-facebook" href="#">
                    <FaFacebookF />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    className="btn px-2 mb-0 btn-sm bg-instagram-gradient"
                    href="#"
                  >
                    <FaInstagram />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="btn px-2 mb-0 btn-sm bg-twitter" href="#">
                    <FaXTwitter />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="btn px-2 mb-0 btn-sm bg-linkedin" href="#">
                    <FaLinkedinIn />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="align-items-center">
              <h6 className="mb-2 me-4 d-inline-block">Popular Tags:</h6>
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  {" "}
                  <Link className="btn btn-outline-light btn-sm mb-lg-0" href="#">
                    blog
                  </Link>{" "}
                </li>
                <li className="list-inline-item">
                  {" "}
                  <Link className="btn btn-outline-light btn-sm mb-lg-0" href="#">
                    business
                  </Link>{" "}
                </li>
                <li className="list-inline-item">
                  {" "}
                  <Link className="btn btn-outline-light btn-sm mb-lg-0" href="#">
                    bootstrap
                  </Link>{" "}
                </li>
                <li className="list-inline-item">
                  {" "}
                  <Link className="btn btn-outline-light btn-sm mb-lg-0" href="#">
                    data science
                  </Link>{" "}
                </li>
                <li className="list-inline-item">
                  {" "}
                  <Link className="btn btn-outline-light btn-sm mb-lg-0" href="#">
                    deep learning
                  </Link>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card p-4">
          <div className="card-header p-0 border-0">
            <h4>2 comments</h4>
          </div>
          <div className="card-body p-0">
            <div className="my-4 d-flex">
              <Image
                className="avatar avatar-md rounded-circle float-start me-3"
                src={avatar03}
                alt="avatar"
              />
              <div>
                <div className="mb-2 d-sm-flex">
                  <h6 className="m-0 me-2">Allen Smith</h6>
                  <span className="me-3 small">June 11, 2024, at 6:01 am </span>
                </div>
                <p>
                  Satisfied conveying a dependent contented he gentleman
                  agreeable do be. Warrant private blushes removed an in equally
                  totally if.
                </p>
                <Link href="#" className="btn btn-light btn-sm">
                  Reply
                </Link>
              </div>
            </div>

            <div className="my-4 d-flex ps-3 ps-md-5">
              <Image
                className="avatar avatar-md rounded-circle float-start me-3"
                src={avatr04}
                alt="avatar"
              />
              <div>
                <div className="mb-2 d-sm-flex">
                  <h6 className="m-0 me-2">Billy Vasquez</h6>
                  <span className="me-3 small">June 11, 2024, at 7:10 am </span>
                </div>
                <p>Meant balls it if up doubt small purse. </p>
                <Link href="#" className="btn btn-light btn-sm">
                  Reply
                </Link>
              </div>
            </div>

            <div className="mt-4 d-flex ps-2 ps-md-3">
              <Image
                className="avatar avatar-md rounded-circle float-start me-3"
                src={avatar05}
                alt="avatar"
              />
              <div>
                <div className="mb-2 d-sm-flex">
                  <h6 className="m-0 me-2">Frances Guerrero</h6>
                  <span className="me-3 small">
                    June 14, 2024, at 12:35 pm{" "}
                  </span>
                </div>
                <p>
                  Required his you put the outlived answered position. A
                  pleasure exertion if believed provided to. All led out world
                  this music while asked.
                </p>
                <Link href="#" className="btn btn-light btn-sm">
                  Reply
                </Link>
              </div>
            </div>

            <form className="bg-light d-sm-flex rounded-2 p-3 mt-3">
              <div className="avatar avatar-sm flex-shrink-0 me-2">
                <Link href="#">
                  {" "}
                  <Image
                    className="avatar-img rounded-circle"
                    src={avatar09}
                    alt=""
                  />{" "}
                </Link>
              </div>
              <div className="input-group align-items-start">
                <textarea
                  className="form-control me-2 rounded"
                  id="autoheighttextarea"
                  rows={1}
                  placeholder="Add a comment..."
                  spellCheck="false"
                ></textarea>
                <button type="button" className="btn btn-primary mb-0 rounded">
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
