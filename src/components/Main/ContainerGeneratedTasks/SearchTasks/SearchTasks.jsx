import React from 'react'
import Task from '../../../Task/Task'

function SearchTasks ({ tasks, searchTasks, setIsCheck, isCheck }) {
  const filterTask = tasks.filter((task) => {
    return String(task[0].toLowerCase()).startsWith(
      String(searchTasks.toLowerCase())
    )
  })
  return filterTask.map((filter) => {
    return (
      <Task
        key={filter[0]}
        setIsCheck={setIsCheck}
        isCheck={isCheck}
        check={!filter[1]}
      >
        {filter[0]}
      </Task>
    )
  })
}

export { SearchTasks }
