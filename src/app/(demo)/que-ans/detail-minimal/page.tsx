import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import QuestionCart from "./component/QuestionCart";
import AnswerCard from "./component/AnswerCard";
import TitleSelect from "./component/TitleSelect";
import AnswerDetail from "./component/AnswerDetail";

const page = () => {
  return (
    <main>
      <section className="pt-8">
        <Container>
          <Row className="g-4">
            <Col xl={9} className="mx-auto">
              <div className="vstack gap-4">
                <QuestionCart />
                <AnswerCard />
                <TitleSelect />
                <AnswerDetail />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default page;
