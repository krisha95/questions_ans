import Link from 'next/link'
import { BiBookmark, BiDotsVertical } from 'react-icons/bi'
import { BsFillExclamationOctagonFill, BsFillHandThumbsDownFill, BsFillHandThumbsUpFill } from 'react-icons/bs'
import avatar9 from "@/assets/images/avatar/09.jpg"
import avatar1 from "@/assets/images/avatar/01.jpg"
import avatar2 from "@/assets/images/avatar/02.jpg"
import avatar3 from "@/assets/images/avatar/03.jpg"
import avatar4 from "@/assets/images/avatar/04.jpg"
import { FaCopy, FaFire } from 'react-icons/fa6'
import Image from 'next/image'

const Hstack = () => {
    return (
        <div className="card hstack gap-0 align-items-start p-0">

            <div className="hstack gap-2 position-absolute top-0 end-0 p-3">
                <a href="#" className="btn btn-sm btn-round btn-light mb-0 flex-shrink-0"><BiBookmark /></a>
                <div className="dropdown d-none d-sm-block">

                    <Link href="#" className="btn btn-sm btn-round btn-light mb-0 flex-shrink-0" role="button" id="dropdownbutton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <BiDotsVertical />
                    </Link>

                    <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownbutton1">
                        <li><Link className="dropdown-item" href="#"><BsFillExclamationOctagonFill />Report</Link></li>
                        <li><Link className="dropdown-item" href="#"><FaCopy className='me-2' />Copy link</Link></li>
                    </ul>
                </div>
            </div>

            <div className="user-vote w-70px p-3">

                <div className="btn-group vstack flex-wrap gap-1 align-items-center" role="group">

                    <input type="radio" className="btn-check" name="vote4" id="btnradio5" />
                    <label className="btn btn-vote mb-0" htmlFor="btnradio5"><BsFillHandThumbsUpFill /></label>


                    <h6 className="mb-0 vote-count">245</h6>


                    <input type="radio" className="btn-check" name="vote4" id="btnradio6" />
                    <label className="btn btn-vote mb-0" htmlFor="btnradio6"><BsFillHandThumbsDownFill /></label>
                </div>
            </div>
            <div className="vr"></div>

            <div className="card-body p-sm-4">

                <div className="d-block d-sm-flex flex-wrap gap-2 mb-3">
                    <div className="badge bg-info bg-opacity-10 text-info">Health</div>
                    <div className="badge bg-danger bg-opacity-10 text-danger"><FaFire className='me-2' />Hot topic</div>
                </div>

                <h5 className="card-title mb-1"><a href="answer-detail.html">What are some healthy cooking alternatives for common ingredients?</a></h5>
                <small>Asked: 05 Nov 2024</small>


                <p className="mb-0 mt-2">Replace butter with olive oil, use Greek yogurt instead of sour cream, and opt for whole grains over refined grains for healthier cooking.</p>


                <div className="hstack gap-2 mt-2">
                    <a href="#" className="badge bg-light text-body">Doctor</a>
                    <a href="#" className="badge bg-light text-body">WHO</a>
                </div>


                <div className="d-md-flex justify-content-md-between mt-4">


                    <div className="d-flex align-items-center">

                        <div className="avatar">
                            <Image className="avatar-img rounded-circle" src={avatar9} alt="avatar" />
                        </div>

                        <div className="ms-2">
                            <h6 className="mb-0"><a href="my-profile.html">Lori Stevens</a></h6>

                            <ul className="nav nav-achievement-divider small">
                                <li className="nav-item dote-gold">5</li>
                                <li className="nav-item dote-silver">15</li>
                                <li className="nav-item dote-bronze">351</li>
                            </ul>
                        </div>
                    </div>


                    <div className="hstack flex-wrap gap-2 mt-3 mt-md-0">

                        <ul className="avatar-group mb-0">
                            <li className="avatar avatar-xs">
                                <Image className="avatar-img rounded-circle border border-2 border-white" src={avatar1} alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                                <Image className="avatar-img rounded-circle border border-2 border-white" src={avatar2} alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                                <Image className="avatar-img rounded-circle border border-2 border-white" src={avatar3} alt="avatar" />
                            </li>
                            <li className="avatar avatar-xs">
                                <Image className="avatar-img rounded-circle border border-2 border-white" src={avatar4} alt="avatar" />
                            </li>
                        </ul>


                        <ul className="nav nav-divider-slash small heading-color align-items-center">
                            <li className="nav-item"><Link href="/answer-detail" className="p-0 mb-0 text-primary-hover">08 Answer</Link></li>
                            <li className="nav-item">25 Views</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Hstack