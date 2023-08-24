import React from 'react'
import './Order.css'
import star from '../../../assets/hero-star.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Order = () => {
  return (
    <div className="order-container">
        <img src={star} alt="" className='star1'/>
        <img src={star} alt="" className='star2'/>

        <div className="order-wrapper">
            <h1>Embrace Peace of Mind</h1>
            <p>Register today with Zummey and say goodbye to long wait times, high delivery fees, and unreliable services.</p>
            <button>GET IN TOUCH <FontAwesomeIcon icon={faArrowRight} bounce size="sm" style={{color: "#ffffff",}} /></button>
        </div>
    </div>
  )
}

export default Order