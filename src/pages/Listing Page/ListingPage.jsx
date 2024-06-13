import './ListingPage.scss'

import Filter from './Filter/Filter'
import { IoGridOutline, IoList } from 'react-icons/io5'
import { useState } from 'react'
import Grid from './Vehicle grid/Grid'
import useIsSmallScreen from '../../hooks/useIsSmallScreen'
import FilterModal from '../../components/Modal/Filter Modal/FilterModal'
const ListingPage = () => {
  const [isGridView, setIsGridView] = useState(false)

  const isSmallScreen = useIsSmallScreen(850)

  const sampleArray1 = Array.from({ length: 8 }, (_, index) => index + 1)
  return (
    <div className="listing-section wrapper">
      <div className="listing-navbar">
        <div>
          <p>
            Showing {`1`}-{`5`} of {`10`} results
          </p>
        </div>
        <div className="list-navbar-right">
          <div className="dropdown">
            Show :&nbsp;
            <select>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </div>

          {/* grid vs list icon */}
          {!isSmallScreen && (
            <div className="grid-style">
              <button
                className={`icon-container ${isGridView && 'selected'}`}
                aria-label="Switch to grid view"
                onClick={() => setIsGridView(true)}
              >
                <IoGridOutline className="icon" />
              </button>
              <button
                className={`icon-container ${!isGridView && 'selected'}`}
                aria-label="Switch to list view"
                onClick={() => setIsGridView(false)}
              >
                <IoList className="icon" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="listing-container">
        {/* filter */}
        <Filter isGridView={isGridView} />

        {/* vehicle grid */}
        <Grid isGridView={isGridView} data={sampleArray1} />
      </div>
    </div>
  )
}
export default ListingPage
