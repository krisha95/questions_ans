import React from "react";
import { Accordion, AccordionBody, AccordionButton, AccordionItem, Col } from "react-bootstrap";

type FaqItem = {
    id: number;
    question: string;
    answer: string;
};

const faqData: FaqItem[] = [
    {
        id: 1,
        question: "How many items are there on this list?",
        answer:
            "Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal. Drawings offended yet answered Jennings perceive laughing six did far. Rooms oh fully taken by worse do. Points afraid but may end law lasted.",
    },
    {
        id: 2,
        question: "Can you describe Q&A in just one sentence?",
        answer:
            "September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.",
    },
    {
        id: 3,
        question: "What services do agencies provide?",
        answer:
            "Agencies provide a wide range of services depending on their specialization. Some common services include advertising campaigns, digital marketing, branding, creative design, media planning and buying, public relations, talent management, event planning, and market research.",
    },
    {
        id: 4,
        question: "How do I choose the right agency for my needs?",
        answer:
            "When selecting an agency, consider your specific requirements, budget, and the agency's expertise and track record in your industry. Research their portfolio, client testimonials, and case studies to gauge their capabilities. It's also important to meet with the agency to assess their communication style and ensure they align with your goals.",
    },
    {
        id: 5,
        question: "What are the advantages of hiring an agency?",
        answer:
            "Hiring an agency offers several benefits, such as access to specialized skills and expertise, industry insights, creative thinking, established networks, and resources. Agencies can provide fresh perspectives, save time and effort, and help you achieve your objectives more effectively.",
    },
];

const Faq = () => {
    return (
        <Col md={9} className="mx-auto mt-6">
            <h2 className="mb-4 text-center">Frequently Asked Questions</h2>
            <Accordion defaultActiveKey="0" className="accordion-icon accordion-border" id="accordionFaq">
                {faqData.map((faq, idx) => (
                    <AccordionItem eventKey={idx.toString()} key={faq.id} className="mb-3">
                        <h6 className="accordion-header font-base fw-semibold rounded">
                            <AccordionButton className="accordion-button fw-bold">
                                {faq.question}
                            </AccordionButton>
                        </h6>
                        <AccordionBody className="mt-3">
                            {faq.answer}
                        </AccordionBody>
                    </AccordionItem>
                ))}
            </Accordion>
        </Col>
    );
};

export default Faq