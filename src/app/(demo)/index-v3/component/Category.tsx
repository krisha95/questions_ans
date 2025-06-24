import React from 'react'

import img01 from "@/assets/images/elements/category/01.svg"
import img02 from "@/assets/images/elements/category/02.svg"
import img03 from "@/assets/images/elements/category/03.svg"
import img04 from "@/assets/images/elements/category/04.svg"
import img05 from "@/assets/images/elements/category/05.svg"
import img06 from "@/assets/images/elements/category/06.svg"
import img07 from "@/assets/images/elements/category/07.svg"
import img08 from "@/assets/images/elements/category/08.svg"
import img09 from "@/assets/images/elements/category/09.svg"
import img10 from "@/assets/images/elements/category/10.svg"
import img11 from "@/assets/images/elements/category/11.svg"
import img12 from "@/assets/images/elements/category/12.svg"
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'

const categories = [
    { icon: img06, title: "Law & Legal Issue" },
    { icon: img09, title: "History" },
    { icon: img12, title: "Language & Literature" },
    { icon: img11, title: "Technology" },
    { icon: img02, title: "Business & Finance" },
    { icon: img04, title: "Health" },
    { icon: img08, title: "Mechanics" },
    { icon: img10, title: "Construction" },
    { icon: img01, title: "Maths & Arithmetics" },
    { icon: img07, title: "TV & News" },
    { icon: img05, title: "Tax Accountants" },
    { icon: img03, title: "All Categories" },
]

const Category = () => {
    return (
        <section className="pt-xl-9">
            <Container>
                <Row className="g-4">
                    {categories.map((category, index) => (
                        <Col sm={6} md={4} lg={3} xxl={2} key={index}>
                            <div className="card hstack gap-3 p-3 h-100">
                                <Image src={category.icon} className="h-100 w-40px" alt={category.title} />
                                <h6 className="mb-0">
                                    <Link href="/category-detail" className="stretched-link">
                                        {category.title}
                                    </Link>
                                </h6>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default Category
