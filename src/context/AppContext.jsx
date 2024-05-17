import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

const useAppContext = () => useContext(AppContext)

const AppProvider = ({ children }) => {
  const [selectedType, setSelectedType] = useState({
    name: 'Cars',
    value: 'cars',
  })

  const [selectedLocation, setSelectedLocation] = useState({
    name: 'Dubai',
    value: 'dubai',
  })

  return (
    <AppContext.Provider
      value={{
        selectedType,
        setSelectedType,
        selectedLocation,
        setSelectedLocation,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { useAppContext, AppProvider }
