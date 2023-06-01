import React, { useContext } from 'react'
import './CountCompleteTasks.css'
import { Context } from '../../Context/TaskContext'

function CountCompleteTasks () {
  const { checkTasks, tasks } = useContext(Context)

  return (
    <section className='container-count'>
      <h2 className='count'>
        Tienes {<span className='count-number'>{checkTasks.length}</span>}{' '}
        tareas completadas de{' '}
        {<span className='count-number'>{tasks.length}</span>}
      </h2>
    </section>
  )
}

export { CountCompleteTasks }
