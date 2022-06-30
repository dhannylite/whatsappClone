import React, { useEffect, useState } from 'react'
import './Loader.css'
import Whatsapp from '../../assets/Icons/Whatsapp'
import Lock from '../../assets/Icons/Lock'

export default function Loader(props) {
    console.log(props.done)
    const [loading, setLoading] = useState(0)
    useEffect(() => {
        if (loading !== 100) {
            const interval = setInterval(() => {
                setLoading(prev => prev+10)
            }, 300)
            return () => {
                clearInterval(interval)
            }
        }
    })
  return (
      <div className='loader'>
          <div className='loader_wrapper'>
              <Whatsapp className='icons'/>
          </div>
          <div className={`loader_progress ${props.done ? 'done' : ''}`}></div>
          <p className='loading'>Downloading Messages: {`${loading}%`}</p>
          <span>Whatsapp</span>
          <p> <Lock />
              End-to-end encrypted. Built by Okorie Daniel.
          </p>
    </div>
  )
}
