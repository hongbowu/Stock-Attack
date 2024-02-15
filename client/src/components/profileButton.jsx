import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProfileButton = () => {

  return (
    <Button variant='outlined'  color="primary" component={Link} to="/profile">Dashboard</Button>
  );
};

export default ProfileButton;
