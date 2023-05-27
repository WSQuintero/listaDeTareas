import React, { useState } from 'react'
import Task from '../../../Task/Task'

function SavedTasks ({ tasks }) {
  return tasks.map((task) => {
    return (
      <Task key={task[0]} check={task[1]} >
        {task[0]}
      </Task>
    )
  })
}

export { SavedTasks }
