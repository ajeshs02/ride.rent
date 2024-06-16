import './AdminSidebar.scss'
import { IoClose } from 'react-icons/io5'
import logo from '../../../assets/img/logo/header_logo.webp'
import { sidebarContent } from '.'
import { Link, NavLink } from 'react-router-dom'

const AdminSidebar = ({ isOpen, toggleSidebar, isSmallScreen }) => {
  return (
    <aside
      className={`admin-sidebar ${!isSmallScreen && 'default'}  ${
        isOpen ? 'open' : 'closed'
      }`}
    >
      {isSmallScreen && (
        <button
          aria-label="Sidebar Toggle"
          className="hamburger-close-btn "
          onClick={toggleSidebar}
        >
          <IoClose className={`hamburger-icon `} />
        </button>
      )}
      <div className="sidebar-container">
        {sidebarContent.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.link}
              to={item.link}
              className={({ isActive, isPending }) =>
                isActive ? 'active' : isPending ? 'pending' : ''
              }
            >
              <Icon className="icon" />
              <span className="label">{item.label}</span>
            </NavLink>
          )
        })}
      </div>
    </aside>
  )
}
export default AdminSidebar
