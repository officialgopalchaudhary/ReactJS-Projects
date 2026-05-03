import React from 'react'
import { BrowserRouter, Link,Routes,Route } from 'react-router-dom'
import Career from './Pages/Career'
import Department from './Pages/Department'
import Enrollment from './Pages/Enrollment'
import Home from './Pages/Home'
import Overview from './Pages/Overview'
import Program from './Pages/Program'

function App() {
  return (
    <BrowserRouter>
      <h2>University Information System</h2>
      <nav>
        <Link to="/">Career</Link>|
        <Link to="/Department">Department</Link>|
        <Link to="/Enrollment">Enrollment</Link>|
        <Link to="/Home">Home</Link>|
        <Link to="/Overview">Overview</Link>|
        <Link to="/Program">Program</Link>|
      </nav>
      <hr />
      <Routes>
        <Route path='/' element={<Career />} />
        <Route path='/Department' element={<Department />} />
        <Route path='/Enrollment' element={<Enrollment />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Overview' element={<Overview />} />
        <Route path='/Program' element={<Program />} />
      </Routes>
      </BrowserRouter>
    
  )
}

export default App
