import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
// import './index.css'
//commented out because it affects the signup.jsx css

import Dashboard from './pages/dashboard';
import Homepage from './pages/homepage';
import Login from './pages/login';
import Signup from './pages/signup';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
