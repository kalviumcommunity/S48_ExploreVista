import React from 'react';
import './App.css';
import {Routes,Route, Link } from 'react-router-dom';
import Forms from './components/Signup'
import  Log from './components/Loginpage'
import Navbar from './Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
<header>
    <Navbar/>
 </header>
      <Routes>
        <Route path="/Loginpage" element={<Log/>}></Route>
        <Route path="/Signup" element={<Forms/>}></Route>
        <Route path="/Home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
