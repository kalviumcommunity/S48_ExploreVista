// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
function Navbar() {

  const  navigate = useNavigate();
  const handleLogout = ()=>{
    document.cookie = 'email=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/';
    navigate('/Loginpage');
  }

  return (
    <div className="navbar-container">
      <Link to="/" className="explore-vista">
        <h1>ExploreVista</h1>
        <p>Your tour Guide</p>
      </Link>
      <div className="navbar-buttons">
        <Link to="/Loginpage">
          <button>Log In</button>
        </Link>
        <Link to="/create">
          <button>Sign Up</button>
        </Link>
        <Link to="/Loginpage">
          <button onClick={handleLogout}>Log Out</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;



