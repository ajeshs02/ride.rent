import './FeaturesCard.scss'

const FeaturesCard = ({ data }) => {
  const { icon: Icon, title, description, bgClass } = data

  return (
    <div className="features_card">
      <div className={`feature_icon ${bgClass}`}>
        <Icon className="icon" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
export default FeaturesCard
