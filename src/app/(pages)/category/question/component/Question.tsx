import Link from "next/link";
import { Col } from "react-bootstrap";
import { BiCaretUp, BiShareAlt } from "react-icons/bi";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { FaRegBookmark, FaRegEye, FaRegFlag, FaRegMessage } from "react-icons/fa6";
import Technology from "./Technology";


type QuestionType = {
    id: number,
    title: string,
    author: string,
    date: string,
    votes: number,
    answers: number,
    views: number,
    voteName: string

}
const Question = () => {

    const questions: QuestionType[] = [
        {
            id: 1,
            title: "Explain the concept of artificial intelligence (AI)?",
            author: "Larry Lawson",
            date: "07 Nov 2024",
            votes: 145,
            answers: 15,
            views: 102,
            voteName: "vote1",
        },
        {
            id: 2,
            title: "What is the difference between a compiler and an interpreter?",
            author: "Louis Ferguson",
            date: "12 Nov 2024",
            votes: 51,
            answers: 6,
            views: 21,
            voteName: "vote2",
        },
        {
            id: 3,
            title: "How can I make an onclick box have multiple functions and display a different message each time?",
            author: "Creative Group",
            date: "29 Nov 2024",
            votes: 85,
            answers: 21,
            views: 98,
            voteName: "vote3",
        },
        {
            id: 4,
            title: "What is the DRY principle in coding, and why is it important for maintaining clean and efficient code?",
            author: "Frances Guerrero",
            date: "30 Nov 2024",
            votes: 102,
            answers: 16,
            views: 56,
            voteName: "vote4",
        },
    ];

    return (
        <Col lg={8} xxl={7}>
            <div className="vstack gap-4">
                <Technology />

                {questions.map((q) => (
                    <div className="card hstack gap-0 align-items-start p-0" key={q.id}>
                        <div className="user-vote w-70px p-3 p-sm-4">
                            <div className="btn-group vstack align-items-center" role="group">
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name={q.voteName}
                                    id={`upvote-${q.id}`}
                                />
                                <label className="btn btn-vote mb-0" htmlFor={`upvote-${q.id}`}>
                                    <BsFillCaretUpFill className="fs-5" />
                                </label>
                                <h6 className="mb-0 px-2 vote-count">{q.votes}</h6>
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name={q.voteName}
                                    id={`downvote-${q.id}`}
                                />
                                <label className="btn btn-vote mb-0" htmlFor={`downvote-${q.id}`}>
                                    <BsFillCaretDownFill className="fs-5" />
                                </label>
                            </div>
                        </div>

                        <div className="vr"></div>

                        <div className="card-body p-3 p-sm-4">
                            <h5 className="card-title mb-2 mb-sm-1">
                                <Link href="/que-ans/detail">{q.title}</Link>
                            </h5>

                            <div className="hstack gap-2 gap-sm-3 flex-wrap">
                                <Link href="#" className="mb-0">
                                    {q.author}
                                </Link>
                                <small>Asked: {q.date}</small>
                            </div>

                            <div className="hstack gap-3 gap-sm-3 mt-3 flex-wrap">
                                <Link
                                    href="/que-ans/detail"
                                    className="text-primary-hover small mb-0"
                                >
                                    <FaRegMessage className="me-1" />
                                    {q.answers} <span className="d-none d-sm-inline">Answer</span>
                                </Link>
                                <Link href="#!" className="text-primary-hover small mb-0">
                                    <FaRegEye className="me-1" />
                                    {q.views} <span className="d-none d-sm-inline">View</span>
                                </Link>
                                <Link
                                    href="#!"
                                    className="text-primary-hover small mb-0 ms-auto"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Share"
                                >
                                    <BiShareAlt className="me-1" />
                                </Link>
                                <Link
                                    href="#!"
                                    className="text-primary-hover small mb-0"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Save"
                                >
                                    <FaRegBookmark className="me-1" />
                                </Link>
                                <Link
                                    href="#!"
                                    className="text-primary-hover small mb-0"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Report"
                                >
                                    <FaRegFlag className="me-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
                <Link href="#" className="btn btn-primary-soft mb-0">
                    Load More Questions
                </Link>
            </div>
        </Col>
    );
};

export default Question;
