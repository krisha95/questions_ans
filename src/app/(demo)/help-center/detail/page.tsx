import React from 'react'
import Banner from './component/Banner'
import HelpsDetails from './component/HelpsDetails'
import Action from './component/Action'
import NavBar from '../component/NavBar'
import Footer from '../../que-ans/index/components/Footer'

const page = () => {
    return (
        <>
            <NavBar />
            <main>
                <Banner />
                <HelpsDetails />
                <Action />
            </main>
            <Footer />
        </>
    )
}

export default page