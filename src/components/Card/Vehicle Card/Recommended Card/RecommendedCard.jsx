import './RecommendedCard.scss'
import SampleCar from '../../../../assets/img/sample car.webp'
import { Rating } from 'react-simple-star-rating'
import { GiCarSeat, GiGearStickPattern, GiSteeringWheel } from 'react-icons/gi'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { BsFuelPumpFill } from 'react-icons/bs'
import { FaRegCalendarCheck, FaRegCalendarDays } from 'react-icons/fa6'

const RecommendedCard = ({}) => {
  const whatsappUrl = `https://wa.me/918089808277`

  return (
    <div className="recommended_card_container">
      {/* card top */}
      <div className="card_top">
        <figure className="image_box">
          <img src={SampleCar} alt="" className="car_image" />
          <div className="price_tag">{'$400 / day'}</div>
        </figure>
      </div>

      {/* card bottom */}
      <div className="card_bottom">
        {/* title */}
        <div className="title_box">
          <h3>Toyota Campy SE 350</h3>
          <div className="rating_box">
            <Rating readonly initialValue={4} className="rating" size={15} />
            (4)
          </div>
        </div>
        {/* features */}
        <div className="features_grid">
          <div>
            <GiGearStickPattern /> {'Auto'}
          </div>
          <div>
            <IoSpeedometerOutline /> {'10 KM'}
          </div>
          <div>
            <BsFuelPumpFill /> {'Petrol'}
          </div>
          <div>
            <GiSteeringWheel /> {'Power'}
          </div>
          <div>
            <FaRegCalendarDays /> {'2016'}
          </div>
          <div>
            <GiCarSeat /> {'5 Persons'}
          </div>
        </div>

        <button className="rent_now">
          <FaRegCalendarCheck /> Rent Now
        </button>
      </div>
    </div>
  )
}

export default RecommendedCard
