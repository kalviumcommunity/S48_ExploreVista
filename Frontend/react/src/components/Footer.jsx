import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h2>Quick Links</h2>
            <ul className="horizontal-list">
              <li><a href="/">Home</a></li>     
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><Link to="/Contact">Contact</Link></li>
              <li><Link to="/Users">User data</Link></li>
            </ul>
          </div>
        </div>
      </div>  
      <div className="footer-bottom">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
