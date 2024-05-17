import './VehicleCategories.scss'
import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../../context/AppContext'
import { swiffyslider } from 'swiffy-slider'
import 'swiffy-slider/css'
import { VEHICLE_CATEGORIES } from '.'

const VehicleCategories = () => {
  const { selectedType, setSelectedType } = useAppContext()
  const [selectedCard, setSelectedCard] = useState(null)

  // Initialize Swiffy Slider
  window.swiffyslider = swiffyslider

  window.addEventListener('load', () => {
    window.swiffyslider.init()
  })

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

  // Scroll to selected card
  useEffect(() => {
    if (selectedCard !== null) {
      const selectedCardIndex = VEHICLE_CATEGORIES.findIndex(
        (item) => item.id === selectedCard
      )
      const sliderElement = document.querySelector('.swiffy-slider')
      window.swiffyslider.slideTo(sliderElement, selectedCardIndex)
    }
  }, [selectedCard])

  return (
    <div
      className="landing-container swiffy-slider  slider-nav-autoplay"
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
              handleCardSelect(category)
              handleCardSelect(category.id)
            }}
          >
            <div
              className={`category_icon_container ${
                selectedType.value === category.value ? 'yellow_gradient' : ''
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
      {/*
      <button type="button" className="slider-nav"></button>
      <button type="button" className="slider-nav slider-nav-next"></button>

      <div className="slider-indicators">
        <button className="active"></button>
        <button></button>
        <button></button>
      </div> */}
    </div>
  )
}

export default VehicleCategories
