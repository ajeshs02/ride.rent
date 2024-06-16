import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import LazyLoader from '../components/Common/Loading/Loader'

import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Layout = () => {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: '4.84rem' }}>
        <Suspense fallback={<LazyLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
export default Layout
