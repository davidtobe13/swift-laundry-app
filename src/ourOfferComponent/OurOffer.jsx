import React from 'react'
import "./OurOffer.css"

const OurOffer = () => {
  return (
    <div id='offer' className='ourOfferMainDiv'>
      <img src="./noto_bubbles.png" alt=""  className='bubbles'/>
      <img src="./noto_bubbles (1).png" alt=""  className='bubble'/>
       <section className='offerTopDiv'>
        <p>What We Offer</p>
        <samp>Our Offer</samp>
      </section>
      <section className='offerBottomDiv'>

        <article className='saveTimeDiv'>
          <div className='saveTimeLogo'>
            <img src="./logo1.png" alt="" />
          </div>
          <h2>Save Time And Money</h2>
          <p>Contrary to common belief, outsourcing your laundry needs can be a cost-effective solution. Consider the costs of running your own laundry equipment, including water, electricity, detergent, and maintenance expenses.</p>
        </article>

        <article className='payOnlineDiv'>
          <div className='payOnlineLogo'>
          <img src="./logo2.png" alt="" />
          </div>
          <h2>Pay Online In Seconds</h2>
          <p>This seamless payment solution not only saves you time but also enhances the overall customer experience by providing security, accessibility, and automated transaction management.</p>
        </article>

        <article className='satisfactionDiv'>
          <div className='satisfactionLogo'>
          <img src="./logo3.png" alt="" />
          </div>
          <h2>Satisfaction Guarantee</h2>
          <p>Choose us with confidence, knowing that your satisfaction is our priority. Experience the convenience, quality, and peace of mind that comes with our unparalleled laundry services, backed by a satisfaction guarantee that sets us apart in the industry.</p>
        </article>
      </section>
    </div>
  )
}

export default OurOffer
