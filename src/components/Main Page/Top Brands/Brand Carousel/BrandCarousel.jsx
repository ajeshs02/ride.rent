import './BrandCarousel.scss'

const BrandsCarousel = ({ brands }) => {
  return (
    <div
      className="brand-container swiffy-slider slider-item-show3 slider-item-show2-sm slider-nav-caretfill slider-nav-dark slider-nav-sm slider-nav-outside slider-nav-autopause slider-indicators-dark slider-indicators-outside slider-indicators-sm slider-nav-animation slider-nav-autoplay slider-nav-autopause slider-nav-animation-appear slider-nav-animation-fast"
      data-slider-nav-autoplay-interval="2000"
    >
      <div className="slider-container" id="slider2">
        {brands.map((brand) => (
          <div key={brand.id} className={`brand-card slide-visible `}>
            <div className="image_box">
              <img
                src={brand.icon}
                alt={brand.brandName}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className="brand-info">
              <p>{brand.brandName}</p>
              <p>{brand.count} Cars</p>
            </div>
          </div>
        ))}
      </div>

      <button
        aria-label="carousel navigation button"
        type="button"
        className="slider-nav"
      ></button>
      <button
        aria-label="carousel navigation button"
        type="button"
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

export default BrandsCarousel
