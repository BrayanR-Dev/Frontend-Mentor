import { useState } from 'react'
import data from './data.json'
import star from './assets/images/icon-star.svg'
import pluslogo from './assets/images/icon-plus.svg'
import minuslogo from './assets/images/icon-minus.svg'
import './app.css'

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section>
      <div className="header">
        <img src={star} alt="" />
        <h1>FAQs</h1>
      </div>
        <div className="accordion">
          {data.map((item, index) => (
            <div key={index} className="accordion-item">
              <button className="accordion-header" onClick={() => toggleAccordion(index)}>
                <span>{item.question}</span>
                <img
                  src={activeIndex === index ? minuslogo : pluslogo}
                  alt="toggle"
                />
              </button>

              {activeIndex === index && (
                <p className="accordion-answer">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
    </section>
  )
}

export default App
