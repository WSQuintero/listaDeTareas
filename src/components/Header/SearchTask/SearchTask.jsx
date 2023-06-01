import React, { useContext } from 'react'
import { Context } from '../../../Context/TaskContext'
import { Lupa } from '../GeneralTitle/Lupa.jsx/Lupa'
import './SearchTask.css'

function SearchTask () {
  const { searchTasks, setSearchTasks } = useContext(Context)
  return (
    <nav className='navBar'>
      <form action=''>
        <input
          type='search'
          className='input-search'
          value={searchTasks}
          onKeyDown={(event) =>
            event.key === 'Enter' ? event.preventDefault() : false
          }
          onChange={(event) => setSearchTasks(event.target.value)}
          placeholder='Buscar...'
        />
        <Lupa />
      </form>
    </nav>
  )
}

export { SearchTask }
