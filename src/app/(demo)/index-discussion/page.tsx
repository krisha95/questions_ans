import HomeNavbar from '@/component/navbar/HomeNavbar'
import Banner from './component/Banner'
import Content from './component/Content'

const page = () => {
    return (
        <>
            <HomeNavbar />
            <main>
                <Banner />
                <Content />
            </main>
        </>
    )
}

export default page