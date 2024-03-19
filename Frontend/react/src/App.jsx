import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Log from './components/Loginpage';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Users from './components/Crud';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Feedback from './components/Feedback';
import Print from './components/PrintFeedback';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url('path/to/your/background-image.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/Loginpage" element={<Log />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/update/:id" element={<UpdateUser />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/feedback/:id" element={<Feedback />} />
        <Route path="/Feedbackofuser" element={<Print />} />
        <Route path="/moreaboutus" element={<Footer/>} />
      </Routes>
    </div>
  );
}

export default App;