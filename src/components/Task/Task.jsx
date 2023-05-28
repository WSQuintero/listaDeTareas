import React, { useState } from 'react'
import ButtonCheck from './ButtonCheck/ButtonCheck'
import './Task.css'

function Task ({ children, check, checkTasks, setCheckTasks }) {
  const [isCheck, setIsCheck] = useState(check)

  const classIsCheck = isCheck ? 'isCheck' : ''

  return (
    <div className='container-task'>
      <ButtonCheck
        setIsCheck={setIsCheck}
        isCheck={isCheck}
        text={children}
        checkTasks={checkTasks}
        setCheckTasks={setCheckTasks}
      />
      <span className={`text-task ${classIsCheck} `}>{children}</span>
      <button className='change-button'></button>
    </div>
  )
}

export default Task
