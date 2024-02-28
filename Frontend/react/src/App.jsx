import React, { useState } from 'react';
import './App.css';
import {Routes,Route, Link } from 'react-router-dom';
import Forms from './components/Signup'
import  Log from './components/Loginpage'
import Navbar from './Navbar';
import Home from './components/Home';
import axios from 'axios'; 
import { useEffect } from 'react';

function App() {
  const [users,setUsers] = useState([])
   useEffect(() => {
    axios.get('http://localhost:3000/')
    .then(users => setUsers(users.data))
    .catch(err => console.log(err))
   },[])
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
      <div className="api">
      {users &&
          users.map((guides, id) => (
            <div className="data" key={id}>
              <p><strong>Place: </strong>{guides.place}</p>
              <p><strong>Vehicles Available: </strong>{guides.vehicles_available}</p>
              <p><strong>Options to Stay: </strong>{guides.options_to_stay}</p>
              <p><strong>Brief History: </strong>{guides.brief_history}</p>
              <p><strong>Best Time to Visit: </strong>{guides.best_time_to_visit}</p>

            </div>
          ))}
        
      </div>
    </div>
  );
}

export default App;
