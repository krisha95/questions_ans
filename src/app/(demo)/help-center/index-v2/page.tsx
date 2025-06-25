import React from "react";
import Banner from "./component/Banner";
import { Container, Row } from "react-bootstrap";
import LeftSideBar from "./component/LeftSideBar";

const page = () => {
  return (
    <main>
      <Banner />
      <section className="pt-0">
        <Container>
          <Row>
            <LeftSideBar />
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default page;
