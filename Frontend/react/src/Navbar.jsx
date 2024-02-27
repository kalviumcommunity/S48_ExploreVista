// Navbar.js

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <div className="navbar-container">
      <Link to="/" className="explore-vista">
        <h1>ExploreVista</h1>
      </Link>
      <div className="navbar-buttons">
        <Link to="/Loginpage">
          <button>Log In</button>
        </Link>
        <Link to="/Signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
