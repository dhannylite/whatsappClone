import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { archiveActions } from "../../store/archive-slice";
import ContactItem from "./ContactItem";
import classes from "./ContactList.module.css";

export default function ContactList(props) {
    const showArchive = useSelector((state) => state.archive.showArchive);
    const total = useSelector(state => state.message.archivedUsers)
    const totalAchived = total.length
  const dispatch = useDispatch();
  function showArchiveHandler() {
    dispatch(archiveActions.viewArchive());
  }
  console.log(props.contacts);
  return (
    <ul className={classes.list}>
      {!showArchive && (
        <div onClick={showArchiveHandler} className={classes.archive}>
                  <ion-icon name="archive-outline"></ion-icon>
                  <div className={classes.archived_info}>
                  <p>Archived</p>
                  {totalAchived > 0 && <span>{ totalAchived}</span>}
                  </div>
        </div>
      )}
      {props.contacts.map((contact, id) => {
        const last = contact.messages.TODAY.length - 1;
        const lastMessage = contact.messages.TODAY[last];
        return (
          <ContactItem
            key={contact.id}
            id={contact.id}
            profilePicture={contact.profile_picture}
            name={contact.name}
            lastMessage={lastMessage}
            unread={contact.unread}
            typing={contact.typing}
          />
        );
      })}
    </ul>
  );
}
