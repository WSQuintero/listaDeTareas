import React, { useState } from 'react'
import ButtonCheck from './ButtonCheck/ButtonCheck'
import './Task.css'

function Task ({
  children,
  check,
  checkTasks,
  setCheckTasks,
  setTasks,
  tasks,
  deleteTasks,
  setDeleteTasks,
  isDelete,
  deleteFilter
}) {
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
        setTasks={setTasks}
        tasks={tasks}
      />
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
