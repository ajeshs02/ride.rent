import { useAppContext } from '../../../context/AppContext'
import ViewAllButton from '../../Button/ViewAllButton'
import SubCard from '../../Card/Vehicle Card/Sub Card/SubCard'
import CommonSectionWrapper from '../../Common/Common Section/CommonSectionWrapper'

const Affordable = () => {
  const { selectedType, selectedLocation } = useAppContext()
  return (
    <section className="car-section wrapper">
      <h1>
        Affordable {selectedType.name} for rent in {selectedLocation.name}
      </h1>
      {/* card slider */}
      <CommonSectionWrapper>
        <SubCard />
        <SubCard />
        <SubCard />
        <SubCard />
        <SubCard />
        <SubCard />
      </CommonSectionWrapper>

      {/* view all button */}
      <ViewAllButton value={selectedType.name} />
    </section>
  )
}
export default Affordable
