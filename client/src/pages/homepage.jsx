import React from 'react';
import logo from '../assets/sa-logo.svg';
// import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <img src={logo} alt="logo" />
      <h1>Welcome to Stock Attack!</h1>
      <p>
        Your go-to app for tracking stocks and managing your investment
        portfolio.
      </p>
      <div>
        <button>Sign-up</button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Homepage;