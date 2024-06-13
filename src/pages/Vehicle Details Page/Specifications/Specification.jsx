import './Specification.scss'
import { specificationsData } from '.'
import { specificationsHoverData } from '../../../constants/Specifications'
import { Tooltip } from 'react-tiny-tooltip'
import {
  getHoverData,
  getSpecificationIcon,
} from '../../../helpers/VehicleDetailsHelper'

const sampleVehicleData = {
  id: 1,
  name: 'Tesla Model S',
  specifications: [
    { specificationKey: 'brand', label: 'Brand', value: 'Tesla' },
    {
      specificationKey: 'yearOfManufacture',
      label: 'Year of Manufacture',
      value: 2022,
    },
    { specificationKey: 'engineType', label: 'Engine Type', value: 'Electric' },
    {
      specificationKey: 'transmission',
      label: 'Transmission',
      value: 'Automatic',
    },
    {
      specificationKey: 'seatingCapacity',
      label: 'Seating Capacity',
      value: '4',
    },
    { specificationKey: 'bodyType', label: 'Body Type', value: 'Sedan' },
    {
      specificationKey: 'fuelTankCapacity',
      label: 'Fuel Tank Capacity',
      value: '396 miles',
    },
    { specificationKey: 'color', label: 'Color', value: 'Unknown' },
    {
      specificationKey: 'infotainmentSystem',
      label: 'Infotainment System',
      value: 'Unknown',
    },
    {
      specificationKey: 'climateControl',
      label: 'Climate Control',
      value: 'Unknown',
    },
    { specificationKey: 'abs', label: 'ABS', value: 'Yes' },
    {
      specificationKey: 'tractionControl',
      label: 'Traction Control',
      value: 'Unknown',
    },
    { specificationKey: 'wifi', label: 'WiFi', value: 'Unknown' }, // Modified to match the data set
    {
      specificationKey: 'luggageCapacity',
      label: 'Luggage Capacity',
      value: 'Unknown',
    }, // Modified to match the data set
    {
      specificationKey: 'batteryCapacity',
      label: 'Battery Capacity',
      value: 'Unknown',
    }, // Modified to match the data set
    {
      specificationKey: 'chargingTime',
      label: 'Charging Time',
      value: 'Unknown',
    }, // Modified to match the data set
    {
      specificationKey: 'singleChargeRange',
      label: 'Single Charge Range',
      value: 'Unknown',
    }, // Modified to match the data set
  ],
}

const Specification = ({ category = 'car' }) => {
  return (
    <div className="specification-container">
      <h2 className="custom-heading">Specifications</h2>
      <div className="specifications">
        {sampleVehicleData.specifications.map((spec) => (
          <Tooltip
            key={spec.specificationKey}
            content={getHoverData(category)[spec.specificationKey]?.hover}
            side="top"
            showArrow={true}
            delay={300}
          >
            <div className="specification">
              <div className="spec-icon-box">
                <img
                  src={
                    getSpecificationIcon(category)[spec.specificationKey]?.icon
                  }
                  alt={`${'hmm'} icon`}
                  className="spec-icon"
                />
              </div>
              <div className="spec-details">
                <span className="spec-label">{spec.label}</span>
                <span className="spec-value">{spec.value}</span>
              </div>
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}
export default Specification
