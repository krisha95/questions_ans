import DropdownAction from '@/component/DropdownAction';
import React from 'react'
import { BiBookmark, BiDotsVertical, BiShare } from 'react-icons/bi';
import { BsFillExclamationOctagonFill } from 'react-icons/bs';
import { FaCopy } from 'react-icons/fa6';

const QuestionSlider = () => {

    const menuItems = [
        { label: "Save", icon: <BiBookmark className='me-2' /> },
        { label: "Share", icon: <BiShare className='me-2' /> },
        { label: "Report", icon: <BsFillExclamationOctagonFill className='me-2' /> },
        { label: "Copy link", icon: <FaCopy className='me-2' /> },
    ];
    return (
        <div>
            <div className="swiper"
                data-swiper-options='{
							"spaceBetween": 30, 
							"loop": false,
							"autoplay":false,
							"breakpoints": {
								"576": {"slidesPerView": 1}, 
								"768": {"slidesPerView": 2}
							},
							"pagination":{
								"el":".swiper-pagination",
								"clickable":"true"
							}}'>

                <div className="swiper-wrapper">


                    <div className="swiper-slide">
                        <div className="card card-body p-4">

                            <div className="d-flex justify-content-between align-items-center position-relative z-index-9 mb-2">

                                <div className="hstack flex-wrap gap-2">
                                    <span className="badge bg-primary bg-opacity-10 text-primary">Business</span>
                                    <span className="badge bg-danger bg-opacity-10 text-danger"><i className="fa-solid fa-fire me-2"></i>Popular question </span>
                                </div>



                                {/* <div className="dropdown">

                                    <a href="#" className="btn btn-sm btn-round btn-light mb-0 flex-shrink-0" role="button" id="dropdownShare1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi bi-three-dots-vertical"></i>
                                    </a>

                                    <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare1">
                                        <li><a className="dropdown-item" href="#"><i className="fa-solid fa-bookmark me-2"></i>Save</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="fa-solid fa-share me-2"></i>Share</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-exclamation-octagon-fill me-2"></i>Report</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="fas fa-copy me-2"></i>Copy link</a></li>
                                    </ul>
                                </div> */}

                                <DropdownAction
                                    items={menuItems}
                                    toggleIcon={<BiDotsVertical />}
                                    wrapperClass="dropdown flex-shrink-0 position-absolute end-0 top-0 p-3"
                                    toggleButtonClass="btn btn-sm btn-round btn-light mb-0"
                                    menuClass="dropdown-menu dropdown-menu-end"
                                />
                            </div>



                            <h5 className="card-title"><a href="answer-detail-minimal.html" className="stretched-link">How does digital marketing impact business growth?</a></h5>
                            <small>Asked: 05 Nov 2021</small>


                            <div className="mt-3">
                                <a href="#" className="btn btn-dark mb-0">Answer</a>
                            </div>
                        </div>
                    </div>



                    <div className="swiper-slide">
                        <div className="card card-body p-4">

                            <div className="d-flex justify-content-between align-items-center position-relative z-index-9 mb-2">

                                <div className="badge bg-primary bg-opacity-10 text-primary">Programmer </div>


                                <div className="dropdown">

                                    <a href="#" className="btn btn-sm btn-round btn-light mb-0 flex-shrink-0" role="button" id="dropdownShare2" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi bi-three-dots-vertical"></i>
                                    </a>

                                    <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare2">
                                        <li><a className="dropdown-item" href="#"><i className="fa-solid fa-bookmark me-2"></i>Save</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="fa-solid fa-share me-2"></i>Share</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-exclamation-octagon-fill me-2"></i>Report</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="fas fa-copy me-2"></i>Copy link</a></li>
                                    </ul>
                                </div>
                            </div>



                            <h5 className="card-title"><a href="answer-detail-minimal.html" className="stretched-link">Explain the concept of object-oriented programming (OOP).</a></h5>
                            <small>Asked: 12 Nov 2024</small>


                            <div className="mt-3">
                                <a href="#" className="btn btn-dark mb-0">Answer</a>
                            </div>
                        </div>
                    </div>



                    <div className="swiper-slide">
                        <div className="card card-body p-4">

                            <div className="d-flex justify-content-between align-items-center position-relative z-index-9 mb-2">

                                <div className="badge bg-primary bg-opacity-10 text-primary">Food</div>


                                <div className="dropdown">

                                    <a href="#" className="btn btn-sm btn-round btn-light mb-0 flex-shrink-0" role="button" id="dropdownShare3" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi bi-three-dots-vertical"></i>
                                    </a>

                                    <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare3">
                                        <li><a className="dropdown-item" href="#"><i className="fa-solid fa-bookmark me-2"></i>Save</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="fa-solid fa-share me-2"></i>Share</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-exclamation-octagon-fill me-2"></i>Report</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="fas fa-copy me-2"></i>Copy link</a></li>
                                    </ul>
                                </div>
                            </div>



                            <h5 className="card-title"><a href="answer-detail-minimal.html" className="stretched-link">What are some healthy cooking for common ingredients?</a></h5>
                            <small>Asked: 15 Nov 2024</small>


                            <div className="mt-3">
                                <a href="#" className="btn btn-dark mb-0">Answer</a>
                            </div>
                        </div>
                    </div>



                    <div className="swiper-slide">
                        <div className="card card-body p-4">

                            <div className="d-flex justify-content-between align-items-center position-relative z-index-9 mb-2">

                                <div className="badge bg-primary bg-opacity-10 text-primary">Food</div>


                                <div className="dropdown">

                                    <a href="#" className="btn btn-sm btn-round btn-light mb-0 flex-shrink-0" role="button" id="dropdownShare5" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi bi-three-dots-vertical"></i>
                                    </a>

                                    <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare5">
                                        <li><a className="dropdown-item" href="#"><i className="fa-solid fa-bookmark me-2"></i>Save</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="fa-solid fa-share me-2"></i>Share</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-exclamation-octagon-fill me-2"></i>Report</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="fas fa-copy me-2"></i>Copy link</a></li>
                                    </ul>
                                </div>
                            </div>



                            <h5 className="card-title"><a href="answer-detail-minimal.html" className="stretched-link"> What are some quick and easy recipes for busy days?</a></h5>
                            <small>Asked: 15 Nov 2024</small>


                            <div className="mt-3">
                                <a href="#" className="btn btn-dark mb-0">Answer</a>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="swiper-pagination swiper-pagination-primary position-relative text-center mt-3"></div>
            </div>
        </div>
    )
}

export default QuestionSlider