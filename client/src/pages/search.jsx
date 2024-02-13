import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from '../assets/sa-logo-black.svg';
import SearchBar from '../components/searchbar';

const Search = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
    };
    return (
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
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                {/* Form Fields */}
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="outlined-basic" 
                  label="Stock Ticker" 
                  variant="outlined" 
                />
                <SearchBar />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Search Stock
              </Button>
            </Box>
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
      );    
}

export default Search;