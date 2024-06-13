import './VehicleDetailsPage.scss'
import ProfileCard from '../../components/Card/Owner Profile Card/ProfileCard'
import WhyOpt from '../../components/Common/Why Opt/WhyOpt'
import Description from './Description/Description'
import Features from './Features/Features'
import Specification from './Specifications/Specification'
import Images from './vehicle images/Images'
import Social from './Social Media Links/Social'
import { IoLocationOutline } from 'react-icons/io5'
import MobileProfileCard from '../../components/Card/Mobile Profile Card/MobileProfileCard'
import { useRef } from 'react'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

const VehicleDetailsPage = () => {
  const detailsSectionRef = useRef(null)
  const isInViewPort = useIntersectionObserver(detailsSectionRef)

  return (
    <section className="vehicle-details-section wrapper">
      {/* Details heading */}
      <div className="heading-container">
        <h1 className="custom-heading">{`Chevrolet Camaro`}</h1>
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
      <section className="details-section" ref={detailsSectionRef}>
        <div className="details-container">
          {/* container left */}
          <div className="details">
            {/* Images */}
            <Images />

            {/* Specification */}
            <Specification />

            {/* Features */}
            <Features />
          </div>

          {/* container right */}
          <div className="right">
            {/* Profile */}
            <ProfileCard />

            {/* Profile Card for Mobile View */}
            {isInViewPort && <MobileProfileCard />}

            {/* Social Media Links */}
            <Social />
          </div>
        </div>

        {/* Description */}
        <Description />
      </section>

      {/* Why Opt Ride.Rent and Available Locations */}
      <WhyOpt />
    </section>
  )
}
export default VehicleDetailsPage
