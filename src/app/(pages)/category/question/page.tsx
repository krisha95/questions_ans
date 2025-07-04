import React from 'react'
import { Container, Row } from 'react-bootstrap'
import LeftSide from './component/LeftSide'
import RightSide from './component/RightSide'
import Question from './component/Question'
import HomeNavbar from '@/component/navbar/HomeNavbar'

const page = () => {
  return (
    <>
      <HomeNavbar />
      <main>
        <section className='p-8'>
          <Container>
            <Row className='g-4'>
              <LeftSide />
              <Question />
              <RightSide />
            </Row>
          </Container>
        </section>
      </main>
    </>

  )
}

export default page