import React, { useState } from "react";
import ben from "../../assets/img/ben.jpg";
import Status from "../../assets/Icons/Status";
import Chat from "../../assets/Icons/Chat";
import Menu from "../../assets/Icons/Menu";
import classes from './Header.module.css'
import Options from "../ChatLayout/Options";

export default function Header(props) {
  const [showOption, setShowOption] = useState(false)

  function optionHandler() {
    setShowOption(prev => !prev)
  }
  return (
    <header className={classes.header}>
      <div className={classes['img-box']} onClick={props.onShow}>
        <img src={ben} alt="a guys pic"/>
      </div>
      <nav className={classes.nav}>
        <button className={classes.btn}><Status /></button>
        <button className={classes.btn}><Chat /></button>
        <div className={classes.button_wrapper}>
          <button className={`${classes.last} ${showOption ? classes.active : ''}`} onClick={optionHandler}>   
                <Menu />
          </button>
          <Options options={[
            'New Group',
            'Create a room',
            'Profile',
            'Achived',
            'Starred',
            'Settings',
            'Log out'
          ]}
            active={showOption} />
        </div>
      </nav>
    </header>
  );
}
