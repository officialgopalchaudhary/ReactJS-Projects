import React,{useState} from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitdata, setData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(submitdata, { name, email, password });
    setName("");
    setEmail("");
    setPassword("");
  }
  return (
    <div className="container">
      <h2>Login </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='User Name'
          value={name} 
          onChange={(e) => setName(e.target.value)}
        /><br />
        <br />
        <input
          type="email"
          placeholder='demo@example.com'
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <br />
        <input
          type="password"
          placeholder='Password'
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <br />
        <button type='submit'>Submit</button>
      </form>
      {/*show form details*/}
      {
        submitdata && (
          <div>
            <h3>Name: {submitdata.name}</h3>
            <h3>Email: {submitdata.email}</h3>
            <h3>Password: {submitdata.password}</h3>
          </div>
        )
      }
    </div>
  )
}

export default App
