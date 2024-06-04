import { useState } from 'react'
import FAQ from '../../components/Common/FAQ/FAQ'
import './ResetPassword.scss'
import WhyJoin from '../../components/Common/Why Join/WhyJoin'
import { features } from '.'

// title
const title = (
  <h2>
    What's new on <span>Ride.Rent?</span>
  </h2>
)

const ResetPassword = () => {
  const [email, setEmail] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="wrapper reset-password-section">
      {/* form section */}
      <div className="reset-password-container">
        <h3>RESET PASSWORD</h3>
        <p>
          Enter your email and we will send you a link to reset your password
        </p>
        <form onSubmit={onSubmit} className="form">
          <input
            type="email"
            placeholder="Current Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Save Changes</button>
        </form>
      </div>

      {/* Why Join Us */}
      <WhyJoin title={title} data={features} />

      {/* FAQ */}
      <FAQ />
    </section>
  )
}
export default ResetPassword
