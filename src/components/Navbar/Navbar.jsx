import './Navbar.scss'
import logo from '../../assets/img/logo/header_logo.webp'
import { IoLanguage } from 'react-icons/io5'
import { FaLink, FaLocationDot } from 'react-icons/fa6'
import { MdManageSearch } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <header className="header wrapper">
      <nav className="">
        <div className="nav-left">
          <button
            aria-label="Hamburger"
            className="hamburger-btn"
            onClick={toggleSidebar}
          >
            <GiHamburgerMenu className={` hamburger-icon `} />
          </button>
          <div className="logo-container">
            <div href="index.html" className="header-logo">
              <figure>
                <img src={logo} className="header-img" alt="Ride Rent Logo" />
                <figcaption>
                  Quick way to get a <span>Ride On Rent</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="nav-items-container">
          <ul>
            <li className="language">
              <div className="nav_item ">
                <IoLanguage className="nav_items_icon " /> <span>English</span>
              </div>
            </li>
            <li>
              <div className="nav_item">
                <FaLocationDot className="nav_items_icon" /> <span>Dubai</span>
              </div>
            </li>
            <li className="links">
              <div className="nav_item ">
                <FaLink className="nav_items_icon " /> <span>Quick Links</span>
              </div>
            </li>
            <li>
              <div className="nav_item">
                <MdManageSearch className="nav_items_icon custom" />{' '}
                <span>Cars</span>
              </div>
            </li>

            <li className="list_btn">
              <button className="yellow-gradient btn">
                List your vehicle for FREE
              </button>
            </li>
          </ul>
        </div>

        {/* sidebar */}
        {isSidebarOpen && (
          <div className="black-overlay " onClick={toggleSidebar} />
        )}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </nav>
    </header>
  )
}
export default Navbar
