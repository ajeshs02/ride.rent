import ViewAllButton from '../../Button/ViewAllButton'
import TypesCard from '../../Card/Types Card/TypesCard'
import './PopularTypes.scss'

const PopularTypes = () => {
  return (
    <section className="popular_section wrapper">
      <h1>Most Popular Car types</h1>
      <div
        className="sub-card-container swiffy-slider slider-item-show3 slider-item-show2-sm slider-nav-caretfill slider-nav-dark slider-nav-sm slider-nav-outside slider-nav-autopause slider-indicators-dark slider-indicators-outside slider-indicators-sm slider-nav-animation slider-nav-autoplay slider-nav-autopause slider-nav-animation-appear slider-nav-animation-fast "
        data-slider-nav-autoplay-interval="2000"
      >
        <div className="slider-container">
          <TypesCard />
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
export default PopularTypes
