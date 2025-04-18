import Form from './components/Form'
import Task from './components/Task'
import MessageBox from './components/MessageBox'
import './styles/App.css'

import React, { useState } from 'react'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [tasks, setTasks] = useState([])
  const [showMessage, setShowMessage] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
    document.body.classList.toggle('dark-theme', !isDarkTheme)
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim() === '') return
    setTasks([...tasks, { name: inputValue }])
    setInputValue('')
  }

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index) // !== menaing excluding the index
    setTasks(newTasks)
  }

  const toggleMessage = () => {
    setShowMessage(!showMessage); // Alterna la visibilidad del cuadro de mensaje
  };

  return (
    <div>
      <button className='icon-theme-toggle' onClick={toggleTheme} />
      <button className='icon-question-mark' onClick={toggleMessage}/>

      {showMessage && <MessageBox onClose={toggleMessage} />}

      <h1>to-do list</h1>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        inputValue={inputValue}
      />
      <div className="task-list">
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            handleDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default App
