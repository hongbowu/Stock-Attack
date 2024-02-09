import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to Stock Attack!</h1>
      <p>
        Your go-to app for tracking stocks and managing your investment
        portfolio.
      </p>
      <div>
        <Link to="/signup">Sign Up Now</Link>
      </div>
    </div>
  );
};
