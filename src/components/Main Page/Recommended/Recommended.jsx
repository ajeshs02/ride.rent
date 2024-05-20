import './Recommended.scss'

import ViewAllButton from '../../Button/ViewAllButton'
import RecommendedCard from '../../Card/Vehicle Card/Recommended Card/RecommendedCard'

const Recommended = () => {
  return (
    <section className="popular_section wrapper">
      <h1>Recommended Car Rental deals</h1>
      <div className="popular_container">
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
      </div>
      <ViewAllButton value={'Cars'} />
    </section>
  )
}
export default Recommended
