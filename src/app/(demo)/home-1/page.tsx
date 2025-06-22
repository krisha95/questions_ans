import LeftSide from "@/component/LeftSide";
import { Container, Row } from "react-bootstrap";
import Hero from "./components/Hero";
import Qutions from "./components/Qutions";
import RightSideBar from "./components/RightSideBar";

const page = () => {
  return (
    <main>
      <Hero />
      <section className="pt-0">
        <Container>
          <Row>
            <LeftSide />
            <Qutions />
            <RightSideBar />
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default page;
