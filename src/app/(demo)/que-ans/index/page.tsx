"use client"
import LeftSide from "@/component/LeftSide";
import { Container, Row } from "react-bootstrap";
import Hero from "./components/Hero";
import Qutions from "./components/Qutions";
import RightSideBar from "./components/RightSideBar";
import Footer from "./components/Footer";
import HomeNavbar from "@/component/navbar/HomeNavbar";
import { FaSlidersH } from "react-icons/fa";
import { useState } from "react";

const page = () => {
  const [showLeft, setShowLeft] = useState(false);
  return (
    <>
      <HomeNavbar />
      <main>
        <Hero />
        <section className="pt-0">
          <Container>
            <Row>
              <LeftSide show={showLeft} setShow={setShowLeft} />
              <Qutions />
              <RightSideBar />
            </Row>
          </Container>
        </section>
        <Footer />
      </main>
      <div className="text-center d-grid position-fixed start-0 bottom-0 w-100" style={{ zIndex: "1030" }}>
        <button onClick={() => setShowLeft(true)} className="btn btn-primary rounded-0 py-2 mb-0 d-xxl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <FaSlidersH className="me-2" />My menu
        </button>
      </div >
    </>
  );
};

export default page;
