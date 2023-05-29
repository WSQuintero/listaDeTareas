import React, { useState } from 'react'
import './AddNewTask.css'

function AddNewTask ({ tasks, setTasks }) {
  const [inputText, setInputText] = useState('')
  const [error, setError] = useState()

  const sendTasks = () => {
    if (inputText !== '') {
      if (!tasks.includes(inputText)) {
        setTasks([...tasks, inputText])
        setInputText('')
        setError('')
      } else {
        setError('La tarea ya se encuentra ingresada')
      }
    }
  }

  const pressEnter = (event) => {
    if (event.key === 'Enter') {
      sendTasks()
    }
  }
  const pressClick = () => {
    sendTasks()
  }
  return (
    <>
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
          placeholder='* Desayunar'
        />
        <button
          type='button'
          className='button-new-task'
          onClick={() => pressClick()}
        >
          Crear
        </button>
      </form>
      <span className='error'>{error}</span>
    </>
  )
}
export { AddNewTask }
