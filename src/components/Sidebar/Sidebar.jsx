import './Sidebar.scss'
import logo from '../../assets/img/logo/header_logo.webp'
import { IoClose } from 'react-icons/io5'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="logo-container">
        <div href="index.html" className="header_logo">
          <figure>
            <img src={logo} className="header-img" alt="Ride Rent Logo" />
            <figcaption>
              Quick way to get a <span>Ride On Rent</span>
            </figcaption>
          </figure>
        </div>

        <button
          aria-label="Sidebar Toggle"
          className="hamburger-close-btn "
          onClick={toggleSidebar}
        >
          <IoClose className={`hamburger-icon `} />
        </button>
      </div>
    </aside>
  )
}
export default Sidebar
