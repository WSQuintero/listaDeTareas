import React, { useContext } from 'react'
import { Context } from '../../../Context/TaskContext'
import './SearchTask.css'

function SearchTask () {
  const { searchTasks, setSearchTasks } = useContext(Context)
  return (
    <nav className='navBar'>
      <form action=''>
        <input
          type='text'
          className='input-search'
          value={searchTasks}
          onKeyDown={(event) =>
            event.key === 'Enter' ? event.preventDefault() : false
          }
          onChange={(event) => setSearchTasks(event.target.value)}
          placeholder='Mercar'
        />
        <svg
          width='30px'
          height='30px'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            opacity='0.1'
            d='M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z'
            fill='#323232'
          />
          <path
            d='M17 17L21 21'
            stroke='#323232'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z'
            stroke='#323232'
            strokeWidth='2'
          />
        </svg>
      </form>
    </nav>
  )
}

export { SearchTask }
