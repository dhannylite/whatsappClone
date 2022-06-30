import React, { useState } from 'react'
import SearchIcon from '../../assets/Icons/SearchIcon'
import Menu from '../../assets/Icons/Menu'
import classes from './Header.module.css'
import Options from './Options'

export default function Header(props) {
  const [showOption, setShowOption] = useState(false)
  function optionHandler() {
    setShowOption(prev => !prev)
  }
  return (
    <header className={classes.header}>
      <div onClick={props.onShowProfile} className={classes.details_box}>
          <div className={classes['img-box']}><img src={props.profilePicture} alt='a picture' /></div>
          <div className={classes.details}>
              <p>{props.name}</p>
              <span>{props.typing ? 'typing...' : 'online'}</span>
          </div>
      </div>
          <div className={classes.btns}>
              <button onClick={props.onShowSearch}> 
                  <SearchIcon width={30} height={30} className='icon'/>
        </button>
        <div className={classes.button_wrapper}>
          <button className={`${classes.last} ${showOption ? classes.active : ''}`} onClick={optionHandler}>   
                <Menu />
          </button>
          <Options options={[
            'Contact Info',
            'Select Message',
            'Mute Notification',
            'Clear Messages',
            'Delete Chats'
          ]}
            active={showOption} />
        </div>
          </div>
    </header>
  )
}
