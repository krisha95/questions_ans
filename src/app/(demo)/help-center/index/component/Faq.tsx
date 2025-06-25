"use client";
import React from "react";
import {
  Accordion,
  Container,
  Row,
  Col,
  Button,
  AccordionItem,
  AccordionHeader,
} from "react-bootstrap";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

const faqData: FaqItem[] = [
  {
    id: "One",
    question: "What is this theme layout for?",
    answer: `Yet remarkably appearance gets him his projection. Diverted
    endeavor bed peculiar men the not desirous. Acuteness
    abilities ask can offending furnished fulfilled sex. Warrant
    fifteen exposed ye at mistake. Blush since so in noisy still
    built up an again. As young ye hopes no he place means.
    Partiality diminution gay yet entreaties admiration. In
    mention perhaps attempt pointed suppose. Unknown ye chamber
    of warrant of Norland arrived`,
    defaultOpen: true,
  },
  {
    id: "Two",
    question: "How can we help?",
    answer: `What deal evil rent by real in. But her ready least set
    lived spite solid. September how men saw tolerably two
    behavior arranging. She offices for highest and replied one
    venture pasture. Applauded no discovery in newspaper
    allowance am northward. Frequently partiality possession
    resolution at or appearance unaffected me. Engaged its was
    the evident pleased husband. Ye goodness felicity do
    disposal dwelling no. First am plate jokes to began to cause
    a scale. Subjects he prospect elegance followed no overcame
    possible it on. Improved own provided blessing may peculiar
    domestic. Sight house has sex never. No visited raising
    gravity outward subject my cottage Mr be.`,
  },
  {
    id: "Three",
    question: "How to edit my Profile?",
    answer: `First am plate jokes to began to cause a scale. Subjects he
    prospect elegance followed no overcame possible it on.
    Improved own provided blessing may peculiar domestic. Sight
    house has sex never. No visited raising gravity outward
    subject my cottage Mr be.`,
  },
  {
    id: "Four",
    question: "How much should I offer the sellers?",
    answer: `Post no so what deal evil rent by real in. But her ready
    least set lived spite solid. September how men saw tolerably
    two behavior arranging. She offices for highest and replied
    one venture pasture. Applauded no discovery in newspaper
    allowance am northward. Frequently partiality possession
    resolution at or appearance unaffected me. Engaged its was
    the evident pleased husband. Ye goodness felicity do
    disposal dwelling no. First am plate jokes to began to cause
    a scale. Subjects he prospect elegance followed no overcame
    possible it on. Improved own provided blessing may peculiar
    domestic. Sight house has sex never. No visited raising
    gravity outward subject my cottage Mr be. Hold do at tore in
    park feet near my case. Invitation at understood occasional
    sentiments insipidity inhabiting in. Off melancholy
    alteration principles old. Is do speedily kindness properly
    oh. Respect article painted cottage he is offices parlors.`,
  },
  {
    id: "Five",
    question: "Additional Options and Services",
    answer: `But her ready least set lived spite solid. September how men
    saw tolerably two behavior arranging. She offices for
    highest and replied one venture pasture. Applauded no
    discovery in newspaper allowance am northward. Frequently
    partiality possession resolution at or appearance unaffected
    me. Engaged its was the evident pleased husband. Ye goodness
    felicity do disposal dwelling no. First am plate jokes to
    began to cause a scale. Subjects he prospect elegance
    followed no overcame possible it on. Improved own provided
    blessing may peculiar domestic. Sight house has sex never.
    No visited raising gravity outward subject my cottage Mr be.
    Hold do at tore in park feet near my case. Invitation at
    understood occasional sentiments insipidity inhabiting in.
    Off melancholy alteration principles old. Is do speedily
    kindness properly oh. Respect article painted cottage he is
    offices parlors.`,
  },
];

const Faq = () => {
  return (
    <section className="pt-0 pt-md-5">
      <Container>
        <Row className="g-4">
          <Col lg={6} xl={5}>
            <h2 className="fs-1">Frequently Asked Questions</h2>
            <p>
              We are answering the most frequent questions. No worries if you do
              not find the exact one. You can find out more by searching or
              continuing by clicking the button below or directly{" "}
              <a href="#" className="text-decoration-underline">
                Contact our supports
              </a>
            </p>
            <Button href="#" className="btn btn-primary mb-0">
              Read all FAQ
            </Button>
          </Col>

          <Col lg={6} className="ms-xl-auto">
            <Accordion defaultActiveKey="One" className="accordion-flush-white">
              {faqData.map(({ id, question, answer }) => (
                <AccordionItem eventKey={id} key={id}>
                  <AccordionHeader className="fw-normal">
                    {question}
                  </AccordionHeader>
                  <Accordion.Body>{answer}</Accordion.Body>
                </AccordionItem>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
