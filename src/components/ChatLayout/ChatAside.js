import React from 'react'
import classes from './ChatAside.module.css'
import Cancel from '../../assets/Icons/Cancel'

export default function ChatAside(props) {
  return (
    <aside className={`${classes.aside} ${props.active ? classes.active : ''}`}>
          <header className={classes.header}>  
        <button onClick={props.onHide}><Cancel className='icon' /></button>
        <p>{props.heading}</p>
          </header>
              <div>{props.children}</div>
    </aside>
  )
}
