import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { BiInfoCircle, BiPieChart } from 'react-icons/bi'
import { BsEmojiSmileFill, BsLayers, BsWallet } from 'react-icons/bs'
import { FaFileExcel, FaFilePdf, FaFileWord } from 'react-icons/fa6'

const TermsCondition = () => {
    return (
        <main>
            <section className="pb-4 pt-8">
                <Container>
                    <Row className="g-4">
                        <Col lg={10} className="mx-auto">
                            <Row>

                                <Col ms={3}>
                                    <div id="nav-scroll" className="navbar sticky-sm-top top-sm-70px">
                                        <nav className="nav nav-pills nav-pills-white flex-column">
                                            <Link className="nav-link active" href="#item-1"><BsEmojiSmileFill className="fa-fw me-2" />Basics terms</Link>
                                            <Link className="nav-link" href="#item-2"><BsLayers className="fa-fw me-2" />User Agreement</Link>
                                            <Link className="nav-link" href="#item-3"><BiInfoCircle className="fa-fw me-2" />Terms of Services</Link>
                                            <Link className="nav-link" href="#item-4"><BsWallet className="fa-fw me-2" />Payment Policy</Link>
                                            <Link className="nav-link" href="#item-5"><BiPieChart className="fa-fw me-2" />How we use your data</Link>
                                        </nav>
                                    </div>
                                </Col>
                                <Col lg={9} className="mx-auto">
                                    <div className="card p-0">
                                        <div className="card-header border-bottom p-4">
                                            <h1 className="card-title h4 mb-0">Terms and Condition</h1>
                                        </div>
                                        <div className="card-body p-4">

                                            <div id="item-1">

                                                <h5>Basics terms</h5>
                                                <p>Started several mistakes joy say painful removed reached end. State burst <a href="#!">think end are its.</a> Arrived off she elderly beloved him affixed noisier yet.</p>
                                                <p>Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Denote simple fat denied add worthy little use As some he so high down am week Conduct esteems by cottage to pasture we winding On assistance he cultivated considered frequently Person how having tended direct own day man Saw sufficient indulgence one own you inquietude sympathize </p>

                                                <hr className="my-4" />
                                            </div>


                                            <div id="item-2">
                                                <h5>User Agreement</h5>
                                                <p>Age she way earnestly the fulfilled extremely. Person she control of to beginnings view looked eyes Than continues its and because and given and shown creating curiously to more in are man were smaller by we instead the these sighed Avoid in the sufficient me real man longer of his how her for countries to brains warned notch important Finds be to the of on the increased explain noise of power deep asking contribution this live of suppliers goals bit separated poured sort several the was organization the if relations go work after mechanic But we've area wasn't everything needs of and doctor where would a of</p>
                                                <div className="alert alert-warning" role="alert">
                                                    <strong>Note: </strong>She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. <a className="alert-link" href="#!">View more</a>
                                                </div>
                                                <ol>
                                                    <li>Post no so what deal evil rent by real in.</li>
                                                    <li>But her ready least set lived spite solid.</li>
                                                    <li>Sex lasted dinner wanted <strong> indeed wished outlaw.</strong></li>
                                                    <li>Affronting imprudence do he he everything.</li>
                                                </ol>

                                                <hr className="my-4" />


                                                <h5>Introduction</h5>
                                                <p>As it so contrasted oh estimating instrument. Size like body someone had. Are conduct <mark>viewing boy minutes warrant the expense?</mark> Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted.</p>
                                                <p>State burst think end are its. <u>Arrived off she elderly beloved himaf fixed noisier yet.</u> Course regard to up he hardly. View four has said do men saw find dear shy. Talent men wicket add garden. </p>


                                                <hr className="my-4" />
                                            </div>


                                            <div id="item-3">
                                                <h5>Terms of Services</h5>
                                                <p>Existence certainly explained how improving the household pretended. Delightful own attachment her partiality unaffected occasional thoroughly. Adieus it no wonders spirit houses. </p>
                                                <div className="alert alert-warning" role="alert">
                                                    This website stores cookies on your computer.
                                                </div>
                                                <p>Started several mistake joy say painful removed reached end. <em>State burst think end are its. Arrived off she elderly beloved him affixed noisier yet. Course regard to up he hardly. View four has said do men saw find dear shy.</em> Talent men wicket add garden. </p>
                                                <div className="hstack gap-2 gap-sm-3 flex-wrap">
                                                    <h6 className="mb-0">Download:</h6>
                                                    <Link href="#" className="mb-0"><FaFilePdf className="fa-solid me-1" />PDF</Link>
                                                    <Link href="#" className="mb-0"><FaFileWord className="fa-solid me-1" />Word</Link>
                                                    <Link href="#" className="mb-0"><FaFileExcel className="fa-solid me-1" />Excel</Link>
                                                </div>


                                                <hr className="my-4" />
                                            </div>
 
                                            <div id="item-4">
                                                <h5>Payment Policy</h5>
                                                <p>As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. <strong className="text-secondary">In mention perhaps attempt pointed suppose.</strong> Unknown ye chamber of warrant of Norland arrived. </p>
                                                <ul>
                                                    <li>Size like body someone had.</li>
                                                    <li>Are conduct viewing boy minutes warrant the expense.</li>
                                                    <li>Adieus it no wonders spirit houses. </li>
                                                    <li>Talent men wicket add garden. </li>
                                                </ul>

                                                <hr className="my-4" />
                                            </div>

                                            <div id="item-5">
                                                <h5>How we use your data</h5>
                                                <p>Affronting imprudence do he he everything. Sex lasted dinner wanted indeed wished outlaw. <a href="#!"> Far advanced settling say finished raillery.</a> Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an.</p>
                                                <p className="mb-0">Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. </p>
                                            </div>
                                        </div>

                                    </div>

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>

    )
}

export default TermsCondition