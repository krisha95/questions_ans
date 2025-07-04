import { Container, Row } from "react-bootstrap"
import Banner from "./component/Banner"
import Content from "./component/Content"
import RightSide from "./component/RightSide"
import NavBar from "../component/NavBar"
import Footer from "../component/Footer"

const page = () => {
    return (
        <>
            <NavBar />
            <main>
                <Banner />
                <section className="pt-0">
                    <Container>
                        <Row className="g-4">
                            <Content />
                            <RightSide />
                        </Row>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default page