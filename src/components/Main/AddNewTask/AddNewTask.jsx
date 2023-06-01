import React, { useContext } from 'react'
import { useAddNewTask } from '../../../logic/useAddNewTask'
import { Context } from '../../../Context/TaskContext'
import './AddNewTask.css'

function AddNewTask () {
  const { tasks, setTasks } = useContext(Context)

  const {
    setInputText,
    pressClick,
    pressEnter,
    error,
    inputText
  } = useAddNewTask(tasks, setTasks)

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
