import React from 'react'
import elementDark from "@/assets/images/elements/dark-bg-shape.png"
import element6 from "@/assets/images/elements/06.svg"
import element7 from "@/assets/images/elements/07.svg"
import element4 from "@/assets/images/elements/04.svg"
import lightShape from "@/assets/images/elements/light-bg-shape.png"
import Image from 'next/image'
import { Row } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'

const Banner = () => {
    return (
        <section className="pb-0 pb-lg-5 pt-8 pt-md-9">
            <div className="container position-relative">
                <div className="d-none d-lg-block">
                    <Image src={elementDark} className="light-mode-item position-absolute top-100 start-50 translate-middle mt-n5 ms-n5" alt="" />
                    <Image src={lightShape} className="dark-mode-item position-absolute top-100 start-50 translate-middle mt-n5 ms-n5 opacity-3" alt="" />
                </div>

                <Row>
                    <div className="col-lg-8 mx-auto text-center position-relative">

                        <h1 className="mb-0 position-relative z-index-9">The Best Way to Get a Good <span className="text-primary">Answer</span> is to Ask a Good
                            <span className="position-relative">Question
                                <span className="position-absolute top-50 start-50 translate-middle mt-2 z-index-n1">
                                    <svg className="fill-primary" width="145.5px" height="40.2px" viewBox="0 0 145.5 40.2">
                                        <path d="M45.7,30c-0.1-3.8,1.6-3.9,5.1-3.8c7.5,0.3,15-0.2,22.5-0.8c10.2-0.9,20.3-2.4,30.4-3.5c6.4-0.7,12.2-3.8,18.4-4.8c5.5-0.9,9.9-3.8,14.5-6.4c0.7-0.4,1.3-1.2,2-1.6c1.2-0.6,0.9-4.1,3.9-1.7c2.6,2,3.9,3.8,2.2,6.8c-2.6,4.5-7,6.5-11.5,8.5c-12.4,5.7-25.7,8.3-39,10.7c-14,2.6-28.2,3.6-42.4,3.3C46,36.6,40,36.8,34.2,34.9c3.5-1.5,7.1-0.5,10.7-0.7c4-0.2,7.9,0,11.9,0.2c1.2,0,2.3,0.1,2.8-1.3c0.5,0.3,0.9,0.9,1.4,0.9c8.8,0.6,17.4-0.3,26-1.9c0.7-0.1,0.5-0.9,0.5-1.4c0.5,0.8,1.2,1.3,2.1,1.2c6.3-1,12.6-1.5,18.6-3.9c-7,0.2-13.7,3.1-20.7,2.8c-9.2,1.9-18.6,2.3-28,2.4c-2.5,0.1-5,0.2-7.5,0.3c-2.2,0-1.9-0.1-2.9-2.4C48.8,30.1,47,29.9,45.7,30L45.7,30z" />
                                        <path d="M45.7,30c-0.7-0.8-1.6-0.9-2.1,0c-0.4,0.7,0.3,1.2,1.1,1.3c0.8,0.1,1.8-0.1,2.1,1.6c-3.7,0.8-7.4,0.3-10.6-0.8c-2.5-0.8-6.1,1.4-7.9-2.5c-0.3-0.7-2.1,2.4-4.3,1.6c-2.7-0.9-5.6-0.9-8.2-1.8c-4.4-1.6-9.1-1.5-13.5-3.3c-1.2-0.5-2.5-0.6-2.7-2.2c-0.1-0.9,0.4-1.6,1.2-2.1C1,25,4.5,18.9,4.3,23.2C4.2,25,5.6,23.7,6,23.5c2.3-1.1,4.6,1.4,7-0.3c0.5-0.3,1.8,1.2,1.3,2.6C13.3,28,15.1,28,16.2,28c2,0,0.5-1.2,0.6-2c0.4-3.1,3.1-2,4.5-1.6c2.9,0.8,5.4,2.1,8.6,0.7c2.1-0.9,1,2.3,2.8,2.9c1.1-1.4,2.8-2.3,5.1-2.5c0.4,1.3-1.9,1.8-0.7,3.4C39.8,29.1,43.5,24.9,45.7,30C45.7,30,45.7,30,45.7,30" />
                                        <path d="M14.8,32c3.1-1.2,5.9-0.4,9.6,1.1C20.4,34.7,17.8,32.5,14.8,32" />
                                    </svg>
                                </span>
                            </span>
                        </h1>

                        <div className="hstack gap-3 flex-wrap justify-content-center mt-4">
                            <div className="heading-color fw-normal bg-mode rounded-2 d-inline-block py-2 px-4">
                                <Image src={element6} className="h-20px me-2" alt="" />
                                Connect around the world
                            </div>

                            <div className="heading-color fw-normal bg-mode rounded-2 d-inline-block py-2 px-4">
                                <Image src={element7} className="h-20px me-2" alt="" />
                                Free Asking
                            </div>

                            <div className="heading-color fw-normal bg-mode rounded-2 d-inline-block py-2 px-4">
                                <Image src={element4} className="h-20px me-2" alt="" />
                                100% Trusted Answers
                            </div>
                        </div>

                        <form className="bg-mode rounded-2 p-2 mt-4">
                            <div className="input-group">
                                <input className="form-control form-control-lg border-0 me-1" type="search" placeholder="What is your Question?" />
                                <button type="button" className="btn btn-primary btn-lg mb-0 rounded"><FaSearch /></button>
                            </div>
                        </form>

                    </div>
                </Row>
            </div>
        </section >
    )
}

export default Banner