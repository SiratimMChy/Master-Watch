import { Outlet } from 'react-router'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Toaster } from 'react-hot-toast'

const RootLayout = () => {
    return (
        <div>
            <Toaster position="top-center" />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default RootLayout