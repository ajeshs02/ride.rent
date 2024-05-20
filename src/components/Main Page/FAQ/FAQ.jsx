import { FAQ_Data } from '.'
import Accordion from './Accordion/Accordion'
import './FAQ.scss'
import { useState } from 'react'
import underline from '../../../assets/img/general/title-head.png'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <section className="faq-section wrapper">
      <div className="heading-container">
        <h1 className="frequently-asked">Frequently Asked Questions</h1>
        <img
          src={underline}
          alt="Custom Underline Image"
          className="custom-underline"
        ></img>
      </div>

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
