import React from 'react';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="/">Home</a></li>     
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <Link to="/Contact Us"> <li>Contact</li>  </Link>
            </ul>
          </div>
        </div>
      </div>      <div className="footer-bottom">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
