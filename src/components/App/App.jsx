import React, { useEffect, useState } from 'react'
import { AddNewTask } from '../Main/AddNewTask/AddNewTask'
import { ContainerAddTask } from '../Main/ContainerAddTask/ContainerAddTask'
import { ContainerGeneratedTasks } from '../Main/ContainerGeneratedTasks/ContainerGeneratedTasks'
import { CountCompleteTasks } from '../CountCompleteTasks/CountCompleteTasks'
import { GeneralTitle } from '../Header/GeneralTitle/GeneralTitle'
import { SavedTasks } from '../Main/ContainerGeneratedTasks/SavedTasks/SavedTasks'
import { SearchTask } from '../Header/SearchTask/SearchTask'
import { Header } from '../Header/Header'
import { Main } from '../Main/Main'
import { SearchTasks } from '../Main/ContainerGeneratedTasks/SearchTasks/SearchTasks'
import './App.css'

function App () {
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

  return (
    <>
      <Header>
        <GeneralTitle />
        <SearchTask searchTasks={searchTasks} setSearchTasks={setSearchTasks} />
      </Header>
      <CountCompleteTasks
        countTasksCheck={checkTasks}
        totalCountTasks={tasks}
      />
      <Main>
        <ContainerAddTask>
          <AddNewTask tasks={tasks} setTasks={setTasks} />
        </ContainerAddTask>
        <ContainerGeneratedTasks>
          {searchTasks !== ''
            ? (
            <SearchTasks
              tasks={tasks}
              searchTasks={searchTasks}
              checkTasks={checkTasks}
              setCheckTasks={setCheckTasks}
              deleteTasks={deleteTasks}
              setDeleteTasks={setDeleteTasks}
            />
              )
            : (
            <SavedTasks
              tasks={tasks}
              setTasks={setTasks}
              checkTasks={checkTasks}
              setCheckTasks={setCheckTasks}
              deleteTasks={deleteTasks}
              setDeleteTasks={setDeleteTasks}
            />
              )}
        </ContainerGeneratedTasks>
      </Main>
    </>
  )
}

export default App
