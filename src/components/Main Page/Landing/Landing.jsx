import VehicleCategories from '../Vehicle Categories/VehicleCategories'
import './Landing.scss'
import { FaRegThumbsUp } from 'react-icons/fa'

const Landing = () => {
  return (
    <section className="lading_section ">
      <div className="landing_top">
        <div className="landing_bg">
          <div className="landing_text_container">
            <p className="trust">
              <FaRegThumbsUp />
              Most Trusted Car Rental Services In Dubai!
            </p>
            <div id="type_scroll">
              <p>Best Prices & No Commission</p>
              <p>More than 1000+ options to choose from...</p>
            </div>
            <button id="view_all_cars" className="btn yellow_gradient">
              View all cars
            </button>
          </div>
        </div>
        {/* Vehicle categories component */}
        <VehicleCategories />
      </div>
      <div className="landing_bottom">
        <p>
          <span>Ride.Rent</span> ensures that you have access to the best and
          <span> most affordable car rental services in Dubai. </span>
          Take advantage of our exceptional offers on car rentals throughout
          Dubai, with Ride On Rent, each car is well maintained and pre-serviced
          for efficient performance. <br />
          For your peace of mind, all vehicles are insured and come with
          dedicated agent assistance.
        </p>

        <div>
          <p>Find cars near you</p>
          <span> Dubai</span>
        </div>
      </div>
    </section>
  )
}
export default Landing
