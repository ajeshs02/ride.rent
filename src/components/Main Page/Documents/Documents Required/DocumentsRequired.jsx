import { GiCheckMark } from 'react-icons/gi'
import ResidentsImg from '../../../../assets/img/documents/Residents.webp'
import TouristsImg from '../../../../assets/img/documents/UAE.webp'
import './DocumentsRequired.scss'

const DocumentsRequired = () => {
  return (
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
                <GiCheckMark className="tick_icon" /> Valid UAE Driving License
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
        <div className="box two">
          <div className="box_left">
            <img src={TouristsImg} alt="" />
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
          Travellers from the GCC, US, UK, Canada, Europe, and some other places
          can use their home country driver's license to drive in UAE, without
          needing an International Driving Permit (IDP) .
        </p>
        <br />
        <p>
          <a href="">Click here </a> to find out if your country's license is
          accepted in the UAE.
        </p>
      </div>
    </div>
  )
}
export default DocumentsRequired
