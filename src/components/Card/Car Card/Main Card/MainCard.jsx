import './MainCard.scss'
import { FaWhatsappSquare } from 'react-icons/fa'
import { ImMail } from 'react-icons/im'
import SampleCar from '../../../../assets/img/sample car.webp'
import SampleProfile from '../../../../assets/img/sampleprofile.jpg'
import { Rating } from 'react-simple-star-rating'
import { GiCarSeat, GiGearStickPattern, GiSteeringWheel } from 'react-icons/gi'
import { IoLocationOutline, IoSpeedometerOutline } from 'react-icons/io5'
import { BsFuelPumpFill } from 'react-icons/bs'
import { FaRegCalendarDays } from 'react-icons/fa6'

const MainCard = ({
  car = { name: 'hai', description: 'hello' },
  mobileNumber,
}) => {
  const whatsappUrl = `https://wa.me/918089808277`

  return (
    <div className="car_card_container">
      {/* card top */}
      <div className="card_top">
        <figure className="image_box">
          <img src={SampleCar} alt="" className="car_image" />
          <img src={SampleProfile} alt="profile" className="profile_icon" />
          <span>{'Toyota'}</span>
        </figure>
      </div>

      {/* card bottom */}
      <div className="card_bottom">
        {/* title */}
        <div className="title_box">
          <h2>Toyota Campy SE 350</h2>
          <div className="rating_box">
            <Rating readonly initialValue={4} className="rating" size={15} />
            (4)
          </div>
        </div>
        {/* vehicle features grid */}
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

        {/* location and price */}
        <div className="location_box">
          <div className="location">
            <IoLocationOutline /> Germany
          </div>{' '}
          <div className="price">
            <span>$400</span> / Day
          </div>
        </div>
        <div className="bottom_box">
          <div className="rent_now_btn">
            RENT NOW
            <span>Available now for chat</span>
          </div>
          <div className="icons">
            <FaWhatsappSquare className="icon whatsapp" />
            <ImMail className="icon mail" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainCard
