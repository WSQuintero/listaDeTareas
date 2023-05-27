import React from 'react'
import './SearchTask.css'

function SearchTask ({ searchTasks, setSearchTasks }) {
  return (
    <nav className='navBar'>
      <form action=''>
        <input type='text' className='input-search' value={searchTasks} onChange={(event) => setSearchTasks(event.target.value)}/>
        <button type='button' className='button-search'></button>
      </form>
    </nav>
  )
}

export { SearchTask }
