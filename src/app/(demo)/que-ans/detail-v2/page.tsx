import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import AnswerCard from "./component/AnswerCard";
import AnswerCard2 from "./component/AnswerCard2";
import QuestionsBox from "./component/QuestionsBox";
import RightSidebar from "./component/RightSideBar";
import SuggestAns from "./component/SuggestAns";
import Tabes from "./component/Tabes";

const page = () => {
  return (
    <main>
      <section className="pt-8">
        <Container>
          <Row className="g-4">
            <Col xl={9}>
              <div className="vstack gap-4">
                <QuestionsBox />
                <Tabes />
                <AnswerCard />
                <AnswerCard2 />
                <SuggestAns />
                <div
                  className="alert alert-success d-md-flex align-items-center"
                  role="alert"
                >
                  <a href="#" className="btn btn-sm btn-dark mb-2 mb-md-0">
                    Sign up for free
                  </a>
                  <p className="mb-0 ms-md-3">
                    To join this conversation on Q&A. Already have an account?{" "}
                    <Link href="#" className="fw-semibold">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </Col>
            <RightSidebar />
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default page;
