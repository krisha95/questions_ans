import React from 'react'
import Notifications from './component/Notifications'
import Navbar2 from '@/component/navbar/Navbar2'

const Page = () => {
    return (
        <>
            <Navbar2 />
            <main>
                <Notifications />
            </main>
        </>
    )
}

export default Page