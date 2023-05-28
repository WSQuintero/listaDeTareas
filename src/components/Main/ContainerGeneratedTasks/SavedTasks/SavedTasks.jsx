import React from 'react'
import Task from '../../../Task/Task'

function SavedTasks ({
  tasks,
  checkTasks,
  setCheckTasks
}) {
  console.log(checkTasks)
  return tasks.map((task) => {
    return (
      <Task
        key={task}
        check={checkTasks && !!checkTasks.includes(task)}
        setCheckTasks={setCheckTasks}
        checkTasks={checkTasks}
      >
        {task}
      </Task>
    )
  })
}

export { SavedTasks }
