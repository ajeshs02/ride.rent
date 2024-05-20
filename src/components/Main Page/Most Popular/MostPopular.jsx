import './MostPopular.scss'
import ViewAllButton from '../../Button/ViewAllButton'
import { useAppContext } from '../../../context/AppContext'
import MainCard from '../../Card/Vehicle Card/Main Card/MainCard'
import { useEffect, useState } from 'react'
import { swiffyslider } from 'swiffy-slider'
import 'swiffy-slider/css'

const MostPopular = () => {
  const { selectedType, selectedLocation } = useAppContext()
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768)

  window.swiffyslider = swiffyslider

  window.addEventListener('load', () => {
    window.swiffyslider.init()
  })

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsSmallScreen(window.innerWidth < 768)
  //   }

  //   window.addEventListener('resize', handleResize)

  //   if (isSmallScreen) {
  //     window.swiffyslider = swiffyslider
  //     window.swiffyslider.init()
  //   } else if (!isSmallScreen && window.swiffyslider) {
  //     document.querySelector('.swiffy-slider').classList.remove('swiffy-slider')
  //   }

  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [isSmallScreen])

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
export default MostPopular
