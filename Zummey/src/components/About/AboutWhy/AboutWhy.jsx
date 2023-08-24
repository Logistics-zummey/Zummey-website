import React from 'react'
import './AboutWhy.css'
import aboutMain1 from '../../../assets/about-why-one.png'
import aboutMain2 from '../../../assets/about-why-two.png'
import aboutMain3 from '../../../assets/about-why-three.png'
import aboutMain4 from '../../../assets/about-why-four.png'
import aboutMainLine from '../../../assets/about-why-line.png'

const AboutWhy = () => {
  return (
    <div className="about-why-container">
        <div className="about-why-wrapper">
            <h1>Why Choose Zummey</h1>

            <div className="about-why-main">
                <div className="about-why-one about-why-same">
                    <img src={aboutMain1} alt="" />
                    <h3>Reliable Delivery Services</h3>
                    <p>We've handpicked the best logistic bike owners to ensure that your deliveries are in safe hands. Our rigorous selection process guarantees professionalism, timeliness, and secure handling of your packages</p>
                </div>
                <div className="about-why-two about-why-same">
                    <img src={aboutMain2} alt="" />
                    <h3>Real-Time Tracking</h3>
                    <p>With our cutting-edge technology, you can track your delivery in real-time. Know exactly where your package is, every step of the way. No more guessing or uncertainty.</p>
                </div>
                <div className="about-why-three about-why-same">
                    <img src={aboutMain3} alt="" />
                    <h3>Exceptional Customer Support</h3>
                    <p>We value our customers and strive to provide the best support experience. Our dedicated customer support team is available round the clock to assist you with any queries, concerns, or feedback.</p>
                </div>
                <div className="about-why-four about-why-same">
                    <img src={aboutMain4} alt="" />
                    <h3>Reliable Delivery Services</h3>
                    <p>We properly vet and handpick qualified logistic bike owners, ensuring professionalism, punctuality, and secure handling of your packages.</p>
                </div>

                <img src={aboutMainLine} alt="" className='about-line'/>

                <button className="about-download-desktop-why">Download Now</button>
            </div>

            <button className="about-download-mobile-why">Download Now</button>
        </div>
    </div>
  )
}

export default AboutWhy