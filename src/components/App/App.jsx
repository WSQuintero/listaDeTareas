import React, { useContext } from 'react'
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
import { Context } from '../../Context/TaskContext'
import './App.css'

function App () {
  const { searchTasks } = useContext(Context)
  return (
    <>
      <Header>
        <GeneralTitle />
        <SearchTask />
      </Header>
      <CountCompleteTasks />
      <Main>
        <ContainerAddTask>
          <AddNewTask />
        </ContainerAddTask>
        <ContainerGeneratedTasks>
          {searchTasks !== '' ? <SearchTasks /> : <SavedTasks />}
        </ContainerGeneratedTasks>
      </Main>
    </>
  )
}

export default App
