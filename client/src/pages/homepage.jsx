import React from 'react';
import logo from '../assets/sa-logo-white.svg';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Container, CssBaseline, Paper } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Homepage = () => {
  return (
   <ThemeProvider theme={darkTheme}>
     <CssBaseline />
     <Paper maxWidth="sm" sx={{ textAlign: 'center', mt: 8, padding: 2 }}>
      <Box sx={{ my: 4 }}>
        <img src={logo} alt="logo" style={{ maxWidth: '100%', height: 'auto' }} />
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Stock Attack
        </Typography>
        <Typography variant="h5" gutterBottom>
          Your go-to app for tracking stocks and managing your investment portfolio.
        </Typography>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Button variant="outlined" color="primary" component={Link} to="/signup">
            Sign-up
          </Button>
          <Button variant="outlined" color="primary" component={Link} to="/login">
            Login
          </Button>
        </Box>
      </Box>
    </Paper>
   </ThemeProvider>
  );
};

export default Homepage;
