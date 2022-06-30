import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Archive from './Archive'
import Aside from './Aside'
import Personal from './Personal'
import './SideBar.css'

export default function SideBar() {
    const show = useSelector(state => state.archive.showArchive)
    const [showProfile, setShowProfile] = useState(false)
    console.log('sidee')
    function showProfileHandler() {
        setShowProfile(true)
    }
    function hideProfileHandler() {
        setShowProfile(false)
    }
  return (
      <div className='sidebar'>
          <Archive active={show} />
          <Personal show={showProfile} onClose={hideProfileHandler}/>
          <Aside onShow={showProfileHandler}/>
      </div>
  )
}
