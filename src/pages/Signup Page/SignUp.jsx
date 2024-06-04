import FAQ from '../../components/Common/FAQ/FAQ'
import WhyOpt from '../../components/Common/Why Opt/WhyOpt'
import './SignUp.scss'
import Form from './SignUp Form/Form'
import SignUpFeatures from './Signup Features/SignUpFeatures'
import WhyJoin from '../../components/Common/Why Join/WhyJoin'
import { features } from '.'

// title
const title = (
  <h2>
    Why join <span>Ride.Rent</span> Today?
  </h2>
)

const SignUp = () => {
  return (
    <section className="wrapper sign-up-section">
      {/* top heading */}
      <div className="heading-container">
        <h1>A SINGLE PLATFORM TO RENT YOUR VEHICLES</h1>
        <h2>Showcase your fleet to the world, get faster bookings</h2>
      </div>

      {/* form section */}
      <div className="sign-up-container">
        {/* sign up features */}
        <SignUpFeatures />

        {/* form */}
        <Form />
      </div>

      {/* Why Join Us */}
      <WhyJoin title={title} data={features} />

      {/* FAQ */}
      <FAQ />

      {/* why opt */}
      <WhyOpt />
    </section>
  )
}
export default SignUp
