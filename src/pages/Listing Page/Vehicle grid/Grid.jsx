import './Grid.scss'
import { useState, useEffect, useRef } from 'react'
import HorizontalCard from '../../../components/Card/Vehicle Card/Listing Card/Horizontal Card/HorizontalCard'
import VerticalCard from '../../../components/Card/Vehicle Card/Listing Card/Vertical Card/VerticalCard'
import useIsSmallScreen from '../../../hooks/useIsSmallScreen'
import FiltersButton from '../Filter/Filters Button/FiltersButton'
import useIntersectionObserver from '../../../hooks/useIntersectionObserver'
import FilterModal from '../../../components/Modal/Filter Modal/FilterModal'

const Grid = ({ data, isGridView }) => {
  const [isModal, setIsModal] = useState(false)

  const isSmallScreen = useIsSmallScreen(850)
  const isFiltersBUttonVisible = useIsSmallScreen(1200)
  const isModalVisible = useIsSmallScreen(1200)
  const vehicleGridRef = useRef()
  const isVehicleGridVisible = useIntersectionObserver(vehicleGridRef)

  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isModal])

  return (
    <div
      ref={vehicleGridRef}
      className={`grid ${isGridView ? 'multi-grid' : ''} ${
        isSmallScreen && 'two-column-vertical'
      }`}
    >
      {data.map((data, index) =>
        isSmallScreen || isGridView ? (
          <VerticalCard key={index} />
        ) : (
          <HorizontalCard key={index} />
        )
      )}

      {/* filter modal toggle button */}
      {isFiltersBUttonVisible && isVehicleGridVisible && !isModal && (
        <FiltersButton setIsModal={setIsModal} />
      )}

      {/* Filter Modal */}
      {isModal && isModalVisible && <FilterModal setIsModal={setIsModal} />}
    </div>
  )
}

export default Grid
