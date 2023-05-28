import React from 'react'
import Task from '../../../Task/Task'

function SearchTasks ({
  tasks,
  searchTasks,
  setIsCheck,
  isCheck,
  checkTasks,
  setCheckTasks
}) {
  const filterTask = tasks.filter((task) => {
    return String(task)
      .toLowerCase()
      .includes(String(searchTasks.toLowerCase()))
  })
  return filterTask.map((task) => {
    return (
      <Task
        key={task}
        setIsCheck={setIsCheck}
        isCheck={isCheck}
        check={checkTasks && !!checkTasks.includes(task)}
        setCheckTasks={setCheckTasks}
        checkTasks={checkTasks}
      >
        {task}
      </Task>
    )
  })
}

export { SearchTasks }
