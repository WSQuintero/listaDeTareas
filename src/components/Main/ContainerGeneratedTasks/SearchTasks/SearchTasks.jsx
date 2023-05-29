import React from 'react'
import Task from '../../../Task/Task'
import './searchTasks.css'

function SearchTasks ({
  tasks,
  searchTasks,
  setIsCheck,
  isCheck,
  checkTasks,
  setCheckTasks,
  deleteTasks,
  setDeleteTasks,
  setEmptyText
}) {
  const filterTask = tasks.filter((task) => {
    return String(task)
      .toLowerCase()
      .includes(String(searchTasks.toLowerCase()))
  })
  if (filterTask.length !== 0) {
    return filterTask.map((task) => {
      return (
        <Task
          key={task}
          setIsCheck={setIsCheck}
          isCheck={isCheck}
          check={checkTasks && !!checkTasks.includes(task)}
          setCheckTasks={setCheckTasks}
          checkTasks={checkTasks}
          deleteTasks={deleteTasks}
          setDeleteTasks={setDeleteTasks}
        >
          {task}
        </Task>
      )
    })
  } else {
    return <span className='empty'>No se encontraron tareas</span>
  }
}

export { SearchTasks }
