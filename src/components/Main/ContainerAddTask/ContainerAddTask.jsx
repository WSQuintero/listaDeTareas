import React from 'react'
import './ContainerAddTask.css'

function ContainerAddTask ({ children }) {
  return (
    <aside className='container-addTask'>
      {children}
      <img
        src='../../../../public/arrowUp.svg'
        className='giff'
      ></img>
    </aside>
  )
}

export { ContainerAddTask }
