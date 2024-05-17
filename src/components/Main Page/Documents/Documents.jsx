import './Documents.scss'
import ResidentsImg from '../../../assets/img/documents/Residents.webp'
import TouristsImg from '../../../assets/img/documents/UAE.webp'
import { useAppContext } from '../../../context/AppContext'
import { GiCheckMark } from 'react-icons/gi'

const Documents = () => {
  const { selectedLocation } = useAppContext()

  return (
    <section className="documents_section wrapper">
      <h1>
        Ride.Rent is getting you the best cars for rental in{' '}
        {selectedLocation.name}
      </h1>

      <div className="description">
        <p>
          As the fastest-growing vehicle rental portal, we pride ourselves on
          offering an extensive range of vehicles available for rent in the UAE,
          from luxurious cars and sports cars to thrilling motorbikes and sport
          bikes. But that's not all - we also cater to those seeking adventure
          on the water with our selection of speed boats and yachts for rent.
          For those looking to soar high, we provide charter planes for rent at
          affordable rates for your convenience.
          <br />
          <br /> At Ride.Rent, we understand the importance of convenience and
          choice, which is why our services span across prominent areas in the
          UAE, including Abu Dhabi, Dubai, Sharjah, Ajman, Umm Quwain, Ras AL
          Khaimah, and Fujairah, Whether you're cruising along the stunning
          coastline or exploring the vibrant cityscape, we've got the perfect
          ride for every occasion. <br />
          <br /> With a commitment to providing exceptional service and an
          unbeatable selection, Ride.Rent is your go-to destination for all your
          vehicle rental needs in the UAE. <br />
          <br /> Book your dream ride today and elevate your journey with
          Ride.Rent!
        </p>
      </div>

      {/* Documents Required */}
      <div className="documents_bottom">
        <div className="heading">
          <h1>Documents Required to Car & Drive in the UAE</h1>
          <hr />
        </div>
        <div className="box_container">
          {/* left doc */}
          <div className="box">
            <div className="box_left">
              <img src={ResidentsImg} alt="" />
            </div>
            <div className="box_right">
              <h3>For UAE Residents</h3>
              <div>
                <p>
                  <GiCheckMark className="tick_icon" /> Valid UAE Driving
                  License
                </p>
                <p>
                  <GiCheckMark className="tick_icon" /> Emirates ID
                </p>
                <p>
                  <GiCheckMark className="tick_icon" /> (Residential Visa may be
                  acceptable)
                </p>
              </div>
            </div>
          </div>
          {/* right doc */}
          <div className="box">
            <div className="box_left">
              <img src={ResidentsImg} alt="" />
            </div>
            <div className="box_right">
              <h3>For Tourists in UAE</h3>
              <div>
                <p>
                  <GiCheckMark className="tick_icon" /> Valid Passport
                </p>
                <p>
                  <GiCheckMark className="tick_icon" /> Visa Details
                </p>
                <p>
                  <GiCheckMark className="tick_icon" /> Home Country Driving
                  License
                </p>
                <p>
                  <GiCheckMark className="tick_icon" /> International Driving
                  Permit (IDP)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom_description">
          <p>
            Travellers from the GCC, US, UK, Canada, Europe, and some other
            places can use their home country driver's license to drive in UAE,
            without needing an International Driving Permit (IDP) .
          </p>
          <br />
          <p>
            <a href="">Click here </a> to find out if your country's license is
            accepted in the UAE.
          </p>
        </div>
      </div>
    </section>
  )
}
export default Documents
