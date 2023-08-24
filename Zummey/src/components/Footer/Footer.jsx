import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import appStore from '../../assets/app-store.png'
import googleStore from '../../assets/google-store.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-wrapper">
            <div className="footer-top">
                <img src={logo} alt="" />

                <div className="google-app">
                    <img src={appStore} alt="" />
                    <img src={googleStore} alt="" />
                </div>
            </div>

            <hr />

            <div className="footer-bottom">
                <div className="rights footer-same">&copy; 2023 Zummey Savings Wallet All Rights Reserved.</div>

                <div className="social-icons footer-same">
                    <FontAwesomeIcon icon={faFacebook} size="lg" className='social-icon'/>
                    <FontAwesomeIcon icon={faTwitter} size="lg" className='social-icon'/>
                    <FontAwesomeIcon icon={faInstagram} size="lg" className='social-icon'/>
                </div>

                <ul className="footer-link footer-same">
                    <li>Terms & Privacy</li>
                    <li>Cookies</li>
                    <li>Security</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer