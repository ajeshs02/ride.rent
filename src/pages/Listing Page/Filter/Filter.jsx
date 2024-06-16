import './Filter.scss'

// Accordion component import
import Accordion from '../../../components/General/Accordions/Filter Accordion/Accordion'

//importing data set
import {
  modelYears,
  vehicleTypes,
  carCategories,
  seats,
  paymentModes,
  transmissions,
  fuelTypes,
  colors,
} from '..'
import useFilters from '../../../hooks/useFilters'
import { RiListSettingsFill } from 'react-icons/ri'
import BrandAccordion from '../../../components/General/Accordions/BrandAccordion/BrandAccordion'
import { getBrandsByVehicleType } from '../../../helpers/VehicleDetailsHelper'

const Filter = () => {
  const {
    selectedFilters,
    handleFilterChange,
    resetFilters,
    getVehicleSubTypes,
    getVehicleTypeLabel,
  } = useFilters()

  return (
    <div className="filter-container">
      <div>
        {/* Model Year */}
        <Accordion
          title="Model Year"
          options={modelYears.map((year) => ({ label: year, value: year }))}
          selected={selectedFilters.modelYear}
          onChange={(value) => handleFilterChange('modelYear', value)}
        />

        {/* Vehicle Type */}
        <Accordion
          title="Vehicle Type"
          isSingleSelection={true}
          options={vehicleTypes}
          selected={selectedFilters.vehicleType}
          onChange={(value) => handleFilterChange('vehicleType', value)}
        />

        {/* Vehicle Sub Types */}
        {selectedFilters.vehicleType.length > 0 && (
          <Accordion
            title={`${getVehicleTypeLabel()} Category`}
            options={getVehicleSubTypes()}
            selected={selectedFilters.vehicleSubType}
            onChange={(value) => handleFilterChange('vehicleSubType', value)}
          />
        )}

        {/* Car Categories */}
        {selectedFilters.vehicleType[0] === 'cars' && (
          <Accordion
            title="Car Types"
            options={carCategories}
            selected={selectedFilters.carCategories || []}
            onChange={(value) => handleFilterChange('carCategories', value)}
          />
        )}

        {/* No of Seats */}
        <Accordion
          title="No of Seats"
          options={seats.map((seat) => ({ label: seat, value: seat }))}
          selected={selectedFilters.seats}
          onChange={(value) => handleFilterChange('seats', value)}
        />
        {/* Payment Mode */}
        <Accordion
          title="Payment Mode"
          options={paymentModes}
          selected={selectedFilters.paymentMode}
          onChange={(value) => handleFilterChange('paymentMode', value)}
        />

        {/* Transmission */}
        <Accordion
          title="Transmission"
          options={transmissions}
          selected={selectedFilters.transmission}
          onChange={(value) => handleFilterChange('transmission', value)}
        />

        {/* Fuel Type */}
        <Accordion
          title="Fuel Type"
          options={fuelTypes}
          selected={selectedFilters.fuelType}
          onChange={(value) => handleFilterChange('fuelType', value)}
        />

        {/* Color */}
        <Accordion
          title="Color"
          options={colors}
          selected={selectedFilters.color}
          onChange={(value) => handleFilterChange('color', value)}
        />

        {/* Brand */}
        <BrandAccordion
          title="Brand"
          isSingleSelection={true}
          options={getBrandsByVehicleType(selectedFilters.vehicleType[0])}
          selected={selectedFilters.brand}
          onChange={(value) => handleFilterChange('brand', value)}
        />
      </div>
      <div className="filter-buttons">
        <button className="apply">
          Apply Filters <RiListSettingsFill />
        </button>
        <button className="reset" onClick={resetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  )
}

export default Filter
