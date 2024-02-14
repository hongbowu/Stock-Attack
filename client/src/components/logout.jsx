import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/login');
  };

  return (
    <Button color="inherit" onClick={handleLogout}>Logout</Button>
  );
};

export default LogoutButton;
