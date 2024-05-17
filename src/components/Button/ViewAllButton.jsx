import { GoArrowRight } from 'react-icons/go'
import './ViewAllButton.scss'

const ViewAllButton = ({ value }) => {
  return (
    <button className="common_view_all_btn">
      View All {value} <GoArrowRight />
    </button>
  )
}
export default ViewAllButton
