import LeftSide from "@/component/LeftSide";
import { Container, Row } from "react-bootstrap";
import Hero from "./components/Hero";
import Qutions from "./components/Qutions";
import RightSideBar from "./components/RightSideBar";
import Footer from "./components/Footer";
import HomeNavbar from "@/component/navbar/HomeNavbar";

const page = () => {
  return (
    <>
      <HomeNavbar />
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
        <Footer />
      </main>
    </>
  );
};

export default page;
