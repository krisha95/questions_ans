import React from 'react'
import { Container } from 'react-bootstrap'
import Search from './component/Search'
import CateoryCards from './component/categoryCards'
import SuggestedCategory from './component/SuggestedCategory'

const Page = () => {
    return (
        <section className="pt-8">
            <Container>
                <Search />
                <CateoryCards />
                <SuggestedCategory />
            </Container>
        </section>
    )
}

export default Page