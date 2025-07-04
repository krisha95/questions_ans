import React from 'react'
import { Container } from 'react-bootstrap'
import Search from './component/Search'
import CateoryCards from './component/categoryCards'
import SuggestedCategory from './component/SuggestedCategory'
import HomeNavbar from '@/component/navbar/HomeNavbar'

const Page = () => {
    return (
        <>
            <HomeNavbar />
            <main>
                <section className="pt-8">
                    <Container>
                        <Search />
                        <CateoryCards />
                        <SuggestedCategory />
                    </Container>
                </section>
            </main>
        </>
    )
}

export default Page