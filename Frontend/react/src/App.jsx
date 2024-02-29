import React, { useState } from 'react';
import './App.css';
import {Routes,Route, Link } from 'react-router-dom';
import Forms from './components/Signup'
import  Log from './components/Loginpage'
import Navbar from './Navbar';
import Home from './components/Home';
import axios from 'axios'; 
import { useEffect } from 'react';
import Users from './Crud';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser'

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
        <Route path="/Users" element={<Users />}></Route>
        <Route path="/create" element={<CreateUser />}></Route>
        <Route path="/update" element={<UpdateUser />}></Route>

      </Routes>
     
    </div>
  );
}

export default App;
