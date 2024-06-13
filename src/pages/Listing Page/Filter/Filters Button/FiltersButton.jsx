import { useEffect, useState } from 'react'
import './FiltersButton.scss'
import { RiListSettingsFill } from 'react-icons/ri'

const FiltersButton = ({ setIsModal }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true)
    }, 10)
    return () => {
      clearTimeout(timeoutId)
      setIsVisible(false)
    }
  }, [])
  return (
    <button
      onClick={() => {
        setIsModal(true)
      }}
      className={`filters-btn ${isVisible ? 'visible' : ''}`}
    >
      Filters <RiListSettingsFill />
    </button>
  )
}
export default FiltersButton
