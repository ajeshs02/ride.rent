import './Accordion.scss'
import { useRef, useEffect, useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

const Accordion = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef(null)
  const [height, setHeight] = useState('0px')

  useEffect(() => {
    if (contentHeight.current) {
      setHeight(isOpen ? `${contentHeight.current.scrollHeight}px` : '0px')
    }
  }, [isOpen])

  return (
    <div className="accordion_wrapper">
      <button
        className={`question-container ${isOpen ? 'active' : ''}`}
        onClick={onClick}
      >
        <p className="question-content">{question}</p>
        <RiArrowDropDownLine className={`arrow ${isOpen ? 'active' : ''}`} />
      </button>

      <div ref={contentHeight} className="answer-container" style={{ height }}>
        <p className="answer-content">{answer}</p>
      </div>
    </div>
  )
}

export default Accordion
