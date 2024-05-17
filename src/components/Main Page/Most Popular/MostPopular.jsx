import './MostPopular.scss'

import ViewAllButton from '../../Button/ViewAllButton'
import { useAppContext } from '../../../context/AppContext'
import MainCard from '../../Card/Car Card/Main Card/MainCard'

const MostPopular = () => {
  const { selectedType, selectedLocation } = useAppContext()

  return (
    <section className="popular_section wrapper">
      <h1>
        Explore the most popular {selectedType.name} for rent in{' '}
        {selectedLocation.name}
      </h1>
      <div className="popular_container">
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </div>
      <ViewAllButton value={'Cars'} />
    </section>
  )
}
export default MostPopular
