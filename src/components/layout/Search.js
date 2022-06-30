import React from 'react'
import './Search.css'
import SearchIcon from '../../assets/Icons/SearchIcon'
import Back from '../../assets/Icons/Back'

export default function Search(props) {
  return (
      <div className='search-wrapper'>
          <input placeholder={props.placeholder} />
          <div className='search-icon'>
        <SearchIcon className="icon search" />
            <button className='back-btn'>
                <Back />
            </button>
          </div>
    </div>
  )
}
