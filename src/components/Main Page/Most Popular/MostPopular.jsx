import './MostPopular.scss'
import ViewAllButton from '../../Button/ViewAllButton'
import { useAppContext } from '../../../context/AppContext'
import MainCard from '../../Card/Vehicle Card/Main Card/MainCard'

const MostPopular = () => {
  const { selectedType, selectedLocation } = useAppContext()

  return (
    <section className="popular-section wrapper">
      <h1>
        Explore the most popular {selectedType.name} for rent in{' '}
        {selectedLocation.name}
      </h1>
      <div
        className={`swiffy-slider slider-item-show3 slider-item-show2-sm slider-nav-caretfill slider-nav-dark slider-nav-sm slider-nav-outside  slider-indicators-dark  slider-indicators-outside slider-indicators-sm slider-nav-animation slider-nav-animation-appear slider-nav-animation-fast  '
        `}
        data-slider-nav-autoplay-interval="2000"
      >
        <div className={`slider-container`} id="slider2">
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
        </div>

        <button
          type="button"
          aria-label="carousel navigation button"
          className="slider-nav"
        ></button>
        <button
          type="button"
          aria-label="carousel navigation button"
          className="slider-nav slider-nav-next"
        ></button>

        <div className="slider-indicators">
          <button
            aria-label="carousel navigation button"
            className="active"
          ></button>
          <button aria-label="carousel navigation button"></button>
          <button aria-label="carousel navigation button"></button>
        </div>
      </div>
      <ViewAllButton value={'Cars'} />
    </section>
  )
}
export default MostPopular
