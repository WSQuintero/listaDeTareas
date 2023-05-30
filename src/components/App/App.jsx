import React from 'react'
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
import { useTaskManager } from '../../logic/useTaskManager'
import './App.css'

function App () {
  const {
    checkTasks,
    setCheckTasks,
    deleteTasks,
    setDeleteTasks,
    tasks,
    setTasks,
    searchTasks,
    setSearchTasks
  } = useTaskManager()

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
