import { useEffect, useRef, useState } from 'react'
import './BrandAccordion.scss'
import { RiArrowDropDownLine } from 'react-icons/ri'

const BrandAccordion = ({ title, options, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [filteredOptions, setFilteredOptions] = useState(options)

  const contentRef = useRef(null)

  // useEffect(() => console.log(filteredOptions), [])

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    let debounceTimeout

    const debounce = (func, delay) => {
      clearTimeout(debounceTimeout)
      debounceTimeout = setTimeout(func, delay)
    }

    debounce(() => {
      setFilteredOptions(
        options.filter((option) =>
          option.label.toLowerCase().startsWith(search.toLowerCase())
        )
      )
    }, 500)

    return () => clearTimeout(debounceTimeout)
  }, [search, options])

  return (
    <div className={`brand ${isOpen ? 'open' : ''}`}>
      <button className="brand-header" onClick={toggleAccordion}>
        {title}
        {/* down icon */}
        <RiArrowDropDownLine className={`arrow ${isOpen ? 'open' : ''}`} />
      </button>

      <div
        className="brand-content"
        style={{
          maxHeight: isOpen ? '15rem' : '0',
          overflowY:
            isOpen && contentRef.current.scrollHeight > 160 ? 'auto' : 'hidden',
        }}
        ref={contentRef}
      >
        <div className="search-container">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search brands"
            className="search-field"
          />
        </div>

        {filteredOptions.length > 0 ? (
          filteredOptions.map((option, index) => (
            <label key={index} className="custom_check ">
              <input
                type="checkbox"
                value={option.value}
                checked={selected.includes(option.value)}
                onChange={() => onChange(option.value)}
              />
              {option.label}
            </label>
          ))
        ) : (
          <p className="no-results">No results found!</p>
        )}
      </div>
    </div>
  )
}
export default BrandAccordion
