import Link from 'next/link'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { BiShareAlt } from 'react-icons/bi'
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs'
import { FaRegBookmark, FaRegEye, FaRegFlag, FaRegMessage } from 'react-icons/fa6'

type QuestionDataType = {
    id: number,
    voteName: string,
    upId: string,
    downId: string,
    votes: number,
    title: string,
    date: string,
    answers: number,
    views: number
}

const questionsData: QuestionDataType[] = [
    {
        id: 1,
        voteName: "vote1",
        upId: "btnradioT1",
        downId: "btnradioT2",
        votes: 98,
        title: "What can I do to add this count, and make the right data frame?",
        date: "7 Nov 2024",
        answers: 15,
        views: 102,
    },
    {
        id: 2,
        voteName: "vote2",
        upId: "btnradioT3",
        downId: "btnradioT4",
        votes: 51,
        title: "Find the highest/lowest value by the data of two different tables in a SQL",
        date: "25 Nov 2024",
        answers: 6,
        views: 62,
    },
    {
        id: 3,
        voteName: "vote3",
        upId: "btnradioT5",
        downId: "btnradioT6",
        votes: 56,
        title: "How can I make an onclick box have multiple functions and display a different message each time?",
        date: "29 Nov 2024",
        answers: 21,
        views: 98,
    },
    {
        id: 4,
        voteName: "vote4",
        upId: "btnradioT7",
        downId: "btnradioT8",
        votes: 102,
        title: "What can I do to add this count, and make the right data frame?",
        date: "30 Nov 2024",
        answers: 16,
        views: 56,
    },
]

const Questions = () => {
    return (
        <>
            {questionsData.map((q, idx) => (
                <div className={`card p-0${idx === 0 ? " z-index-9" : ""}`} key={q.id}>
                    <div className="hstack gap-0 align-items-start">

                        <div className="user-vote w-70px">
                            <div className="p-3 p-sm-4">
                                <div className="btn-group vstack align-items-center" role="group">

                                    <input type="radio" className="btn-check" name={q.voteName} id={q.upId} />
                                    <label className="btn btn-vote mb-0" htmlFor={q.upId}> <BsFillCaretUpFill className="fs-5" /> </label>

                                    <h6 className="mb-0 px-2 vote-count">{q.votes}</h6>

                                    <input type="radio" className="btn-check" name={q.voteName} id={q.downId} />
                                    <label className="btn btn-vote mb-0" htmlFor={q.downId}> <BsFillCaretDownFill className="fs-5" /> </label>
                                </div>
                            </div>
                        </div>

                        <div className="vr"></div>

                        <div className="card-body p-3 p-sm-4">
                            <h5 className="card-title mb-1"><Link href="/que-ans/detail-minimal">{q.title}</Link></h5>
                            <small>Asked: {q.date}</small>

                            <div className="hstack gap-2 gap-sm-3 flex-wrap mt-3">

                                <Link href="/que-ans/detail-minimal" className="text-primary-hover small mb-0"><FaRegMessage className="me-1" />{String(q.answers).padStart(2, '0')} <span className="d-none d-sm-inline">Answer</span></Link>
                                <Link href="#!" className="text-primary-hover small mb-0"><FaRegEye className="me-1" />{String(q.views).padStart(2, '0')} <span className="d-none d-sm-inline">View</span></Link>
                                <OverlayTrigger placement="top" overlay={<Tooltip>Share</Tooltip>}>
                                    <Link href="#!" className="text-primary-hover small mb-0 ms-auto"><BiShareAlt className="me-1" />
                                    </Link>
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={<Tooltip>Save</Tooltip>}>
                                    <Link href="#!" className="text-primary-hover small mb-0"><FaRegBookmark className="fa-regular fa-bookmark me-1"></FaRegBookmark></Link>
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={<Tooltip>Report</Tooltip>}>
                                    <Link href="#!" className="text-primary-hover small mb-0"><FaRegFlag className="me-1" /></Link>
                                </OverlayTrigger>
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </>
    )
}

export default Questions