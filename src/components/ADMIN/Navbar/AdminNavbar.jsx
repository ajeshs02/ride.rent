import './AdminNavbar.scss'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../../../assets/img/logo/header_logo.webp'

const AdminNavbar = ({ isOpen, toggleSidebar, isSmallScreen }) => {
  return (
    <header className="admin-header padding main-wrapper">
      <nav className="nav-container">
        <div className="nav-left">
          <button
            aria-label="Hamburger"
            className="hamburger-btn"
            onClick={toggleSidebar}
          >
            <GiHamburgerMenu className={` hamburger-icon `} />
          </button>
          <div className="logo-container">
            <Link to={'/admin'} className="header-logo">
              <figure>
                <img src={logo} className="header-img" alt="Ride Rent Logo" />
                <figcaption>
                  Quick way to get a <span>Ride On Rent</span>
                </figcaption>
              </figure>
            </Link>
          </div>
        </div>
        <div className="nav-items-container"></div>

        {/* sidebar */}
        {isOpen && isSmallScreen && (
          <div className="black-overlay " onClick={toggleSidebar} />
        )}
      </nav>
    </header>
  )
}
export default AdminNavbar
