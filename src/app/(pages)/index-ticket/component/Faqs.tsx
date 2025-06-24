import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

type FaqItem = {
    question: string;
    answer: string;
}

const faqs: FaqItem[] = [
    {
        question: 'What is this Question Answer website about?',
        answer:
            'Our Question Answer website is a platform where users can ask questions and receive answers from a community of knowledgeable individuals. It covers a wide range of topics to facilitate learning and information sharing.',
    },
    {
        question: 'How do I ask a question?',
        answer:
            'To ask a question, simply log in to your account (or sign up if you\'re new), navigate to the "Ask a Question" section, and provide details about your query. Be specific to receive accurate and helpful answers.',
    },
    {
        question: 'Is registration required to participate?',
        answer:
            'While you can browse questions and answers without registering, creating an account allows you to ask questions, provide answers, and personalize your experience on the platform.',
    },
    {
        question: 'How are the best answers determined?',
        answer:
            'Users can upvote answers they find helpful, and the answer with the most upvotes is often highlighted as the "best answer." This helps the community identify the most valuable responses.',
    },
    {
        question: 'How can I report inappropriate content?',
        answer:
            'If you come across content that violates our guidelines, please use the reporting feature available on the platform. Our moderators will review the report and take appropriate action.',
    },
    {
        question: 'Is there a mobile app for the Question Answer website?',
        answer:
            'Currently, we do not have a dedicated mobile app. However, our website is optimized for mobile browsers, providing a seamless experience on smartphones and tablets.',
    },
];

const Faqs = () => {
    return (
        <section>
            <Container>
                <div className="mx-auto text-center mb-6">
                    <h2 className="h1">Frequently asked questions</h2>
                </div>
                <Row className="g-4">
                    {faqs.map((faq, index) => (
                        <Col md={6} key={index}>
                            <h5>{faq.question}</h5>
                            <p className="mb-0">{faq.answer}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Faqs;
