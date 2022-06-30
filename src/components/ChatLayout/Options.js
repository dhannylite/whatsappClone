import React from 'react'
import './Option.css'
import {archiveActions} from '../../store/archive-slice'
import { useDispatch, useSelector } from 'react-redux'
import { messageAction } from '../../store/message-slice'
import { useHistory, useNavigate } from 'react-router-dom'

export default function Options(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const archived = useSelector(state => state.archive.archived)
  // const history = useHistory()
  function archiveHandler() {
    dispatch(archiveActions.addToArchive(props.id))
    dispatch(messageAction.addToArchive(props.id))
    // dispatch(archiveActions.addToArchive(props.id))
    // dispatch(messageAction.addToArchive(props.id))
    // dispatch(archiveActions.setArchived())
    // console.log(props.id+1, 'helloworld')
    // if (archived) {
    //   console.log(7)
    //   navigate('/')
  
    // }
  }
  function addToMessage() {
    dispatch(messageAction.addToMessage(props.id))
  }
    return (
     
      <div className={`options ${props.active? 'active' : ''}`}>
          <ul>
                {props.options.map((option, id) => {
                    if (option === 'archive') {
                        return <li key={id} onClick={archiveHandler}>{ option}</li>
                  }
                  if (option === 'unarchive') {
                    return <li key={id} onClick={addToMessage}>{ option}</li>
                  }
                  return <li key={id}>
                      {option}
                  </li>
              })}
          </ul>
    </div>
  )
}
