import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Forms from './components/Signup';
import Log from './components/Loginpage';
import Navbar from './Navbar';
import Home from './components/Home';
import Users from './Crud';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/Loginpage" element={<Log />} />
        <Route path="/Signup" element={<Forms />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
