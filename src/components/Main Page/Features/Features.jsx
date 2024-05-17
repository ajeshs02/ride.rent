import { useAppContext } from '../../../context/AppContext'
import './Features.scss'
import { featureCards } from '.'
import FeaturesCard from '../../Card/Features Card/FeaturesCard'

const Features = () => {
  const { selectedLocation } = useAppContext()

  return (
    <div className="features_section wrapper">
      <h1>
        Enjoy ease and peace of mind when renting a car in{' '}
        {selectedLocation.name}
      </h1>

      <div className="description">
        <p>
          Discover the best of Dubai with our affordable and reliable car rental
          service.
          <br /> Whether you're visiting the main locations or exploring hidden
          gems, our diverse fleet offers the perfect match for your travel
          needs. <br /> Experience hassle-free car rental with transparent
          pricing and no hidden fees.
        </p>
        <br />
        <p>
          Our commitment to reliability means your vehicle will be ready and
          waiting, wherever and whenever you need it. Choose us for a
          stress-free car rental experience in Dubai, and drive away with
          confidence and comfort.
        </p>
      </div>

      <div className="feature_card_container">
        {featureCards.map((feature) => (
          <FeaturesCard key={feature.key} data={feature} />
        ))}
      </div>
    </div>
  )
}
export default Features
