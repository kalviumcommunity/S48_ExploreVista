// src/App.jsx
import React from 'react';
import './App.css';
import {Routes,Route, Link } from 'react-router-dom';
import Forms from './components/Signup'
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
    <Navbar/>
      
      <Routes>
        <Route path="/Signup" element={<Forms/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
