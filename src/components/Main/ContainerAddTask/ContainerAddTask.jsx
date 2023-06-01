import React from 'react'
import './ContainerAddTask.css'

function ContainerAddTask ({ children }) {
  return (
    <aside className='container-addTask'>
      {children}
      <img
        src='/arrowUp.svg'
        className='giff'
      ></img>
    </aside>
  )
}

export { ContainerAddTask }
