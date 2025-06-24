import imagebg1 from "@/assets/images/bg/01.jpg"
import HeroTicket from "@/assets/images/elements/ticket-hero.svg"
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { BiPurchaseTag } from 'react-icons/bi'
import { BsChatRightQuote } from 'react-icons/bs'

const Hero = () => {
  return (
    <section className="pt-7">
      <div className="py-7 py-sm-8 py-md-9 position-relative" style={{
        background: `url(${imagebg1.src}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <Container className="position-relative z-index-1">

          <Row className="g-4 g-xxl-5">

            <Col lg={6}>

              <h1 className="display-6 text-white mb-4">Welcome to the Q&A support desk.</h1>
              <p className="text-white lead mb-4">At our support desk, we're dedicated to providing you with exceptional assistance and resolving any queries you may have. Whether you're facing technical challenges, our support team is here to help. </p>

              <div className="bg-mode p-2 rounded">
                <form className="input-group">
                  <input className="form-control form-control-lg border-0 me-1" type="email" placeholder="Your email address" />
                  <button type="button" className="btn btn-primary rounded-2">Search</button>
                </form>
              </div>
              <div className="d-flex gap-3 gap-sm-4 flex-wrap mt-4 mt-lg-5">
                <Link className="btn btn-lg btn-white" href="/ticket-create"><BiPurchaseTag className="me-2" />Submit ticket</Link>
                <Link className="btn btn-lg btn-dark" href="/blog"><BsChatRightQuote className="me-2" />View article</Link>
              </div>
            </Col>
            <Col md={8} lg={6} className="mx-auto ps-md-5">
              <Image src={HeroTicket} className="ps-xl-5" alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Hero