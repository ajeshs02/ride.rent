import { MdVerifiedUser } from 'react-icons/md'
import './ProfileCard.scss'

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="heading">
        <h2>Listing Owner Details</h2>
      </div>

      {/* profile */}
      <div className="profile-details">
        <div className="profile">
          <img src="" alt="profile image" loading="lazy" />
        </div>
        <div>
          <p>Brooklyn Cars</p>
          <div>
            <MdVerifiedUser />
            <span>Verified Vendor</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfileCard
