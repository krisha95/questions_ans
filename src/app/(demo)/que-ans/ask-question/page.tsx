import React from 'react'
import Questions from './component/Questions'
import HomeNavbar from '@/component/navbar/HomeNavbar'
import Footer from '../index/components/Footer'

const page = () => {
    return (
        <>
            <HomeNavbar />
            <main>
                <Questions />
            </main>
            <Footer />
        </>
    )
}

export default page