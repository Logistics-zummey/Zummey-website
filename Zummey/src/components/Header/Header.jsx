import React, {useState, useEffect} from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import mobile_logo from '../../assets/mobile-logo.png'
import hamburger from '../../assets/hamburger.png'
import hamburgerX from '../../assets/hamburger-x.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showHamburger, setShowHamburger] = useState(true);

    const handleImageClick = () => {
      setShowHamburger((prevState) => !prevState);
    };

    document.onclick = function(clickEvent){
      if(clickEvent.target.className !== "mobile-link" && clickEvent.target.id !== "hamburger" && clickEvent.target.className !== "nav-wrapper" && clickEvent.target.className !== "nav-link-main"  && clickEvent.target.className !== `mobile-link mobile` && clickEvent.target.className !== `nav-container  nav-mobile`){
        setShowHamburger(true)
        console.log(clickEvent.target.className)
      }
    }

   

    const handleScroll = () => {
      const scrollThreshold = 0;
  
      if(window.scrollY > scrollThreshold){
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    };
  
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [])
  
  
    return (
      <div className={`nav-container ${scrolled ? 'backdrop-blur-sm bg-white/30 nav-color' : ''} ${showHamburger == false ? 'nav-mobile': ''}`}>
          <div className="nav-wrapper">
            <img src={logo} alt="" className='desktop-logo'/>

            <img src={mobile_logo} alt="" className='mobile-logo'/>
  
            <div className="nav-link desktop-link">
                <ul className='nav-link-main'>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active': '')} to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About us</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
  
            <button className="download desktop-link">Download Now</button>

            <div className={`mobile-link ${showHamburger == false ? 'mobile': ''}`}>
              <div className="nav-link">
                  <ul className='nav-link-main'>
                      <li><NavLink className={({ isActive }) => (isActive ? 'active': '')} to="/">Home</NavLink></li>
                      <li><NavLink to="/about">About us</NavLink></li>
                      <li><NavLink to="/contact">Contact</NavLink></li>
                  </ul>
              </div>

              <button className="download">Download Now</button>
            </div>

            <div className="menu-icon" onClick={handleImageClick} >
              <img
                src={hamburger}
                alt="Menu"
                className={showHamburger ? 'visible' : 'hidden'}
                id='hamburger'
              />
              <img
                src={hamburgerX}
                alt="Menu"
                className={showHamburger ? 'hidden' : 'visible'}
                id='hamburger'
              />
            </div>
              
          </div>
      </div>
    )
}

export default Header