import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DoubleTick from "../../assets/Icons/DoubleTick";
import SingleTick from "../../assets/Icons/SingleTick";
import classes from "./ContactItem.module.css";
import formatTime from "../../utils/formatTime";
import DownArrow from "../../assets/Icons/DownArrow"
import Options from "../ChatLayout/Options";
import { useDispatch, useSelector } from "react-redux";
import { archiveActions } from "../../store/archive-slice";

export default function (props) {
  let status;
  const [showOption, setShowOption] = useState(false)
  const archived = useSelector(state => state.archive.showArchive)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function optionHandler() {
    setShowOption(prev => !prev)
  }
  if (props.lastMessage.status === "read") {
    status = <DoubleTick className='read' />;
  }
  if (props.lastMessage.status === "sent") {
    status = <SingleTick />;
  }
  if (!props.lastMessage.status && !props.lastMessage.sender) {
    status = <DoubleTick/>;
  }

  let {id} = props
  // console.log(props.typing)
  // if (!archieved) {
  //   id = id
  // }
  // if (archieved) {
  //   id = +id + 1
  //   dispatch(archiveActions.closeArchive())
  // }
  // console.log(archieved, 'archived', id)
  return (
    <li className={classes.li}>
      <Link className={classes.contact} to={ `/chat/${id}`}>
        <div>
          <img src={props.profilePicture} />
        </div>
        <div className={classes["content-box"]}>
          <div className={classes['top-content']}>
            <p className={classes.name}>{props.name}</p>
            <div className={classes.time}>
              {formatTime(props.lastMessage.time)}
            </div>
          </div>
          <div className={classes.content}>
            <div className={classes.main}>
              {!props.typing && status}
              <span className={`${props.typing ? classes.typing : ''}`}>{props.typing ? 'Typing...' : props.lastMessage.content}</span>
            </div>
            <div className={`${classes.icons} ${showOption ? classes.active : ''}`}>
              {props.unread > 0 && <span className={classes.unread}>{props.unread}</span>}
              <div className={classes.button_wrapper}>
                <button className={`${classes.btn} ${showOption ? classes.active : ''}`} onClick={optionHandler}>
                  <DownArrow className='icon' />
                </button>
                {/* <div>hello</div> */}
                {!archived &&<Options options={['archive', 'Message']} active={showOption} id={props.id} />}
                {archived && <Options options={['unarchive', 'Message']} active={showOption} id={props.id} />}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
