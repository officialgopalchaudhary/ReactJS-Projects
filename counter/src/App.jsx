import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="container">
      <h2>count{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )                   
}
 
export default App

