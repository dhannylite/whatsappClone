import React from 'react'
import './Home.css'
import image from '../assets/img/home-img.jpg'
import Laptop from '../assets/Icons/Laptop'

export default function Home() {
  return (
    <div className='home'>
      <div className='home-img-box'>
        <img src={image} alt='whatapp connect' />
      </div>
      <div className='home-heading'>
        <h1>Keep your phone connected</h1>
      </div>
      <div className='home-content'>
        <p>WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi.</p>
      </div>
      <div className='home-footer'>
        <Laptop />
          <p>WhatsApp is available for Mac. <a href='#'>Get it here.</a></p>
      </div>
    </div>
  )
}
