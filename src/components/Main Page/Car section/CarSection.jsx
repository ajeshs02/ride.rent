import ViewAllButton from '../../Button/ViewAllButton'
import SubCard from '../../Card/Car Card/Sub Card/SubCard'
import './CarSection.scss'
import { swiffyslider } from 'swiffy-slider'
import 'swiffy-slider/css'

const CarSection = () => {
  window.swiffyslider = swiffyslider

  window.addEventListener('load', () => {
    window.swiffyslider.init()
  })

  return (
    <section className="car-section wrapper">
      <h1>Explore the latest cars for rent in Dubai</h1>
      <div
        className="sub-card-container  swiffy-slider slider-item-show2 .slider-item-reveal slider-item-snapstart slider-nav-caretfill slider-nav-dark slider-nav-outside-expand container slider-nav-autoplay slider-nav-autopause   slider-indicators-dark slider-indicators-outside slider-indicators-sm"
        data-slider-nav-autoplay-interval="2000"
      >
        <div className="slider-container " id="slider2">
          <SubCard />
          <SubCard />
          <SubCard />
          <SubCard />
          <SubCard />
          <SubCard />
          <SubCard />
        </div>

        <button type="button" className="slider-nav"></button>
        <button type="button" className="slider-nav slider-nav-next"></button>

        <div className="slider-indicators">
          <button className="active"></button>
          <button></button>
          <button></button>
        </div>
      </div>
      <ViewAllButton value={'Cars'} />
    </section>
  )
}
export default CarSection
