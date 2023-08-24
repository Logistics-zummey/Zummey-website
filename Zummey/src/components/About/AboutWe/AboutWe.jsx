import React from 'react'
import './AboutWe.css'
import AboutWePic from '../../../assets/about-we-img.png'
import star from '../../../assets/hero-star.png'
import regVector from '../../../assets/home-registration-vector.png'

const AboutWe = () => {
  return (
    <div className="about-we-container">
        <img src={star} alt="" className='about-we-star'/>
        <div className="about-we-wrapper">
            <div className="about-we-left">
                <h1>Who Are We?</h1>
                <p>By offering a reliable and fast delivery service for businesses and individuals, Zummey is revolutionising logistics, one delivery at a time. Our platform connects registered clients with properly vetted logistic bike owners, providing secure and seamless delivery solutions. With Zummey, you can easily track the progress of the delivery of your packages on your phone and other devices, ensuring a hassle-free experience.</p>
            </div>
            <div className="registration-img">
                <img src={AboutWePic} alt="" className='About-we-img-main'/>
                <img src={regVector} alt="" className='about-reg-vector'/>
           </div>
        </div>
    </div>
  )
}

export default AboutWe