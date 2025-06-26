import React from 'react'
import Banner from './component/Banner'
import Category from './component/Category'
import QuetionSlider from './component/QuetionSlider'
import About from './component/About'
import Actions from './component/Actions'
import Footer from './component/Footer'

const page = () => {
    return (
        <>
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