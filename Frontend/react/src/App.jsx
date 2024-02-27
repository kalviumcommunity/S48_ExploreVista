import React from 'react';
import './App.css';
import {Routes,Route, Link } from 'react-router-dom';
import Forms from './components/Signup'
import  Log from './components/Loginpage'
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
<header>
    <Navbar/>
 </header>
      <Routes>
        <Route path="/Loginpage" element={<Log/>}></Route>
        <Route path="/Signup" element={<Forms/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
