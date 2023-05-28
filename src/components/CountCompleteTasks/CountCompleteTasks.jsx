import React from 'react'
import './CountCompleteTasks.css'

function CountCompleteTasks ({ countTasksCheck, totalCountTasks }) {
  return (
    <section className='container-count'>
      <h2>
        Tienes {countTasksCheck.length} tareas completadas de {totalCountTasks.length}
      </h2>
    </section>
  )
}

export { CountCompleteTasks }
