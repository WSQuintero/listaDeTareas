import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import { TaskContext } from './Context/TaskContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContext>
      <App />
    </TaskContext>
  </React.StrictMode>
)
