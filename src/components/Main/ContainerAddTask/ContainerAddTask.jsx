import React from 'react'
import { ArrowUp } from './ArrowUp.jsx/ArrowUp'
import './ContainerAddTask.css'

function ContainerAddTask ({ children }) {
  return (
    <aside className='container-addTask'>
      {children}
      <ArrowUp />
    </aside>
  )
}

export { ContainerAddTask }
