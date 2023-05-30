import { useState } from 'react'

function useAddNewTask (tasks, setTasks) {
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

  return { setInputText, pressClick, pressEnter, error, inputText }
}

export { useAddNewTask }
