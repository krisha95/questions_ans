import React from 'react'
import Hero from './component/Hero'
import Solution from './component/Solution'
import Featured from './component/Featured'
import Faqs from './component/Faqs'
import NavBar from '../component/NavBar'

const page = () => {
    return (
        <>
            <NavBar />
            <main className="bg-mode">
                <Hero />
                <Solution />
                <Featured />
                <Faqs />
            </main>
        </>
    )
}

export default page