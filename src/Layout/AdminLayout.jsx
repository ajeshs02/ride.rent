import { Outlet } from 'react-router-dom'
import { useState, Suspense, useEffect } from 'react'
import LazyLoader from '../components/Common/Loading/Loader'
import AdminSidebar from '../components/ADMIN/Admin Sidebar/AdminSidebar'
import AdminNavbar from '../components/ADMIN/Navbar/AdminNavbar'
import useIsSmallScreen from '../hooks/useIsSmallScreen'

const AdminLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const isSmallScreen = useIsSmallScreen(1100)

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(false)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <AdminNavbar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        isSmallScreen={isSmallScreen}
      />
      <AdminSidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        isSmallScreen={isSmallScreen}
      />
      <main
        style={{
          marginTop: '4.84rem',
          marginLeft: isSmallScreen ? '' : '16rem',
          padding: '0.2rem',
        }}
      >
        <Suspense fallback={<LazyLoader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}
export default AdminLayout
