import Link from 'next/link';
import React from 'react';
import { BiShareAlt } from 'react-icons/bi';
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';
import { FaRegBookmark, FaRegEye, FaRegFlag, FaRegMessage } from 'react-icons/fa6';

type Question = {
    id: string;
    voteCount: number;
    question: string;
    user: string;
    date: string;
    Link: string;
    answers: number;
    views: number;
};

const QuestionsCards = () => {
    const questions: Question[] = [
        {
            id: 'vote1',
            voteCount: 145,
            question: 'Explain the concept of artificial intelligence (AI)?',
            user: 'Larry Lawson',
            date: '07 Nov 2024',
            Link: '/que-ans/detail-minimal',
            answers: 15,
            views: 102,
        },
        {
            id: 'vote2',
            voteCount: 51,
            question: 'What is the difference between a compiler and an interpreter?',
            user: 'Louis Ferguson',
            date: '12 Nov 2024',
            Link: '/answer-detail',
            answers: 6,
            views: 21,
        },
        {
            id: 'vote3',
            voteCount: 85,
            question: 'How can I make an onclick box have multiple functions and display a different message each time?',
            user: 'Creative Group',
            date: '29 Nov 2024',
            Link: '/answer-detail',
            answers: 21,
            views: 98,
        },
        {
            id: 'vote4',
            voteCount: 102,
            question: 'What is the DRY principle in coding, and why is it important for maintaining clean and efficient code?',
            user: 'Frances Guerrero',
            date: '30 Nov 2024',
            Link: '/answer-detail',
            answers: 16,
            views: 56,
        },
    ];

    return (
        <>
            {questions.map((q, index) => (
                <div key={index} className="card hstack gap-0 align-items-start p-0">
                    <div className="user-vote w-70px p-3 p-sm-4">
                        <div className="btn-group vstack align-items-center" role="group">
                            <input type="radio" className="btn-check" name={q.id} id={`btnradioT${index * 2 + 1}`} />
                            <label className="btn btn-vote mb-0" htmlFor={`btnradioT${index * 2 + 1}`}>

                                <BsFillCaretUpFill className='fs-5' />
                            </label>

                            <h6 className="mb-0 px-2 vote-count">{q.voteCount}</h6>

                            <input type="radio" className="btn-check" name={q.id} id={`btnradioT${index * 2 + 2}`} />
                            <label className="btn btn-vote mb-0" htmlFor={`btnradioT${index * 2 + 2}`}>
                                <BsFillCaretDownFill className='fs-5' />
                            </label>
                        </div>
                    </div>

                    <div className="vr" />

                    <div className="card-body p-3 p-sm-4">
                        <h5 className="card-title mb-2 mb-sm-1">
                            <Link href={q.Link}>{q.question}</Link>
                        </h5>

                        <div className="hstack gap-2 gap-sm-3 flex-wrap">
                            <Link href="#" className="mb-0">{q.user}</Link>
                            <small>Asked: {q.date}</small>
                        </div>

                        <div className="hstack gap-3 gap-sm-3 mt-3 flex-wrap">
                            <Link href={q.Link} className="text-primary-hover small mb-0">
                                <FaRegMessage className='me-1' />{String(q.answers).padStart(2, '0')} <span className="d-none d-sm-inline">Answer</span>
                            </Link>
                            <Link href="#!" className="text-primary-hover small mb-0">
                                <FaRegEye className="me-1"></FaRegEye>{q.views} <span className="d-none d-sm-inline">View</span>
                            </Link>
                            <Link href="#!" className="text-primary-hover small mb-0 ms-auto" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Share">
                                <BiShareAlt className="me-1" />
                            </Link>
                            <Link href="#!" className="text-primary-hover small mb-0" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Save">
                                <FaRegBookmark className="me-1" />
                            </Link>
                            <Link href="#!" className="text-primary-hover small mb-0" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Report">
                                <FaRegFlag className="me-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default QuestionsCards;
