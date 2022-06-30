import React from 'react'
import Header from './layout/Header'
import './Aside.css'
import Alert from './layout/Alert'
import Search from './layout/Search'
import Contact from './Contacts/Contact'

export default function Aside(props) {
  return (
    <aside className={`aside`}>
      <Header onShow={props.onShow} />
          <Alert />
          <Search placeholder='Search or start a new chat'/>
          <Contact />
    </aside>
  )
}
