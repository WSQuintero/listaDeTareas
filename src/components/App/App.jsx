import React, { useEffect, useState } from 'react'
import { AddNewTask } from '../Main/AddNewTask/AddNewTask'
import { ContainerAddTask } from '../Main/ContainerAddTask/ContainerAddTask'
import { ContainerGeneratedTasks } from '../Main/ContainerGeneratedTasks/ContainerGeneratedTasks'
import { CountCompleteTasks } from '../CountCompleteTasks/CountCompleteTasks'
import { GeneralTitle } from '../Header/GeneralTitle/GeneralTitle'
import { SavedTasks } from '../Main/ContainerGeneratedTasks/SavedTasks/SavedTasks'
import { SearchTask } from '../Header/SearchTask/SearchTask'
import { TitleAddTask } from '../Main/TitleAddTask/TitleAddTask'
import { Header } from '../Header/Header'
import { Main } from '../Main/Main'
import { SearchTasks } from '../Main/ContainerGeneratedTasks/SearchTasks/SearchTasks'
import './App.css'

function App () {
  const tasksInLocalStorage = JSON.parse(localStorage.getItem('tasks'))
  const [tasks, setTasks] = useState(tasksInLocalStorage || [])
  const [searchTasks, setSearchTasks] = useState('')

  const addToLocalStorage = () => {
    const tasksJSON = JSON.stringify(tasks)
    localStorage.setItem('tasks', tasksJSON)
  }

  useEffect(addToLocalStorage, [tasks])

  return (
    <>
      <Header>
        <GeneralTitle />
        <SearchTask searchTasks={searchTasks} setSearchTasks={setSearchTasks} />
      </Header>
      <CountCompleteTasks />
      <Main>
        <ContainerAddTask>
          <TitleAddTask />
          <AddNewTask tasks={tasks} setTasks={setTasks} />
        </ContainerAddTask>
        <ContainerGeneratedTasks>
          {searchTasks !== ''
            ? (
            <SearchTasks tasks={tasks} searchTasks={searchTasks} />
              )
            : (
            <SavedTasks tasks={tasks} setTasks={setTasks} />
              )}
        </ContainerGeneratedTasks>
      </Main>
    </>
  )
}

export default App
