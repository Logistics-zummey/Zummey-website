import React from 'react'
import './AboutRegistration.css'
import aboutRegImg from '../../../assets/about-registration-img.png'
import star from '../../../assets/hero-star.png'


// This is for font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const AboutRegistration = () => {
  return (
    <div className="about-reg-container">
        <img src={star} alt="" className='about-star'/>
        <div className="about-reg-wrapper">
          <div className="about-reg-left">
            <h1>Easy Registration</h1>
            <p>Whether you're a bike owner or a client, joining the Zummey community is simple and hassle-free. Download our mobile application or access our user-friendly web app to get started.</p>
            <button>Download App <FontAwesomeIcon icon={faArrowRight} bounce size="sm" style={{color: "#ffffff",}} /></button>
          </div>
          <img src={aboutRegImg} alt="" />
        </div>
    </div>
  )
}

export default AboutRegistration