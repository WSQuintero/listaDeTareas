import React, { createContext } from 'react'
import { useTaskManager } from '../logic/useTaskManager'
const Context = createContext()

function TaskContext ({ children }) {
  return (
    <Context.Provider value={useTaskManager()}>{children}</Context.Provider>
  )
}

export { TaskContext, Context }
