import React from 'react'
import './Personal.css'
import ben from "../assets/img/ben.jpg"
import Back from '../assets/Icons/Back'

export default function Personal(props) {
  return (
      <div className={`personal ${props.show ? 'show' : ''}`}>
          <header className='header'>
            <button onClick={props.onClose}><Back className='icon'/></button>
            <p>Profile</p>
          </header>
          <section className='info'>  
            <div className='profile-img-box'>
                <img src={ben} alt='a person pic' />
            </div>
            <div className='personal-info'>
                  <p className='your-name'>Your name</p>
                  <div className='edit-name'>
                      <input value={"Annoynmous"} id="name" />
                      <label htmlFor='name'> 
                        <ion-icon name="pencil-sharp"></ion-icon>
                      </label>
                  </div>
                  <p className='text'>This is not your username or pin. This name will be visible to your Whatsapp contacts</p>
              </div>
              <div className='about'>
                  <p>About</p>
                  <div className='edit-about'>
                      <input value={"Hey there! I am using WhatsApp."} id="about" />
                      <label htmlFor='about'> 
                        <ion-icon name="pencil-sharp"></ion-icon>
                      </label>
                  </div>
              </div>
          </section>
      </div>
  )
}
