import React, { useContext } from 'react'
import { Context } from '../../../Context/TaskContext'
import './ButtonCheck.css'

function ButtonCheck ({ text, isCheck, setIsCheck }) {
  const { setCheckTasks, checkTasks } = useContext(Context)
  const colorCheck = isCheck ? 'color-check-green' : 'color-check'

  return (
    <button
      className='button-check'
      onClick={() => {
        setIsCheck(!isCheck)
        if (!isCheck) {
          setCheckTasks([...checkTasks, text])
        } else {
          const indexCheck = checkTasks.findIndex((check) => check === text)
          const unCheckTasks = checkTasks.filter((a, b) => b !== indexCheck)
          setCheckTasks(unCheckTasks)
        }
      }}
    >
      <svg
        className='svg'
        xmlns='http://www.w3.org/2000/svg'
        enableBackground='new 0 0 32 32'
      >
        <path
          className={colorCheck}
          fill='#4e4e50'
          d='M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm-2.48 23.383L6.158 16.02l2.828-2.828 4.533 4.535 9.617-9.617 2.828 2.828L13.52 23.383z'
        ></path>
      </svg>
    </button>
  )
}

export default ButtonCheck
