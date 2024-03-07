import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Forms from './components/Signup'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   
      <App />
   
  </BrowserRouter>
)