import React, { useState } from 'react'
import Header from './components/Header'
import Content from './Components/Content'
import Footer from './Components/Footer'

function App() {
  const [change, setChange] =useState(false)
  return (
    <div className={change?"dark":"light"}>
      <button onClick={()=>setChange(!change)}>{change?"light":"dark"}</button>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
