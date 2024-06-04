import './NotFound.scss'
import NotFoundImg from '../../assets/img/general/404.webp'
import logo from '../../assets/img/logo/header_logo.webp'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

const NotFound = () => {
  return (
    <>
      <section className="error-section">
        <div className="error-top">
          <img src={NotFoundImg} alt="404 Not Found" />
        </div>
        {/* <p className="oops">Oops! page not found!</p> */}
        <div className="error-bottom">
          <h1>Spacecraft Rental</h1>
          <h2>Coming Soon!</h2>

          <button className="yellow-gradient gradient-btn">
            Check out the active offerings now
          </button>

          {/* logo */}
          <div className="logo-container">
            <Link to={'/'} className="header-logo">
              <figure>
                <img src={logo} className="header-img" alt="Ride Rent Logo" />
                <figcaption>
                  Quick way to get a <span>Ride On Rent</span>
                </figcaption>
              </figure>
            </Link>
          </div>

          <div className="text-bottom">
            <p>
              <span>Ride.Rent</span> ensures that you have access to the best
              and
              <span> most affordable car rental services in Dubai. </span>
              Take advantage of our exceptional offers on car rentals throughout
              Dubai, with Ride On Rent, each car is well maintained and
              pre-serviced for efficient performance. <br />
              For your peace of mind, all vehicles are insured and come with
              dedicated agent assistance.
            </p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </>
  )
}
export default NotFound
