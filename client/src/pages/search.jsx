import React from 'react';
import logo from '../assets/sa-logo-white-sm.svg';
import SearchBar from '../components/searchbar';
import { Button, CssBaseline, TextField, Grid, Box, Typography, Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Search = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);
    };
    return (
        <ThemeProvider theme={darkTheme}>
          <Container component="main" maxWidth="xs" sx={{
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100vh',
            marginTop: '-64px',
          }}>
            <CssBaseline />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img src={logo} alt="logo" />
              <Typography component="h1" variant="h3">
                Search
              </Typography>
              <SearchBar />
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{ mt: 5 }}
              >
                {'Copyright © '}
                Stock Attack 
                {new Date().getFullYear()}
                {'.'}
              </Typography>
            </Box>
          </Container>
        </ThemeProvider>
      );    
}

export default Search;