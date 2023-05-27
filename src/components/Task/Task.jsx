import React, { useState } from 'react'
import ButtonCheck from './ButtonCheck/ButtonCheck'
import './Task.css'

function Task ({ children, check, setSave }) {
  const [isCheck, setIsCheck] = useState(check)

  const classIsCheck = isCheck ? 'isCheck' : ''
  return (
    <div className='container-task'>
      <ButtonCheck setIsCheck={setIsCheck} isCheck={isCheck} />
      <span className={`text-task ${classIsCheck} `}>{children}</span>
      <button className='change-button'></button>
    </div>
  )
}

export default Task
