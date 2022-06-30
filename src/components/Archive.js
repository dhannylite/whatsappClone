import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Back from '../assets/Icons/Back'
import { archiveActions } from '../store/archive-slice'
import './Archive.css'
import Contact from './Contacts/Contact'

export default function Archive(props) {
    const contacts = useSelector(state => state.message.archivedUsers)
    const dispatch = useDispatch()
    function closeHandler() {
        dispatch(archiveActions.closeArchive())
    }
    console.log(contacts, 'hiiiiiiiiii')
    return (
        <div className={`archive ${props.active ? 'active' : ''}`}>
            <header className='header' >
                <button onClick={closeHandler}><Back className='icon'/></button>
                <p>Archive</p>
            </header>
            <div className='contact-box'>
                <Contact contacts={contacts} />
            </div>
        </div>
      
      
  )
}
