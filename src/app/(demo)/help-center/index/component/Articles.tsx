'use client'

import React from 'react'
import Image from 'next/image'
import {
    FaEye,
    FaComments,
    FaThumbsUp,
    FaSpinner,
} from 'react-icons/fa6'

// Avatar image imports
import avatar01 from '@/assets/images/avatar/01.jpg'
import avatar02 from '@/assets/images/avatar/02.jpg'
import avatar03 from '@/assets/images/avatar/03.jpg'
import avatar04 from '@/assets/images/avatar/04.jpg'
import avatar06 from '@/assets/images/avatar/06.jpg'
import avatar07 from '@/assets/images/avatar/07.jpg'
import avatar08 from '@/assets/images/avatar/08.jpg'
import avatar09 from '@/assets/images/avatar/09.jpg'
import avatar10 from '@/assets/images/avatar/10.jpg'

const Articles = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="text-center mb-4">Popular Articles</h2>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-xl-9 mx-auto">
                        <div className="vstack gap-4">
                            {/* === Article 1 === */}
                            <div className="card card-body p-4">
                                <div className="d-md-flex justify-content-between align-items-center">
                                    <div className="mb-3 mb-md-0">
                                        <h4 className="card-title mb-2 mb-sm-1">
                                            <a href="#">The installation part (10 articles)</a>
                                        </h4>
                                        <div className="d-flex align-items-start align-items-sm-center">
                                            <ul className="avatar-group mb-0">
                                                {[avatar08, avatar04].map((img, i) => (
                                                    <li key={i} className="avatar avatar-xxs">
                                                        <Image
                                                            className="avatar-img rounded-circle border border-2 border-white"
                                                            src={img}
                                                            alt="avatar"
                                                            width={32}
                                                            height={32}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="ms-2">
                                                <small className="mb-0">
                                                    Written by <b>Carolyn Ortiz</b> and <b>Billy Vasquez</b>.
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hstack gap-4 gap-sm-5 flex-wrap">
                                        <a href="#" className="text-primary-hover mb-0">
                                            <FaEye className="me-2" />578
                                        </a>
                                        <a href="#" className="text-primary-hover mb-0">
                                            <FaComments className="me-2" />25
                                        </a>
                                        <a href="#" className="text-primary-hover mb-0">
                                            <FaThumbsUp className="me-2" />10
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* === Article 2 === */}
                            <div className="card card-body p-4">
                                <div className="d-md-flex justify-content-between align-items-center">
                                    <div className="mb-3 mb-md-0">
                                        <h4 className="card-title mb-2 mb-sm-1">
                                            <a href="#">Supporting Customers With Inbox</a>
                                        </h4>
                                        <div className="d-flex align-items-start align-items-sm-center">
                                            <ul className="avatar-group mb-0">
                                                {[avatar01, avatar02, avatar03].map((img, i) => (
                                                    <li key={i} className="avatar avatar-xxs">
                                                        <Image
                                                            className="avatar-img rounded-circle border border-2 border-white"
                                                            src={img}
                                                            alt="avatar"
                                                            width={32}
                                                            height={32}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="ms-2">
                                                <small className="mb-0">
                                                    Written by <b>Louis Ferguson</b>, <b>Dennis Barrett</b> and <b>Larry Lawson</b>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hstack gap-4 gap-sm-5 flex-wrap">
                                        <a href="#" className="text-primary-hover mb-0">
                                            <FaEye className="me-2" />254
                                        </a>
                                        <a href="#" className="text-primary-hover mb-0">
                                            <FaComments className="me-2" />20
                                        </a>
                                        <a href="#" className="text-primary-hover mb-0">
                                            <FaThumbsUp className="me-2" />18
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* === Article 3 === */}
                            <div className="card card-body p-4">
                                <div className="d-md-flex justify-content-between align-items-center">
                                    <div className="mb-3 mb-md-0">
                                        <h4 className="card-title mb-2 mb-sm-1">
                                            <a href="#">Sending Effective Emails</a>
                                        </h4>
                                        <div className="d-flex align-items-start align-items-sm-center">
                                            <ul className="avatar-group mb-0">
                                                <li className="avatar avatar-xxs">
                                                    <Image
                                                        className="avatar-img rounded-circle border border-2 border-white"
                                                        src={avatar06}
                                                        alt="avatar"
                                                        width={32}
                                                        height={32}
                                                    />
                                                </li>
                                            </ul>
                                            <div className="ms-2">
                                                <small className="mb-0">
                                                    Written by <b>Jacqueline Miller</b>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hstack gap-4 gap-sm-5 flex-wrap">
                                        <a href="#" className="text-primary-hover mb-0">
                                            <FaEye className="me-2" />789
                                        </a>
                                        <a href="#" className="text-primary-hover mb-0">
                                            <FaComments className="me-2" />18
                                        </a>
                                        <a href="#" className="text-primary-hover mb-0">
                                            <FaThumbsUp className="me-2" />56
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* === Article 4 === */}
                            <div className="card card-body p-4">
                                <div className="d-md-flex justify-content-between align-items-center">
                                    <div className="mb-3 mb-md-0">
                                        <h4 className="card-title mb-2 mb-sm-1">
                                            <a href="#">Connect With Customers</a>
                                        </h4>
                                        <div className="d-flex align-items-start align-items-sm-center">
                                            <ul className="avatar-group mb-0">
                                                {[avatar07, avatar08].map((img, i) => (
                                                    <li key={i} className="avatar avatar-xxs">
                                                        <Image
                                                            className="avatar-img rounded-circle border border-2 border-white"
                                                            src={img}
                                                            alt="avatar"
                                                            width={32}
                                                            height={32}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="ms-2">
                                                <small className="mb-0">
                                                    Written by <b>Lori Stevens</b> and <b>Samuel Bishop</b>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hstack gap-4 gap-sm-5 flex-wrap">
                                        <a href="#" className="text-primary-hover mb-0">
                                            <FaEye className="me-2" />758
                                        </a>
                                        <a href="#" className="text-primary-hover mb-0">
                                            <FaComments className="me-2" />21
                                        </a>
                                        <a href="#" className="text-primary-hover mb-0">
                                            <FaThumbsUp className="me-2" />125
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* === Article 5 === */}
                            <div className="card card-body p-4">
                                <div className="d-md-flex justify-content-between align-items-center">
                                    <div className="mb-3 mb-md-0">
                                        <h4 className="card-title mb-2 mb-sm-1">
                                            <a href="#">Upgrade Gulp 3 to Gulp 4 the gulpfile.js workflow</a>
                                        </h4>
                                        <div className="d-flex align-items-start align-items-sm-center">
                                            <ul className="avatar-group mb-0">
                                                {[avatar09, avatar10].map((img, i) => (
                                                    <li key={i} className="avatar avatar-xxs">
                                                        <Image
                                                            className="avatar-img rounded-circle border border-2 border-white"
                                                            src={img}
                                                            alt="avatar"
                                                            width={32}
                                                            height={32}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="ms-2">
                                                <small className="mb-0">
                                                    Written by <b>Lori Stevens</b> and <b>Samuel Bishop</b>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hstack gap-4 gap-sm-5 flex-wrap">
                                        <a href="#" className="text-primary-hover mb-0">
                                            <FaEye className="me-2" />685
                                        </a>
                                        <a href="#" className="text-primary-hover mb-0">
                                            <FaComments className="me-2" />12
                                        </a>
                                        <a href="#" className="text-primary-hover mb-0">
                                            <FaThumbsUp className="me-2" />245
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* === View all articles button === */}
                            <div className="text-center">
                                <a href="#" className="btn btn-primary-soft mb-0">
                                    <FaSpinner className="me-2" />
                                    View all article
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Articles
