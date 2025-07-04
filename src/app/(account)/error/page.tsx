import React from 'react'
import element from "@/assets/images/elements/error.svg"
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeftLong } from 'react-icons/fa6'
import HomeNavbar from '@/component/navbar/HomeNavbar'

const page = () => {
    return (
        <>
            <HomeNavbar />
            <section className="pt-8">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 text-center">
                            <Image src={element} className="h-200px h-md-500px mb-4" alt="" />
                            <h1 className="mb-3">Oops!</h1>
                            <h3 className="mb-3">We can't seem to find the page you're looking for.</h3>
                            <p className="mb-3">Either something went wrong or this page doesn't exist anymore.</p>
                            <Link href="/index" className="btn btn-primary-soft mb-0"><FaArrowLeftLong className="me-2" />Back to home page</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page