import React from 'react'
import aboutRegisterImg from '../../../assets/about-register-img.png'
import vector from '../../../assets/about-register-vector.png'
import './AboutRegister.css'
// This is for font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const AboutRegister = () => {
  return (
    <div className="about-register-container">
        <div className="about-register-wrapper">
            <button className='mobile-register-download-btn'>Download App <FontAwesomeIcon icon={faArrowRight} bounce size="sm" style={{color: "#ffffff",}} /></button>
            <img src={aboutRegisterImg} alt="" />

            <div className="about-register-text">
                <h1>Sign in / <span className="span-register">Register</span></h1>
                <p>Join our community of satisfied customers and enjoy the benefits of convenient, safe, and efficient deliveries. Start requesting your logistics bikes now and discover a whole new level of convenience. Trust Zummey to improve your logistics experience today.</p>
                <div className="button-vector">
                  <button>Download App <FontAwesomeIcon icon={faArrowRight} bounce size="sm" style={{color: "#ffffff",}} /></button>
                  <img src={vector} alt="" className='vector'/>
                </div>
            </div> 
            
        </div>
    </div>
  )
}

export default AboutRegister