
import React, { useEffect, useState } from 'react'
import { userData } from './api.js'  

function App() {
  const[loading, setLoading] = useState(true)
  const[users,setUsers] = useState([])
  useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/products")
    .then(Response=>Response.json())
    .then(data=>setUsers(data))
    setLoading(false)
  },[])
  return (
    <div>
      <h2>Api Fetching using useEffect</h2>
      {loading ?(
        <h2>Loading...</h2>
        ):(
          <ul>
            {
              users.map(data=>(
                <li key={data.id}>
                  Title:{data.title}
                  Price:{data.price}
                  Description:{data.description}<br/>
                  Images:{data.images.map(img=>(
                    <img src={img} alt={data.title} width="100px" height="100px" />
                  ))}
                  <hr />
                </li>
              ))
            }
          </ul>
        )}
    </div>
  )
}

export default App
