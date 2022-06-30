import React from "react";
import formatTime from "../../utils/formatTime";
import classes from "./ConvoItem.module.css";
import image from "../../assets/img/women.jpeg";
import DoubleTick from "../../assets/Icons/DoubleTick";
import SingleTick from "../../assets/Icons/SingleTick";
import DownArrow from "../../assets/Icons/DownArrow"
import Lock from '../../assets/Icons/Lock'

export default function ConvoItem(props) {
  // console.log(props.messages);

  return (
    <div className={classes.message}>
      <div className={classes["date-box"]}>
        <div className={classes.date}>{props.date} </div>
        {props.id === 0 && <div className={classes.encrypt}>
        <span className={classes.lock}><Lock /></span>
          <span>Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Click to learn more.</span>
        </div>}
      </div>
      <div className={classes.grouped}>
        {props.messages.map((message, id) => {
          //   console.log(message.content)
          const last = props.date === 'TODAY' && id === props.messages.length - 1
          return (
            <div
              id={last ? 'last' : id}
              className={!message.sender ? classes.rdx : classes.snd}
              key={id}
            >
              {message.sender && message.content && (
                <div className={classes.sender}>
                  <p>
                    {message.content}
                    <span className={classes.filler}></span>
                    <span className={classes.footer}>
                      <span>{formatTime(message.time)}</span>
                    </span>
                    <button className={classes.btn}>
                      <DownArrow className='icon' />
                    </button>
                  </p>
                </div>
              )}
              {message.sender && message.image && (
                <div className={classes["sender-img"]}>
                  <img src={image} alt="women pic" />
                  <span className={classes.footer}>
                      <span>{formatTime(message.time)}</span>
                  </span>
                  <button className={classes.btn}>
                      <DownArrow className='icon' />
                    </button>
                </div>
              )}
              {!message.sender && message.content && (
                <div className={classes.reader}>
                  <p>
                    {message.content}
                    <span className={classes.filler}></span>
                    <span className={classes.footer}>
                                  <span>{formatTime(message.time)}</span>
                                  {message.status === 'read' && <DoubleTick className='read'/>}
                                  {message.status === 'sent' && <SingleTick />}
                                  {!message.status && <DoubleTick/>}
                    </span>
                    <button className={classes.btn}>
                      <DownArrow className='icon' />
                    </button>
                  </p>
                </div>
              )}
              {!message.sender && message.image && (
                <div className={classes["reader-img"]}>
                  <img src={image} alt="women pic" />
                  <span className={classes.footer}>
                                  <span>{formatTime(message.time)}</span>
                                  {message.status === 'read' && <DoubleTick className='read'/>}
                                  {message.status === 'sent' && <SingleTick />}
                                  {!message.status && <DoubleTick/>}
                  </span>
                  <button className={classes.btn}>
                      <DownArrow className='icon' />
                    </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
