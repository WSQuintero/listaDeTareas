import React, { useContext } from 'react'
import Task from '../../../Task/Task'
import { Context } from '../../../../Context/TaskContext'
import './searchTasks.css'

function SearchTasks () {
  const { tasks, searchTasks, checkTasks } = useContext(Context)
  const check = (task) => checkTasks && !!checkTasks.includes(task)
  const filterTask = tasks.filter((task) => String(task).toLowerCase()
    .includes(String(searchTasks.toLowerCase()))
  )

  return filterTask.length !== 0
    ? (filterTask.map((task) => {
        return (
        <Task key={task} check={check(task)}>
          {task}
        </Task>
        )
      })
      )
    : <span className='empty'>No se encontraron tareas</span>
}

export { SearchTasks }
