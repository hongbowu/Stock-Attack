import React from 'react';
import logo from '../assets/sa-logo-white.svg';
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Button, Typography, Container, CssBaseline, Paper } from '@mui/material';
import Background from '../images/homepage-background.jpg';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  typography: {
    h3: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h5: {
      fontWeight: 400,
      fontSize: '1.5rem',
    },
    body2: {
      color: 'text.secondary',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '2rem',
          borderRadius: '1rem',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.12)', 
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          flexGrow: 1,
          textAlign: 'center',
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }
      }
    }
  },
});

const Homepage = () => {
  return (
    // <Box
    //   sx={{
    //   flexGrow: 1,
    //   height: '100vh',
    //   textAlign: 'center',
    //   backgroundImage: `url(${Background})`,
    //   backgroundRepeat: "no-repeat",
    //   backgroundPosition: "center center",
    //   backgroundSize: "cover",
    //   backgroundAttachment: "fixed",
    //   }}
    // >
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
          <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 12, mb: 6 }}>
            <Paper elevation={12} sx={{ width: '100%', maxWidth: 600 }}>
              <Box sx={{ my: 4 }}>
                <img src={logo} alt="logo" style={{ maxWidth: '30%', height: 'auto', mb: 4 }} />
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
                <Typography variant="body2" sx={{ mt: 5 }}>
                  {'Copyright © '}
                  Stock Attack
                  {new Date().getFullYear()}
                  {'.'}
                </Typography>
              </Box>
            </Paper>
          </Container>
      </ThemeProvider>
    // </Box>
  );
};

export default Homepage;

