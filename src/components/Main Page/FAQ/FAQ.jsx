import { FAQ_Data } from '.'
import Accordion from './Accordion/Accordion'
import './FAQ.scss'
import { useState } from 'react'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <section className="faq_section wrapper">
      <h1>Frequently Asked Questions</h1>
      <div className="faq">
        {FAQ_Data.map((item, index) => (
          <Accordion
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </section>
  )
}
export default FAQ
