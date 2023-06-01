import React, { useContext } from 'react'
import Task from '../../../Task/Task'
import { Context } from '../../../../Context/TaskContext'
import './SavedTasks.css'

function SavedTasks () {
  const { tasks, checkTasks, deleteTasks } = useContext(Context)
  const isCheck = (task) => checkTasks && !!checkTasks.includes(task)
  const isDelete = (task) => deleteTasks && !!deleteTasks.includes(task)

  return tasks.length !== 0
    ? (
        tasks.map((task) => {
          return (
            <Task key={task} check={isCheck(task)} isDelete={isDelete(task)}>
              {task}
            </Task>
          )
        })
      )
    : (
    <h2 className='elseTasks'>Por favor agrega tus tareas aquí</h2>
      )
}

export { SavedTasks }
