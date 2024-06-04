import './CommonSectionWrapper.scss'

const CommonSectionWrapper = ({ children }) => {
  return (
    <div
      className="sub-card-container swiffy-slider slider-item-show3 slider-item-show2-sm slider-nav-caretfill slider-nav-dark slider-nav-sm slider-nav-outside  slider-indicators-dark  slider-indicators-outside slider-indicators-sm slider-nav-animation slider-nav-animation-appear slider-nav-animation-fast  "
      data-slider-nav-autoplay-interval="2000"
    >
      <div className="slider-container " id="slider2">
        {children}
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
  )
}
export default CommonSectionWrapper
