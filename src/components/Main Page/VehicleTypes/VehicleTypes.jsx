import React, { useState, useEffect } from 'react'
import { VEHICLE_TYPES } from '.'
import { useAppContext } from '../../../context/AppContext'
import './VehicleTypes.scss'
import ViewAllButton from '../../Button/ViewAllButton'

const VehicleTypes = () => {
  const { selectedType } = useAppContext()
  const singularType = selectedType.name.slice(0, -1)

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const visibleVehicleTypes = isSmallScreen
    ? VEHICLE_TYPES.slice(0, 6)
    : VEHICLE_TYPES

  return (
    <section className="vehicle_types_section wrapper">
      <h1>
        Choose the
        <span className="yellow_gradient selected_type">{singularType}</span>
        type that is convenient for you
      </h1>
      <div className="vehicle_types_container">
        {visibleVehicleTypes.map((type) => (
          <aside key={type.key} className="vehicle_types_card">
            <div className="top">
              <img src={type.icon} alt={`${type.name} Icon`} />
            </div>
            <p className="caption">{type.name}</p>
            <p className="options">{type.options}+ options</p>
          </aside>
        ))}
      </div>
      <ViewAllButton value={'types'} />
    </section>
  )
}

export default VehicleTypes
