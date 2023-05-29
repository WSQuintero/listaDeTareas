import React from 'react'
import './CountCompleteTasks.css'

function CountCompleteTasks ({ countTasksCheck, totalCountTasks }) {
  return (
    <section className='container-count'>
      <h2>
        Tienes {<span className='count-number'>{countTasksCheck.length}</span>}{' '}
        tareas completadas de{' '}
        {<span className='count-number'>{totalCountTasks.length}</span>}
      </h2>
    </section>
  )
}

export { CountCompleteTasks }
