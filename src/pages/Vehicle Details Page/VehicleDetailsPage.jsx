import './VehicleDetailsPage.scss'
import ProfileCard from '../../components/Card/Owner Profile Card/ProfileCard'
import WhyOpt from '../../components/Common/Why Opt/WhyOpt'
import Description from './Description/Description'
import Features from './Features/Features'
import Specification from './Specifications/Specification'
import Images from './vehicle images/Images'
import Social from './Social Media Links/Social'
import { IoLocationOutline } from 'react-icons/io5'

const VehicleDetailsPage = () => {
  return (
    <section className="vehicle-details-section wrapper">
      {/* Details heading */}
      <div className="heading-container">
        <h1>{`Chevrolet Camaro`}</h1>
        <p>
          Dubai Car Rental Convertible, 4 Seater, Premium Comfort, Heater and
          Ventilated Seats, Advanced OLED Display Technology.
        </p>

        <div className="location-container">
          <div className="location">
            <IoLocationOutline />
          </div>
          <span>Location : </span> Miami St, Destin, FL 32550, USA
        </div>
      </div>

      {/* Vehicle Details*/}
      <div className="details-container">
        {/* container left */}
        <div className="details">
          {/* Images */}
          <Images />

          {/* Specification */}
          <Specification />

          {/* Features */}
          <Features />

          {/* Description */}
          <Description />
        </div>

        {/* container right */}
        <div className="right">
          {/* Profile */}
          <ProfileCard />
          {/* Social Media Links */}
          <Social />
        </div>
      </div>

      {/* Why Opt Ride.Rent and Available Locations */}
      <WhyOpt />
    </section>
  )
}
export default VehicleDetailsPage
