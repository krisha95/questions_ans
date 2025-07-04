import { Badge, Card, CardBody, CardFooter, CardText, CardTitle, Col, Container, Row } from 'react-bootstrap';
import { BsFillCalendar2PlusFill } from 'react-icons/bs';
import blog6 from '@/assets/images/blog/03.jpg';
import blog1 from '@/assets/images/blog/04.jpg';
import blog4 from '@/assets/images/blog/05.jpg';
import blog5 from '@/assets/images/blog/06.jpg';
import blog3 from '@/assets/images/blog/07.jpg';
import blog7 from '@/assets/images/blog/08.jpg';
import blog2 from '@/assets/images/blog/09.jpg';
import blog9 from '@/assets/images/blog/10.jpg';
import blog8 from '@/assets/images/blog/12.jpg';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Paginations from './Paginations';

type BlogDataType = {
    image: StaticImageData,
    category: string,
    badgeColor: string,
    date: string,
    title: string,
    description: string,
    author: string

}

const blogsData: BlogDataType[] = [
    {
        image: blog1,
        category: 'Research',
        badgeColor: 'success',
        date: 'April 28, 2024',
        title: '7 common mistakes everyone makes while traveling',
        description: 'Prospective students should start broadly and then narrow their list down to.',
        author: 'Joan Wallace',
    },
    {
        image: blog2,
        category: 'Lifestyle',
        badgeColor: 'danger',
        date: 'Jun 01, 2024',
        title: 'Bad habits that people in the business industry need to quit',
        description: 'Prospective students should start broadly and then narrow their list down to.',
        author: 'Louis Ferguson',
    },
    {
        image: blog3,
        category: 'Travel',
        badgeColor: 'warning',
        date: 'Jun 15, 2024',
        title: 'Around the web: 20 fabulous info graphics about business',
        description: 'Prospective students should start broadly and then narrow their list down to.',
        author: 'Frances Guerrero',
    },
    {
        image: blog4,
        category: 'Blogger',
        badgeColor: 'info',
        date: 'Aug 29, 2024',
        title: 'How 10 worst business fails of all time could have been prevented',
        description: 'Prospective students should start broadly and then narrow their list down to.',
        author: 'Dennis Barrett',
    },
    {
        image: blog5,
        category: 'Research',
        badgeColor: 'success',
        date: 'Sep 01, 2024',
        title: "Ten unconventional tips about startups that you can't learn from books",
        description: 'Prospective students should start broadly and then narrow their list down to.',
        author: 'Jacqueline Miller',
    },
    {
        image: blog6,
        category: 'Technology',
        badgeColor: 'primary',
        date: 'Sep 15, 2024',
        title: 'Never underestimate the influence of social media',
        description: 'Prospective students should start broadly and then narrow their list down to.',
        author: 'Lori Stevens',
    },
    {
        image: blog7,
        category: 'Technology',
        badgeColor: 'primary',
        date: 'Sep 28, 2024',
        title: 'Best Twitter accounts for learning about investment',
        description: 'Narrow their list down to colleges that best fit their needs, experts say.',
        author: 'Billy Vasquez',
    },
    {
        image: blog8,
        category: 'Research',
        badgeColor: 'success',
        date: 'Oct 01, 2024',
        title: 'This is why this year will be the year of startups',
        description: 'Narrow their list down to colleges that best fit their needs, experts say.',
        author: 'Carolyn Ortiz',
    },
    {
        image: blog9,
        category: 'Business',
        badgeColor: 'warning',
        date: 'Oct 18, 2024',
        title: 'This is why this year will be the year of startups',
        description: 'Departure defective arranging rapturous did believe him all had supported. Family months lasted.',
        author: 'Lori Stevens',
    },
];

const Blogs = () => {
    return (
        <section className="py-0">
            <Container>
                <Row className="g-4">
                    {blogsData.map((blog, index) => (
                        <Col md={6} lg={4} key={index}>
                            <Card className="p-2 h-100">
                                <Link href="/blog-detail">
                                    <Image src={blog.image} alt={blog.title} />
                                </Link>
                                <CardBody className="px-3">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <Badge bg={blog.badgeColor} className="bg-opacity-10 text-capitalize text-" text={blog.badgeColor}>
                                            {blog.category}
                                        </Badge>
                                        <span className="mb-0">
                                            <BsFillCalendar2PlusFill className="me-2" />
                                            {blog.date}
                                        </span>
                                    </div>
                                    <CardTitle as="h5">
                                        <Link href="/blog-detail">{blog.title}</Link>
                                    </CardTitle>
                                    <CardText>{blog.description}</CardText>
                                </CardBody>
                                <CardFooter className="pt-0 px-3">
                                    <h6 className="mb-0 mt-2">
                                        By <Link href="#">{blog.author}</Link>
                                    </h6>
                                </CardFooter>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Paginations />
            </Container>
        </section>
    );
};

export default Blogs;
