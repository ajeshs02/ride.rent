import './Locations.scss'
import { LOCATION_TYPES } from '.'
import ViewAllButton from '../../Button/ViewAllButton'

const Location = () => {
  return (
    <section className="location_section wrapper">
      <h1>
        Find Car Rental Offers In Other
        <span> Locations</span>
      </h1>
      <div className="location_container">
        {LOCATION_TYPES.map((type) => (
          <aside key={type.key} className="location_card">
            <img src={type.icon} alt={`${type.name} logo`} />
            <figcaption>{type.name}</figcaption>
          </aside>
        ))}
      </div>
      <ViewAllButton value={'Location'} />
    </section>
  )
}
export default Location
