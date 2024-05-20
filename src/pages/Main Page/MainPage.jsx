import VehicleTypes from '../../components/Main Page/VehicleTypes/VehicleTypes'
import Landing from '../../components/Main Page/Landing/Landing'
import Navbar from '../../components/Navbar/Navbar'
import Location from '../../components/Main Page/Locations/Locations'
import MostPopular from '../../components/Main Page/Most Popular/MostPopular'
import Recommended from '../../components/Main Page/Recommended/Recommended'
import Features from '../../components/Main Page/Features/Features'
import Documents from '../../components/Main Page/Documents/Documents'
import TopBrands from '../../components/Main Page/Top Brands/TopBrands'
import FAQ from '../../components/Main Page/FAQ/FAQ'
import Footer from '../../components/Main Page/Footer/Footer'
import Latest from '../../components/Main Page/Latest/Latest'
import Affordable from '../../components/Main Page/Affordable/Affordable'
import NewlyArrived from '../../components/Main Page/Newly Arrived/NewlyArrived'

const MainPage = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <VehicleTypes />
      <MostPopular />
      <TopBrands />
      <Latest />
      <Affordable />
      <NewlyArrived />
      <Location />
      <Recommended />
      {/* <Features /> */}
      <Documents />
      <FAQ />
      <Footer />
    </>
  )
}
export default MainPage
