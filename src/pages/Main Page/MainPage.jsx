import Convenient from '../../components/Main Page/VehicleTypes/VehicleTypes'
import Landing from '../../components/Main Page/Landing/Landing'
import Navbar from '../../components/Navbar/Navbar'
import Location from '../../components/Main Page/Locations/Locations'
import MostPopular from '../../components/Main Page/Most Popular/MostPopular'
import Recommended from '../../components/Main Page/Recommended/Recommended'
import Features from '../../components/Main Page/Features/Features'
import Documents from '../../components/Main Page/Documents/Documents'
import TopBrands from '../../components/Main Page/Top Brands/TopBrands'
import CarSection from '../../components/Main Page/Car section/CarSection'
import FAQ from '../../components/Main Page/FAQ/FAQ'

const MainPage = () => {
  return (
    <>
      <Navbar />
      <Landing />
      {/* <Convenient /> */}
      {/* <MostPopular /> */}
      <TopBrands />
      <CarSection />
      {/* <Location /> */}
      {/* <Recommended /> */}
      {/* <Features /> */}
      <Documents />
      <FAQ />
    </>
  )
}
export default MainPage
