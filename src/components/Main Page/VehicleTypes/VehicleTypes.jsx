import { VEHICLE_TYPES } from '.'
import { useAppContext } from '../../../context/AppContext'
import './VehicleTypes.scss'

const Convenient = () => {
  const { selectedType } = useAppContext()

  const singularType = selectedType.name.slice(0, -1)

  return (
    <section className="vehicle_types_section">
      <h1>
        Choose the{' '}
        <a href="#type_scroll" className="yellow_gradient selected_type">
          {singularType}
        </a>{' '}
        type that is convenient for you
      </h1>
      <div className="vehicle_types_container">
        {VEHICLE_TYPES.map((type) => (
          <aside key={type.key} className="vehicle_types_card">
            <figure>
              <img src={type.icon} alt={`${type.name} Icon`} />
              <figcaption>{type.name}</figcaption>
            </figure>
            <p className="options ">{type.options}+ options</p>
          </aside>
        ))}
      </div>
    </section>
  )
}
export default Convenient
