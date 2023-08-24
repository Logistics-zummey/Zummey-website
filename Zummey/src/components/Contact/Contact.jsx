import React from 'react'
import './Contact.css'

// This is for font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className="contact-container">
        <div className="contact-wrapper">
            <h1>Contact us!</h1>
            <p>Just fill this form and we will contact you promptly, Drop us a message at <span className="info">info@zummey.com</span> or <span className="info">hello@zummey.com</span></p>
            <form className="contact-form">
                <input type="text" placeholder='Your Name'/>
                <input type="email" placeholder='Your Email'/>
                <input type="text" placeholder='Message'/>
                <button>Submit <FontAwesomeIcon icon={faArrowRight} bounce size="sm" style={{color: "#ffffff",}} /></button>
            </form>
        </div>
    </div>
  )
}

export default Contact