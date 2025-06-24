import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BiRightArrowAlt } from 'react-icons/bi';
import { BsFillChatSquareDotsFill, BsFillPatchQuestionFill, BsLifePreserver } from 'react-icons/bs';

type SolutionItemType = {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    colorClass: string;
}

const solutionData: SolutionItemType[] = [
    {
        id: 1,
        title: 'Q&A features',
        description: 'Engage with our community by asking questions and sharing your expertise.',
        icon: <BsFillPatchQuestionFill />,
        colorClass: 'text-bg-success',
    },
    {
        id: 2,
        title: 'TechTalk Forum',
        description: 'Join the conversation at TechTalk Forum and be part of a vibrant community!',
        icon: <BsFillChatSquareDotsFill />,
        colorClass: 'text-bg-orange',
    },
    {
        id: 3,
        title: 'Help center desk',
        description:
            'We are glad to having you here looking for the answer. As our team hardly working on it',
        icon: <BsLifePreserver />,
        colorClass: 'text-bg-info',
    },
];

const Solution = () => {
    return (
        <section>
            <Container>
                <Row className="g-4">
                    {solutionData.map((item) => (
                        <Col md={6} lg={4} key={item.id}>
                            <div className="d-flex">
                                <div className={`icon-lg ${item.colorClass} rounded flex-shrink-0 d-flex align-items-center justify-content-center`}>
                                    {item.icon}
                                </div>
                                <div className="ms-3">
                                    <h4 className="mb-2">{item.title}</h4>
                                    <p className="mb-2">{item.description}</p>
                                    <Link className="icon-link icon-link-hover lh-0" href="#">
                                        View detail <BiRightArrowAlt />
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Solution;
