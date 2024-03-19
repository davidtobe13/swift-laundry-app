import React from 'react'
import "./HowWeWork.css"

const HowWeWork = () => {
  return (
    <div className='howWeWorkMainDiv'>
      <section className='weWorkTopDiv'>
        <p>The process</p>
        <samp>How we work</samp>
      </section>
      <section className='weWorkBottomDiv'>

        <article className='pickUpDiv'>
          <div className='pickUpLogo'>
            <img src="./Frame1.png" alt="" className='frameLogo2'/>
          </div>
          <h2>Pick Up Your Clothes</h2>
          <p>Take control of your laundry schedule with our pickup service. Be it day or night, or weekends when you have some downtime, our address options mean you can have your laundry picked up from your home, office, or any other convienient spot. </p>
        </article>

        <article className='washDiv'>
          <div className='washLogo'>
            <img src="./frame2.png" alt=""  className='frameLogo1'/>
          </div>
          <h2>Wash Clothes</h2>
          <p>Transform your laundry routine with this features, offering unparalleled convience and efficiency. Simply entrust us with your laundry, and we'll take care of the rest, ensuring your clothes are cleaned exactly when you need them.</p>
        </article>

        <article className='deliverDiv'>
          <div className='deliverLogo'>
            <img src="./frame3.png" alt="" className='frameLogo3'/>
          </div>
          <h2>Deliver Clothes</h2>
          <p>Once your clothes are clean and fresh, we'll deliver them back to you at the specified location. No need to worry about picking them up-we'll bring them right to your door.</p>
        </article>
      </section>
    </div>
  )
}

export default HowWeWork
