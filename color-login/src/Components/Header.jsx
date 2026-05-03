import React, { useState } from 'react'

function Header() {
    const [isLoggedIn, setIsLoggedIn] =useState(false)
  return (
    <div className='header'>
        <div>Logo</div>
        <div>{isLoggedIn?"Welcome User":"Please Login"}</div>
        <div>
            <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn?"Logout":"Login"}
            </button>
        </div>
    </div>
    
  )
}

export default Header
