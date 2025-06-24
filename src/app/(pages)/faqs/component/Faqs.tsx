"use client";
import React from "react";
import {
    Accordion,
    Card,
    Container,
    Row,
    Col,
    Button,
} from "react-bootstrap";
import faqImage from "@/assets/images/elements/21.svg";
import Image from "next/image";

interface FaqItem {
    id: number;
    question: string;
    answer: string;
}

const faqsData: FaqItem[] = [
    {
        id: 1,
        question: "How can we help?",
        answer:
            "Yet remarkably appearance gets him his projection. Diverted endeavor bed peculiar men the not desirous. Acuteness abilities can furnish fulfilled sex. Warrant fifteen exposed ye at mistake. Blush since so in noisy still built up an again. As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. In mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of Norland arrived.",
    },
    {
        id: 2,
        question: "How to edit my Profile?",
        answer:
            "What deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.",
    },
    {
        id: 3,
        question: "How much should I offer the sellers?",
        answer:
            "Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.",
    },
    {
        id: 4,
        question: "Installation Guide",
        answer: `<p>What deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.</p><p class="mb-0">At the moment, we only accept Credit/Debit cards and Paypal payments. Paypal is the easiest way to make payments online. While checking out your order. Be sure to fill in correct details for fast & hassle-free payment processing.</p>`,
    },
    {
        id: 5,
        question: "Additional Options and Services",
        answer:
            "Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.",
    },
    {
        id: 6,
        question: "What is the difference between a college and a university?",
        answer:
            "Deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.",
    },
    {
        id: 7,
        question: "I need to add new members to my team. how will that be billed?",
        answer:
            "Deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.",
    },
    {
        id: 8,
        question: "Can I pay via Paypal for the rest of the service?",
        answer:
            "Deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.",
    },
    {
        id: 9,
        question: "How we can contact support in my country?",
        answer:
            "Deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.",
    },
];

const Faqs = () => {
    return (
        <section className="pt-0">
            <Container>
                <Row className="g-4">
                    <Col xl={10} className="mx-auto">
                        <div className="vstack gap-4">
                            <Card className="card-body p-0">
                                <Accordion
                                    defaultActiveKey="0"
                                    className="accordion-icon accordion-bg-transparent"
                                >
                                    {faqsData.map((faq, idx) => (
                                        <Accordion.Item eventKey={idx.toString()} key={faq.id} className="border-bottom">
                                            <h6 className="accordion-header" id={`heading${faq.id}`}>
                                                <Accordion.Button
                                                    className="accordion-button fw-bold"
                                                    as="button"
                                                    type="button"
                                                >
                                                    <span className="me-5">{faq.question}</span>
                                                </Accordion.Button>
                                            </h6>
                                            <Accordion.Body>
                                                {faq.answer.startsWith("<p") || faq.answer.includes("<")
                                                    ? <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                                    : <div>{faq.answer}</div>
                                                }
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>
                            </Card>
                         
                            <Card className="card-body p-4">
                                <Row className="g-4 align-items-center text-center text-md-start">
                                    <Col md={3}>
                                        <Image src={faqImage} alt="FAQ Help" />
                                    </Col>
                                    <Col md={6} lg={7}>
                                        <h3>Still, have questions?</h3>
                                        <p className="mb-0">
                                            Can't find the answer you are looking for? Please chat to our friendly teams
                                        </p>
                                    </Col>
                                    <Col md={3} lg={2} className="d-md-grid">
                                        <Button variant="primary" className="mb-0">
                                            Get in touch
                                        </Button>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Faqs;