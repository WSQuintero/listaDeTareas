import { useEffect, useState } from 'react'

function useTaskManager () {
  const [checkTasks, setCheckTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('checkTasks')) || []
  })
  const [deleteTasks, setDeleteTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('deleteTasks')) || []
  })
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('tasks')) || []
  })
  const [searchTasks, setSearchTasks] = useState('')

  useEffect(() => {
    const checkTasksJSON = JSON.stringify(checkTasks)
    localStorage.setItem('checkTasks', checkTasksJSON)
  }, [checkTasks])

  useEffect(() => {
    const tasksJSON = JSON.stringify(tasks)
    localStorage.setItem('tasks', tasksJSON)
  }, [tasks])

  useEffect(() => {
    const deleteTasksJSON = JSON.stringify(deleteTasks)
    localStorage.setItem('deleteTasks', deleteTasksJSON)

    const deleteFilter = tasks.filter((task) => {
      return !deleteTasks.includes(task)
    })
    const deleteFind = tasks.filter((task) => {
      return deleteTasks.includes(task)
    })
    const checkFilter = tasks.filter((task) => {
      return !checkTasks.includes(task)
    })

    if (deleteTasks.length !== 0) {
      setTasks(deleteFilter)
      setCheckTasks(checkFilter)
      setDeleteTasks(deleteFind)
    }
  }, [deleteTasks])

  return {
    checkTasks,
    setCheckTasks,
    deleteTasks,
    setDeleteTasks,
    tasks,
    setTasks,
    searchTasks,
    setSearchTasks
  }
}

export { useTaskManager }
