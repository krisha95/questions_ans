import { Container, Row } from "react-bootstrap"
import Banner from "./component/Banner"
import Content from "./component/Content"
import RightSide from "./component/RightSide"

const page = () => {
    return (
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
    )
}

export default page