import React from 'react'
import Banner from './component/Banner'
import Category from './component/Category'
import QuetionSlider from './component/QuetionSlider'
import About from './component/About'
import Actions from './component/Actions'
import Footer from './component/Footer'
import Navbar2 from '@/component/navbar/Navbar2'

const page = () => {
    return (
        <>
            <Navbar2 />
            <main>
                <Banner />
                <Category />
                <QuetionSlider />
                <About />
                <Actions />
            </main>
            <Footer />
        </>
    )
}

export default page