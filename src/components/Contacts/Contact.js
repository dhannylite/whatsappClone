import React from 'react'
// import users from '../../data/contacts'
import ContactList from './ContactList'
import classes from './Contact.module.css'
import { useSelector } from 'react-redux'

export default function Contact(props) {
  const users = useSelector(state => state.message.users)
  const typing = useSelector(state => state.message.newMessage)
  const contacts = useSelector(state => state.message.archivedUsers)
  const show = useSelector(state => state.archive.showArchive)

  // console.log(users, 'user')
  // if (users.length === 0) {
  //   console.log(users, 'usesss')
  //   return
  // }
  return (
      <div className={classes.contact}>
      {!show && <ContactList contacts={users} />}
      {show && <ContactList contacts={contacts} />}
    </div>
  )
}
