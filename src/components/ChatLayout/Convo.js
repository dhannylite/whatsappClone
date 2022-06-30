import React from 'react'
import classes from './Convo.module.css'
import ConvoItem from './ConvoItem'
// import DownArrow from '../../assets/Icons/DownArrow'

export default function Convo(props) {
    const dates = Object.keys(props.messages)
    // console.log(props.messages[dates[0]])
    
  return (
    <div className={classes.convo}>
      {/* <button className={classes.button} onClick={props.onScroll}><DownArrow className='icon' /></button> */}
          {dates.map((date, id) => {
              const messages = props.messages[dates[id]]
              // console.log(messages, date)
              return <ConvoItem key={id} id={id} date={date} messages={messages} />
          })}
    </div>
  )
}
