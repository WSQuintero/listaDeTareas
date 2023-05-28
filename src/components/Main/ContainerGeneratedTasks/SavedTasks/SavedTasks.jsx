import React from 'react'
import Task from '../../../Task/Task'

function SavedTasks ({
  tasks,
  checkTasks,
  setCheckTasks,
  setTasks,
  deleteTasks,
  setDeleteTasks
}) {
  const deleteFilter = tasks.filter((task) => {
    return !deleteTasks.includes(task)
  })
  if (deleteTasks.length !== 0) {
    return deleteFilter.map((task) => {
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
  } else {
    return tasks.map((task) => {
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
          deleteFilter={deleteFilter}
        >
          {task}
        </Task>
      )
    })
  }
}

export { SavedTasks }
