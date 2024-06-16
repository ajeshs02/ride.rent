import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

const useAppContext = () => useContext(AppContext)

const AppProvider = ({ children }) => {
  // vehicle type
  const [selectedType, setSelectedType] = useState({
    name: 'Cars',
    value: 'car',
  })

  // selected location
  const [selectedLocation, setSelectedLocation] = useState({
    name: 'Dubai',
    value: 'dubai',
  })

  // global state for listing page filter
  const [selectedFilters, setSelectedFilters] = useState({
    modelYear: [],
    vehicleType: ['car'],
    vehicleSubType: [],
    carCategories: [],
    seats: [],
    paymentMode: [],
    transmission: [],
    fuelType: [],
    brand: [],
    color: [],
  })

  return (
    <AppContext.Provider
      value={{
        selectedType,
        setSelectedType,
        selectedLocation,
        setSelectedLocation,
        selectedFilters,
        setSelectedFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { useAppContext, AppProvider }
