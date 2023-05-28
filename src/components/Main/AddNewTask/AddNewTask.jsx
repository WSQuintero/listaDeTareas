import React, { useState } from 'react'
import './AddNewTask.css'

function AddNewTask ({ tasks, setTasks }) {
  const [inputText, setInputText] = useState('')
  const pressEnter = (event) => {
    if (event.key === 'Enter') {
      setTasks([...tasks, [inputText, false]])
      setInputText('')
    }
  }
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
        onKeyDown={pressEnter}
      />
      <button
        type='button'
        className='button-new-task'
        onClick={() => {
          setTasks([...tasks, inputText]); setInputText('')
        }}
      >
        Crear
      </button>
    </form>
  )
}

export { AddNewTask }
