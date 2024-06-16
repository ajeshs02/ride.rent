import { useEffect, useState } from 'react'
import { useAppContext } from '../../../context/AppContext'
import VehicleCategories from '../Vehicle Categories/VehicleCategories'
import './Landing.scss'
import { FaRegThumbsUp } from 'react-icons/fa'

const Landing = () => {
  const { selectedType } = useAppContext()

  const [isIphone, setIsIphone] = useState(false)
  const [backgroundImage, setBackgroundImage] = useState(
    '/cars-placeholder.webp'
  )

  useEffect(() => {
    // Check if the device is an iPhone
    const isIphone = /iPhone/i.test(navigator.userAgent)
    setIsIphone(isIphone)

    const loadImage = async () => {
      try {
        setTimeout(async () => {
          const module = await import(
            `../../../assets/img/bg/${selectedType.value}.webp`
          )
          const img = new Image()
          img.src = module.default
          img.onload = () => {
            setBackgroundImage(module.default)
          }
        }, 0)
      } catch (error) {
        console.error('Failed to load image:', error)
      }
    }

    loadImage()
  }, [selectedType])

  return (
    <section className="landing-section  ">
      <div className="landing-top">
        {/* mobile visible button */}
        <button className="yellow-gradient default-btn list-btn">
          List your vehicle for FREE
        </button>
        {/* landing top */}
        <div
          className={`landing-bg `}
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div
            className={`landing-text-container ${
              isIphone ? 'iphone-style' : ''
            }`}
          >
            <p className="trust">
              <FaRegThumbsUp />
              Most Trusted Car Rental Services In Dubai!
            </p>
            <div>
              <p>Best Prices & No Commission</p>
              <p>More than 1000+ options to choose from...</p>
            </div>
            <button id="view-all-cars" className="default-btn yellow-gradient">
              View all cars
            </button>
          </div>
        </div>
        {/* Vehicle categories component */}
        <VehicleCategories />
      </div>
      <div className="landing-bottom">
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
