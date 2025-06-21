import Link from 'next/link';
import { Col } from 'react-bootstrap';
import { BiCaretDown, BiCaretUp, BiShareAlt } from 'react-icons/bi';
import { FaRegBookmark, FaRegEye, FaRegFlag, FaRegMessage } from 'react-icons/fa6';
import Hstack from "./quetions-session/Hstack";
import QuestionsCard from "./quetions-session/QuestionsCard";
import SeeMoreCard from './quetions-session/SeeMoreCard';
import Sponsor from './quetions-session/Sponsor';
import CommonCard from './quetions-session/Hstack';
import avatar9 from "@/assets/images/avatar/09.jpg"
import avatar1 from "@/assets/images/avatar/01.jpg"
import avatar2 from "@/assets/images/avatar/02.jpg"
import avatar3 from "@/assets/images/avatar/03.jpg"
import avatar4 from "@/assets/images/avatar/04.jpg"


const Qutions = () => {
    return (
        <Col xxl={8} xl={7}>
            <div className="vstack gap-4">
                <div className="card hstack gap-0 align-items-start p-0">
                    <div className="user-vote w-70px p-3 p-sm-4">
                        <div className="btn-group vstack align-items-center" role="group">
                            <input type="radio" className="btn-check" name="vote1" id="btnradioT1" />
                            <label className="btn btn-vote mb-0" htmlFor="btnradioT1">
                                <BiCaretUp size={24} />
                            </label>
                            <h6 className="mb-0 px-2 vote-count">25</h6>
                            <input type="radio" className="btn-check" name="vote1" id="btnradioT2" />
                            <label className="btn btn-vote mb-0" htmlFor="btnradioT2">
                                <BiCaretDown size={24} />
                            </label>
                        </div>
                    </div>
                    <div className="vr"></div>
                    <div className="card-body p-3 p-sm-4">
                        <h5 className="card-title mb-2 mb-sm-1"><Link href="/answer-detail-minimal">Explain the concept of artificial intelligence (AI)?</Link></h5>
                        <div className="hstack gap-2 gap-sm-3 flex-wrap">
                            <Link href="/my-profile" className="mb-0">Larry Lawson</Link>
                            <small>Asked:07 Nov 2024</small>
                        </div>
                        <div className="hstack gap-3 gap-sm-3 mt-3 flex-wrap">
                            <Link href="/answer-detail" className="text-primary-hover small mb-0"><FaRegMessage className="me-1" /> 15 <span className="d-none d-sm-inline">Answer</span></Link>
                            <Link href="#!" className="text-primary-hover small mb-0"><FaRegEye className='me-1' />102 <span className="d-none d-sm-inline">View</span></Link>
                            <Link href="#!" className="text-primary-hover small mb-0 ms-auto" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Share"><BiShareAlt className='me-1' /></Link>
                            <Link href="#!" className="text-primary-hover small mb-0" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Save"><FaRegBookmark className='me-1' /></Link>
                            <Link href="#!" className="text-primary-hover small mb-0" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Report"><FaRegFlag className='me-1' /></Link>
                        </div>
                    </div>
                </div>
                <QuestionsCard />
                <CommonCard
                    voteCount={245}
                    categories={[
                        { label: "Health", hot: false },
                        { label: "Hot topic", hot: true }
                    ]}
                    title="What are some healthy cooking alternatives for common ingredients?"
                    date="05 Nov 2024"
                    content="Replace butter with olive oil, use Greek yogurt instead of sour cream, and opt for whole grains over refined grains for healthier cooking."
                    tags={["Doctor", "WHO"]}
                    user={{
                        avatar: avatar9,
                        name: "Lori Stevens",
                        gold: 5,
                        silver: 15,
                        bronze: 351
                    }}
                    stats={{
                        answers: "08",
                        views: 25
                    }}
                    avatars={[avatar1, avatar2, avatar3, avatar4]}
                />
                <SeeMoreCard />
                <Sponsor />

                <CommonCard
                    voteCount={15}
                    categories={[
                        { label: "Programmer" },
                        { label: "Legal", color: "orange" }
                    ]}
                    title="Explain the concept of recursion in programming, and provide an example?"
                    date="05 Nov 2024"
                    content={
                        <>
                            A classic example is the calculation of the factorial of a number, where the factorial of n is calculated as b n! = n * (n-1)!, and the base case is 0! = 1. A recursive function can elegantly express this mathematical relationship.
                        </>
                    }
                    tags={["recursion", "programming"]}
                    user={{
                        avatar: avatar2,
                        name: "Billy Vasquez",
                        gold: 5,
                        silver: 15,
                        bronze: 351
                    }}
                    stats={{
                        answers: "11",
                        views: 36
                    }}
                    avatars={[avatar1, avatar2, avatar3, avatar4]}
                />
            </div>

        </Col>
    )
}

export default Qutions