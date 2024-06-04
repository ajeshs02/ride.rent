import './WhyJoin.scss'

const WhyJoin = ({ title, data }) => {
  return (
    <div className="why-join-container">
      {title}
      <div className="feature-container">
        {data.map((feature) => (
          <div className="feature-box" key={feature.key}>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default WhyJoin
