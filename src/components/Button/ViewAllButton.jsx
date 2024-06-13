import { GoArrowRight } from 'react-icons/go'
import './ViewAllButton.scss'
import { Link } from 'react-router-dom'

const ViewAllButton = ({ value, link = '/' }) => {
  return (
    <Link to={'/listing'} className="common_view_all_btn">
      View All {value} <GoArrowRight />
    </Link>
  )
}
export default ViewAllButton
