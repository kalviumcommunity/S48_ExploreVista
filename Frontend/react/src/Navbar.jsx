import React from 'react'
import {Routes,Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
        <h1>ONE</h1>
        <h1>TWO</h1>
        <h1>THREE</h1>
        <h1>FOUR</h1>
        <Link to="/Signup">
       <button>Sign Up</button> 
      </Link>
    </div>
  )
}

export default Navbar