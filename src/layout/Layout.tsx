import { Outlet } from 'react-router'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout