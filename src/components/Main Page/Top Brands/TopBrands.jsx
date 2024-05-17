import { sampleBrands } from '.'
import { useAppContext } from '../../../context/AppContext'
import ViewAllButton from '../../Button/ViewAllButton'
import BrandsCarousel from './Brand Carousel/BrandCarousel'
import './TopBrands.scss'

const TopBrands = () => {
  const { selectedLocation } = useAppContext()
  return (
    <section className="brands_section wrapper">
      <h1>Rent a car from top brands for {selectedLocation.name}</h1>
      <BrandsCarousel brands={sampleBrands} />
      <ViewAllButton value={'Brands'} />
    </section>
  )
}
export default TopBrands
