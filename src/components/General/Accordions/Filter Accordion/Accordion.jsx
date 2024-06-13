import './Accordion.scss'
import { useRef, useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

const Accordion = ({ title, options, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef(null)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`filter ${isOpen ? 'open' : ''}`}>
      <button className="filter-header" onClick={toggleAccordion}>
        {title}
        {/* down icon */}
        <RiArrowDropDownLine className={`arrow ${isOpen ? 'open' : ''}`} />
      </button>
      <div
        className="filter-content"
        style={{
          maxHeight: isOpen ? '12rem' : '0',
          overflowY:
            isOpen && contentRef.current.scrollHeight > 160 ? 'auto' : 'hidden',
        }}
        ref={contentRef}
      >
        {options.map((option, index) => (
          <label key={index} className="custom_check ">
            <input
              type="checkbox"
              value={option.value}
              checked={selected.includes(option.value)}
              onChange={() => onChange(option.value)}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  )
}

export default Accordion
