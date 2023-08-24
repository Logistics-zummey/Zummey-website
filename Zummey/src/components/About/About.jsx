import React from 'react'
import AboutHero from './AboutHero/AboutHero'
import AboutWe from './AboutWe/AboutWe'
import AboutWhy from './AboutWhy/AboutWhy'
import AboutRegistration from './AboutRegistration/AboutRegistration'
import AboutRegister from './AboutRegister/AboutRegister'
import Order from '../Home/Order/Order'

const About = () => {
  return (
    <div className="about">
        <AboutHero/>
        <AboutWe/>
        <AboutWhy/>
        <AboutRegistration/>
        <AboutRegister/>
        <Order/>
    </div>
  )
}

export default About