import './VehicleCategories.scss'
import React, { useState } from 'react'
import { useAppContext } from '../../../context/AppContext'
import { VEHICLE_CATEGORIES } from '.'

const VehicleCategories = () => {
  const { selectedType, setSelectedType } = useAppContext()
  const [selectedCard, setSelectedCard] = useState(null)

  // Handle card selection
  const handleCardSelect = (categoryId) => {
    setSelectedCard(categoryId)
    // Scroll to the selected card
    const selectedCardIndex = VEHICLE_CATEGORIES.findIndex(
      (item) => item.id === categoryId
    )
    const sliderElement = document.querySelector('.swiffy-slider')
    window.swiffyslider.slideTo(sliderElement, selectedCardIndex)
  }

  return (
    <div
      className="landing-container swiffy-slider  slider-nav-autoplay slider-nav-autopause"
      data-slider-nav-autoplay-interval="2000"
    >
      <div className="slider-container" id="slider2">
        {VEHICLE_CATEGORIES.map((category) => (
          <div
            key={category.id}
            className={`vehicle_category_card ${
              selectedCard === category.id ? 'selected' : ''
            }`}
            onClick={() => {
              setSelectedType(category)
              handleCardSelect(category.id)
            }}
          >
            <div
              className={`category_icon_container ${
                selectedType.value === category.value ? 'yellow-gradient' : ''
              }`}
            >
              <img
                src={category.icon}
                alt={`${category.name} Icon`}
                className="vehicle_category_logo"
              />
            </div>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VehicleCategories
