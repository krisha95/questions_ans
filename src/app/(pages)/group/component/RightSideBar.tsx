import React from 'react';
import avatar09 from '@/assets/images/avatar/09.jpg';
import avatar08 from '@/assets/images/avatar/08.jpg';
import avatar07 from '@/assets/images/avatar/07.jpg';
import avatar06 from '@/assets/images/avatar/06.jpg';
import avatar05 from '@/assets/images/avatar/05.jpg';
import avatar04 from '@/assets/images/avatar/04.jpg';
import avatar03 from '@/assets/images/avatar/03.jpg';
import adImage from '@/assets/images/advertisement/02.jpg';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const users = [
  { name: 'Lori Stevens', points: 2465, image: avatar09, verified: true },
  { name: 'Dennis Barrett', points: 432, image: avatar08 },
  { name: 'Samuel Bishop', points: 215, image: avatar07 },
  { name: 'Carolyn Ortiz', points: 2568, image: avatar06, verified: true },
  { name: 'Amanda Reed', points: 1586, image: avatar05 },
  { name: 'Louis Ferguson', points: 925, image: avatar04 },
  { name: 'Larry Lawson', points: 568, image: avatar03 },
];

const RightSideBar = () => {
  return (
    <Col lg={4} xxl={3}>
      <Row className="g-4">
        <Col md={6} lg={12}>
          <div className="card p-3">
            <div className="card-header border-0 p-2">
              <h4 className="card-title mb-0">Highest points</h4>
            </div>

            <div className="card-body p-2">
              <div className="mb-3 choice-bg-light">
                <select
                  className="form-select form-select-sm js-choice"
                  data-placeholder-val="Sort by"
                  aria-label=".form-select-sm example"
                  data-search-enabled="false"
                >
                  <option>All</option>
                  <option>Development</option>
                  <option>Design</option>
                </select>
              </div>

              {users.map((user, index) => (
                <div key={index} className="d-flex justify-content-between align-items-center mb-2">
                  <div className="hstack gap-2">
                    <div className="avatar avatar-xs">
                      <Image className="avatar-img rounded-circle" src={user.image} alt="avatar" />
                    </div>
                    <h6 className="mb-0 fw-light">
                      <Link href="/my-profile">
                        {user.name}
                        {user.verified && (
                          <BsFillPatchCheckFill className="text-info ms-1 small" />
                        )}
                      </Link>
                    </h6>
                  </div>
                  <span>{user.points} pts</span>
                </div>
              ))}
            </div>

            <div className="card-footer p-2 pb-0 text-center">
              <Link href="#" className="btn btn-link p-0 mb-0">See more</Link>
            </div>
          </div>
        </Col>

        <Col md={6} xl={12}>
          <div className="card bg-transparent">
            <Link href="#" className="position-relative">
              <Image src={adImage} className="card-img" alt="Advertisement" />
              <div className="card-img-overlay">
                <h5 className="card-title text-white">Advertisement</h5>
              </div>
            </Link>
            <div className="text-end text-body smaller mt-1">
              ads via <a href="#" className="text-primary-hover"><u>Bootstrap</u></a>
            </div>
          </div>
        </Col>
        
        <Col lg={12} className="text-center">
          <ul className="nav justify-content-center">
            <li className="nav-item"><Link className="nav-link small" href="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link small" href="/index-ticket">Ticket</Link></li>
            <li className="nav-item"><Link className="nav-link small" href="#">Terms</Link></li>
            <li className="nav-item"><Link className="nav-link small" href="/index-forum">Forum</Link></li>
            <li className="nav-item"><Link className="nav-link small" href="/index-help-center">Help center</Link></li>
            <li className="nav-item"><Link className="nav-link small" href="/index-discussion">Discussion</Link></li>
            <li className="nav-item"><Link className="nav-link small" href="/blog">Blog</Link></li>
          </ul>
          <div className="text-primary-hover small my-2">
            Copyrights <a href="#" className="text-body">©{new Date().getFullYear()} Q&A</a>.
          </div>
        </Col>

      </Row>
    </Col>
  );
};

export default RightSideBar;
