import React, { useState } from 'react'
import './AddNewTask.css'

function AddNewTask ({ tasks, setTasks }) {
  const [inputText, setInputText] = useState('')
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className='form-new-task'
    >
      <input
        type='text'
        className='input-new-task'
        onChange={(event) => setInputText(event.target.value)}
        value={inputText}
        onKeyDown={(event) =>
          event.key === 'Enter'
            ? setTasks([...tasks, [inputText, false]])
            : false
        }
      />
      <button
        type='button'
        className='button-new-task'
        onClick={() => setTasks([...tasks, [inputText, false]])}
      >
        Crear
      </button>
    </form>
  )
}

export { AddNewTask }
