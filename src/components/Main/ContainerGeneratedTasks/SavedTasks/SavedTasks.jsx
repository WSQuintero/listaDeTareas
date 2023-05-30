import React from 'react'
import Task from '../../../Task/Task'
import './SavedTasks.css'
function SavedTasks ({
  tasks,
  checkTasks,
  setCheckTasks,
  setTasks,
  deleteTasks,
  setDeleteTasks
}) {
  return tasks.length !== 0
    ? (
        tasks.map((task) => {
          return (
        <Task
          key={task}
          check={checkTasks && !!checkTasks.includes(task)}
          setCheckTasks={setCheckTasks}
          checkTasks={checkTasks}
          tasks={tasks}
          setTasks={setTasks}
          deleteTasks={deleteTasks}
          setDeleteTasks={setDeleteTasks}
          isDelete={deleteTasks && !!deleteTasks.includes(task)}
        >
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
