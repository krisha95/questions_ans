import React from "react";
import { Container, Row } from "react-bootstrap";
import MainContent from "./component/MainContent";
import RightSide from "./component/RightSide";
import HomeNavbar from "@/component/navbar/HomeNavbar";

const page = () => {
  return (
    <>
      <HomeNavbar />
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
    </>
  );
};

export default page;
