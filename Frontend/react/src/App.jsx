// src/App.jsx
import React from 'react';
import './App.css';
import {Routes,Route, Link } from 'react-router-dom';
import Forms from './components/Signup'
function App() {
  return (
    <div className="App">
      <h1>Welcome to ExploreVista</h1>
      <p>This is a simple landing page for my ASAP project called ExploreVista.</p>
      <Link to="/Signup">
       <button>Sign Up</button> 
      </Link>
      <Routes>
        <Route path="/Signup" element={<Forms/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
