import React, { useState } from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
export default function Log() {
  const [field, setField] = useState({
    userName: "",
    password: "",
  });

  const [submitted, setSubmit] = useState(false);
  const [validate, setValidation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (field.userName && field.password) {
      // Validation logic if needed
      setValidation(true);
    } else {
      setValidation(false);
    }
    setSubmit(true);
  };

  return (
    <div>
      <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          {submitted && validate ? (
            <div className="success-message">Login successful!</div>
          ) : null}

          <input
            id="user-name"
            className="form-field"
            type="text"
            placeholder="Username"
            name="userName"
            value={field.userName}
            onChange={(e) => {
              setField({ ...field, userName: e.target.value });
            }}
          />
          {submitted && !field.userName ? <span>Please enter your Username</span> : null}

          <input
            id="password"
            className="form-field"
            type="password"
            placeholder="Password"
            name="password"
            value={field.password}
            onChange={(e) => {
              setField({ ...field, password: e.target.value });
            }}
          />
          {submitted && !field.password ? <span>Please enter your password</span> : null}
          <Link to="/Home">
          <button className="form-field" type="submit">
            Log In
          </button>
          </Link>
        
        </form>
      </div>
    </div>
  );
}
