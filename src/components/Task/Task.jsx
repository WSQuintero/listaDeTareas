import React, { useContext, useState } from 'react'
import ButtonCheck from './ButtonCheck/ButtonCheck'
import { Context } from '../../Context/TaskContext'
import './Task.css'

function Task ({
  children,
  check,
  isDelete
}) {
  const { setDeleteTasks, deleteTasks } = useContext(Context)
  const [isCheck, setIsCheck] = useState(check)
  const classIsCheck = isCheck ? 'isCheck' : ''

  return (
    <div className='container-task'>
      <ButtonCheck text={children} isCheck={isCheck} setIsCheck={setIsCheck} />
      <span className={`text-task ${classIsCheck}`}>{children}</span>
      <button
        className='change-button'
        onClick={() => {
          if (!isDelete) {
            setDeleteTasks([...deleteTasks, children])
          }
          // setTasks(children, isDelete)
        }}
      >
        X
      </button>
    </div>
  )
}

export default Task
