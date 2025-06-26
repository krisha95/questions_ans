import React from "react";
import Banner from "./component/Banner";
import { Col, Container, Row } from "react-bootstrap";
import LeftSideBar from "./component/LeftSideBar";
import HelpBox from "./component/HelpBox";
import Faq from "./component/Faq";
import Cta from "./component/Cta";

const page = () => {
  return (
    <main>
      <Banner />
      <section className="pt-0">
        <Container>
          <Row>
            <LeftSideBar />
            <Col xl={9}>
              <HelpBox />
              <Faq />
              <Cta />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default page;
