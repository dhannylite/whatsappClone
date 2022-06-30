import React, { useState } from "react";
import Cancel from "../../assets/Icons/Cancel";
import classes from "./Profile.module.css";
import Search from "../layout/Search";
import image from "../../assets/img/empty_img.jpg";
import RightArrow from "../../assets/Icons/RightArrow";
import Block from "../../assets/Icons/Block";
import Delete from "../../assets/Icons/Delete";
import Report from "../../assets/Icons/Report";
import Check from "../../assets/Icons/Check";
import group_image from '../../assets/img/powerfulwomen.png'

export default function ChatAside(props) {
  console.log(props.user);
  const [check, setCheck] = useState(false);

  function checkHandler() {
    setCheck((prev) => !prev);
  }
  return (
    <div className={classes.profile}>
      <div className={classes.profile_info}>
        <div className={classes.img_box}>
          <img src={props.user.profile_picture} alt="a pic" />
        </div>
        <p>{props.user.name}</p>
      </div>
      <div className={classes.media}>
        <div className={classes.heading_text}>
          <p className={classes.heading}>Media, Links and Documents</p>
          <button>
            <RightArrow className="icon" />
          </button>
        </div>
        <div className={classes.img_boxes}>
          <div className={classes.imgs}>
            <img src={image} alt="empty img" />
          </div>
          <div className={classes.imgs}>
            <img src={image} alt="empty img" />
          </div>
          <div className={classes.imgs}>
            <img src={image} alt="empty img" />
          </div>
        </div>
      </div>
      <div className={classes.list_box}>
        <ul>
          <li>
            Mute Notifications
            <div
              onClick={checkHandler}
              className={`${classes.check} ${check ? classes.active : ""}`}
            >
              <Check className={classes.checker} />
              {/* <input type='checkbox' id="checkbox"/>
              <label htmlFor="checkbox">
                  <Check />
              </label> */}
            </div>
          </li>
          <li>
            Starred Messages
            <RightArrow />
          </li>
          <li className={classes.last}>
            <div>
              <p>Disappearing Messages</p>
              <span>off</span>
            </div>
            <RightArrow />
          </li>
        </ul>
      </div>
      <div className={classes.contact}>
        <p className={classes.heading}>About and phone number</p>
        <p className={classes.text}>Out here saving the world, one block of code at a time.</p>
        <span>{props.user.phone_number}</span>
      </div>
      <div className={classes.groups}>
      <div className={classes.heading_text}>
          <p className={classes.heading}>Groups in common</p>
          <p className={classes.heading}>
            3
          </p>
        </div>
        <ul className={classes.group_list}>
          <li>
            <div className={classes.group_img}>
              <img src={group_image} alt='powerful women' />
            </div>
            <div className={classes.group_content}>
              <p className={classes.group_name}>Group 1</p>
              <p className={classes.group_people}>Ekwe Christopher, Femi, Tochi,  You</p>
            </div>
          </li>
          <li>
            <div className={classes.group_img}>
              <img src={group_image} alt='powerful women' />
            </div>
            <div className={classes.group_content}>
              <p className={classes.group_name}>Group 2</p>
              <p className={classes.group_people}> Charis, Charles, Uchiha Madara, Uchiha Itachi, You</p>
            </div>
          </li>
          <li>
            <div className={classes.group_img}>
              <img src={group_image} alt='powerful women' />
            </div>
            <div className={classes.group_content}>
              <p className={classes.group_name}>Group 3</p>
              <p className={classes.group_people}>Ekwe Christopher, Femi, Tochi, Charis, Charles, Uchiha Madara, Uchiha Itachi, YouEkwe Christopher, Femi, Tochi, Charis, Charles, Uchiha Madara, Uchiha Itachi, You</p>
            </div>
          </li>
        </ul>
      </div>
      <div className={classes.others}>
        <Block />
        <span>Block</span>
      </div>
      <div className={classes.others}>
        <Report />
        <span>Report contact</span>
      </div>
      <div className={classes.others}>
        <Delete />
        <span>Delete chat</span>
      </div>
    </div>
  );
}
