import React from 'react'
import Hero from './Hero/Hero'
import Registration from './Registration/Registration'
import Order from './Order/Order'

const Home = () => {
  return (
    <div className="Home">
        <Hero/>
        <Registration/>
        <Order/>
    </div>
  )
}

export default Home