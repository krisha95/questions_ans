import React from 'react'
import Supports from './component/Supports'

const page = () => {
    return (
        <main>
            <section className="pt-8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto text-center">
                            <h6 className="text-primary">Supports</h6>
                            <h1>Submit a Request</h1>
                            <p className="mb-0">Can’t find the answer you’re looking for? Don't worry! Get in touch with the Docs Support team, we will be glad to assist you.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Supports />
        </main>
    )
}

export default page