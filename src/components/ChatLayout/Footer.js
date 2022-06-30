import React, { useRef, useState } from "react";
import classes from "./Footer.module.css";
import Smiley from "../../assets/Icons/Smiley";
import Attach from "../../assets/Icons/Attach";
import Microphone from "../../assets/Icons/Microphone";
import Send from "../../assets/Icons/Send";
import Recent from "../../assets/Icons/Recent";
import Cancel from "../../assets/Icons/Cancel";
import Gif from "../../assets/Icons/Gif";
import AttachDoc from "../../assets/Icons/AttachDoc";
import AttachRoom from "../../assets/Icons/AttachRoom";
import AttachContact from "../../assets/Icons/AttachContact";
import AttachImage from "../../assets/Icons/AttachImage";
import AttachCamera from "../../assets/Icons/AttachCamera";
import Sticker from "../../assets/Icons/Sticker";
import EmojiActivity from "../../assets/Icons/EmojiActivity";
import EmojiPeople from "../../assets/Icons/EmojiPeople";
import EmojiNature from "../../assets/Icons/EmojiNature";
import EmojiFood from "../../assets/Icons/EmojiFood";
import EmojiTravel from "../../assets/Icons/EmojiTravel";
import EmojiObjects from "../../assets/Icons/EmojiObjects";
import EmojiSymbols from "../../assets/Icons/EmojiSymbols";
import EmojiFlags from "../../assets/Icons/EmojiFlags";
import DownArrow from '../../assets/Icons/DownArrow'

export default function Footer(props) {
  const [showEmoji, setShowEmoji] = useState(false);
  const [enteredText, setEnteredText] = useState("");
  const [showAttachment, setShowAttachment] = useState(false)
  const showSend = enteredText.trim().length > 0;
  function textHandler(event) {
    setEnteredText(event.target.value);
  }
  const emojiTabs = [
    { icon: <Recent className="icon" />, active: true },
    { icon: <EmojiPeople className="icon" />, active: false },
    { icon: <EmojiNature className="icon" />, active: false },
    { icon: <EmojiFood className="icon" />, active: false },
    { icon: <EmojiActivity className="icon" />, active: false },
    { icon: <EmojiTravel className="icon" />, active: false },
    { icon: <EmojiObjects className="icon" />, active: false },
    { icon: <EmojiSymbols className="icon" />, active: false },
    { icon: <EmojiFlags className="icon" />, active: false },
  ];
  const emojiCol = [...Array(11).keys()];
  const emojiRow = [...Array(6).keys()];

  function showEmojiHandler() {
    setShowEmoji(true)
  }

  function closeEmojiHandler() {
    setShowEmoji(false)
  }

  function showAttachments() {
    setShowAttachment(prev => !prev)
  }

  function submitHandler(event) {
    event.preventDefault()
    if (!showSend) {
      return
    }
    props.onAddMessage(enteredText)
    setEnteredText('')
  }
  // console.log(showAttachment);
  return (
    <div className={classes.footer}>
      <button className={classes.button} onClick={props.onScroll}><DownArrow className='icon' /></button>
      <div className={classes["emoji-wrapper"]}>
        {showEmoji && <div className={classes.emoji_tray}>
            <div className={classes.emoji_tab}>
              {emojiTabs.map((tab, id) => (
                <button
                key={id}
                  className={`${classes.tab} ${
                    tab.active ? classes.active : ""
                  }`}
                  >
                  {tab.icon}
                </button>
              ))}
            </div>
            <div className={classes.emoji_content}>
              <input placeholder="Search Emoji" />
              <h4>{"Smileys & People"}</h4>
              <div className={classes.emoji_grid}>
                {emojiRow.map((_, Rindex) =>
                  emojiCol.map((_, CIndex) => {
                    // console.log(7)
                    return (
                      <div
                        className={classes.emoji}
                        style={{
                          backgroundPositionX: CIndex * -44.5,
                          backgroundPositionY: Rindex * -52,
                        }}
                        ></div>
                        );
                      })
                      )}
                      </div>
              </div>
            </div>}
        <div className={classes.chat_input}>
          {showEmoji && <button>
            <Cancel className='icon' onClick={closeEmojiHandler} />
          </button>}
          <button onClick={showEmojiHandler}>
            <Smiley className="icon" />
          </button>
          {showEmoji && <button>
            <Gif className='icon' />
          </button>}
          {showEmoji && <button>
            <Sticker className='icon' />
          </button>}
          <div className={classes.attachments_box}>
            <div className={`${classes.attachments} ${showAttachment ? classes.attach : ''}`}>
              <button><AttachRoom /></button>
              <button><AttachContact /></button>
              <button><AttachDoc /></button>
              <button><AttachCamera /></button>
              <button><AttachImage /></button>
            </div>
            <button onClick={showAttachments}>
              <Attach className="icon" />
            </button>
          </div>
          <form onSubmit={submitHandler}>

          <input
            value={enteredText}
            placeholder="Type a message"
            onChange={textHandler}
          />
          <div>
          {!showSend && <button type="button">
            <Microphone className="icon" />
          </button>}
          {showSend && <button>
            <Send className="icon" />
          </button>}
          </div>
            </form>
        </div>
      </div>
    </div>
  );
}
