import React, { useState } from 'react'

  
function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState(["Apple", "Banana", ])


  const addTask =()=>{
    setTasks([...tasks, task])
    setTask("")
  }
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  alert("Task Deleted"+index)
  }
  return (
    <div>
      <h2>To Do List</h2>
      <input
      type="text" 
      placeholder="Enter a task"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={() =>addTask()}>Add</button>
      <ul>
        {
          tasks.map((task, index)=>(
            <li key={index}>{task}<button onClick={() =>deleteTask(index)}>Delete</button></li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
