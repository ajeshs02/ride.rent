import { useAppContext } from '../../../context/AppContext'
import ViewAllButton from '../../Button/ViewAllButton'
import SubCard from '../../Card/Vehicle Card/Sub Card/SubCard'
import CommonSectionWrapper from '../../Common/Common Section/CommonSectionWrapper'

const NewlyArrived = () => {
  const { selectedType, selectedLocation } = useAppContext()

  return (
    <section className="car-section wrapper">
      <h1>
        Newly arrived {selectedType.name} for rent in {selectedLocation.name}
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
export default NewlyArrived
