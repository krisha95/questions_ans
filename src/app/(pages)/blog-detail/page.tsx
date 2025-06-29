import React from "react";
import { Container, Row } from "react-bootstrap";
import MainContent from "./component/MainContent";
import RightSide from "./component/RightSide";

const page = () => {
  return (
    <main>
      <section className="pt-8">
        <Container>
          <Row className="g-4">
            <MainContent />
            <RightSide />
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default page;
