import { useEffect, useState } from 'react'
import './BrandCarousel.scss'
import { swiffyslider } from 'swiffy-slider'
import 'swiffy-slider/css'

const BrandsCarousel = ({ brands }) => {
  const [selectedCard, setSelectedCard] = useState(null)

  window.swiffyslider = swiffyslider

  window.addEventListener('load', () => {
    window.swiffyslider.init()
  })

  const handleCardSelect = (brandId) => {
    setSelectedCard(brandId)
    // Scroll to the selected card
    const selectedCardIndex = brands.findIndex((brand) => brand.id === brandId)
    const sliderElement = document.querySelector('.swiffy-slider')
    window.swiffyslider.slideTo(sliderElement, selectedCardIndex)
  }

  useEffect(() => {
    if (selectedCard !== null) {
      // Scroll to the selected card
      const selectedCardIndex = brands.findIndex(
        (brand) => brand.id === selectedCard
      )
      const sliderElement = document.querySelector('.swiffy-slider')
      window.swiffyslider.slideTo(sliderElement, selectedCardIndex)
    }
  }, [selectedCard])

  return (
    <div
      className="brand-container swiffy-slider slider-item-show2 slider-item-reveal slider-item-snapstart slider-nav-caretfill slider-nav-dark slider-nav-outside-expand container slider-nav-autoplay slider-nav-autopause slider-indicators-dark slider-indicators-outside slider-indicators-sm slider-nav-animation "
      data-slider-nav-autoplay-interval="2000"
    >
      <div className="slider-container" id="slider2">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className={`brand-card ${
              selectedCard === brand.id ? 'selected' : ''
            }`}
            onClick={() => handleCardSelect(brand.id)}
          >
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

      <button type="button" className="slider-nav"></button>
      <button type="button" className="slider-nav slider-nav-next"></button>

      <div className="slider-indicators">
        <button className="active"></button>
        <button></button>
        <button></button>
      </div>
    </div>
  )
}

export default BrandsCarousel
